from fastapi import Depends, HTTPException
from sqlalchemy import select, update
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from ..database.database import get_db
from ..database.models import Equipment


class EquipmentsRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_equipment(self, equipment: Equipment):
        try:
            self.db.add(equipment)
            await self.db.commit()
            await self.db.refresh(equipment)
            return equipment
        except Exception as e:
            await self.db.rollback()
            raise e

    async def get_all_equipment(self):
        try:
            result = await self.db.execute(select(Equipment))
            equipments = result.scalars().all()
            return equipments
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching equipments")

    async def get_equipment_by_id(self, equipment_id: int):
        try:
            result = await self.db.execute(select(Equipment).filter(Equipment.id == equipment_id))
            news = result.scalar_one_or_none()  # Fetch one or return None if not found
            if not news:
                raise NoResultFound(f"Equipment with id {equipment_id} not found")
            return news
        except NoResultFound as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching equipments by id")

    async def update_equipment(self, equipment_id: int, name: str, description: str, photo_filename: str):
        stmt = (
            update(Equipment)
            .where(Equipment.id == equipment_id)
            .values(name=name, description=description, equipment_image=photo_filename)
            .execution_options(synchronize_session="fetch")
        )
        result = await self.db.execute(stmt)
        await self.db.commit()

        equipment = await self.get_equipment_by_id(equipment_id)
        return equipment

    async def delete_equipment(self, equipment_id: int):
        try:
            equipment = await self.get_equipment_by_id(equipment_id)
            await self.db.delete(equipment)
            await self.db.commit()
            return {"detail": "Equipment deleted successfully"}
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error deleting equipment")

    async def get_required_equipment(self, param: int):
        min_result = await self.db.execute(select(Equipment).order_by(Equipment.min_param))
        global_min = min_result.scalars().first()

        max_result = await self.db.execute(select(Equipment).order_by(Equipment.max_param.desc()))
        global_max = max_result.scalars().first()

        if global_min and param < global_min.min_param:
            raise ValueError(f"Parameter is too low. Minimum allowed is {global_min.min_param}.")

        if global_max and param > global_max.max_param:
            raise ValueError(f"Parameter is too high. Maximum allowed is {global_max.max_param}.")

        # Query for equipment matching the parameter
        result = await self.db.execute(select(Equipment).filter(
            Equipment.min_param <= param,
            Equipment.max_param >= param
        ))
        equipment = result.scalar_one_or_none()

        if not equipment:
            raise NoResultFound(f"Equipment with such params {param} not found")

        return equipment



async def get_equipment_repository(db: AsyncSession = Depends(get_db)):
    return EquipmentsRepository(db)