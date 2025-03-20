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

    async def update_equipment(self, equipment_id: int, name: str, description: str, extra_description: str, min_param: int, max_param: int, image_banner: str, image_card: str, sub_header: str,
                               header: str, image_banner_alt: str, image_card_alt: str, page_description: str, page_title: str, page_keywords: str, hidden_seo_text: str):
        stmt = (
            update(Equipment)
            .where(Equipment.id == equipment_id)
            .values(name=name, description=description, extra_description=extra_description, min_param=min_param, max_param=max_param, image_banner= image_banner,
                    image_card=image_card, sub_header=sub_header, header=header, image_banner_alt=image_banner_alt, image_card_alt=image_card_alt,
                    page_description=page_description, page_title=page_title, page_keywords=page_keywords, hidden_seo_text=hidden_seo_text)
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
        # Получаем минимальное и максимальное значения
        min_result = await self.db.execute(select(Equipment).order_by(Equipment.min_param))
        global_min = min_result.scalars().first()

        max_result = await self.db.execute(select(Equipment).order_by(Equipment.max_param.desc()))
        global_max = max_result.scalars().first()

        # Если значение параметра меньше минимального, возвращаем товар с минимальным значением
        if global_min and param < global_min.min_param:
            result = await self.db.execute(select(Equipment).filter(Equipment.min_param == global_min.min_param))
            equipment = result.scalars().first()  # Используем first(), чтобы избежать ошибки
            if not equipment:
                raise NoResultFound(f"Equipment with minimum parameter {global_min.min_param} not found.")
            return equipment

        # Если значение параметра больше максимального, возвращаем товар с максимальным значением
        if global_max and param > global_max.max_param:
            result = await self.db.execute(select(Equipment).filter(Equipment.max_param == global_max.max_param))
            equipment = result.scalars().first()  # Используем first(), чтобы избежать ошибки
            if not equipment:
                raise NoResultFound(f"Equipment with maximum parameter {global_max.max_param} not found.")
            return equipment

        # Ищем товар в пределах диапазона (если параметр находится внутри диапазона)
        result = await self.db.execute(select(Equipment).filter(
            Equipment.min_param <= param,
            Equipment.max_param >= param
        ))
        equipment = result.scalars().first()

        if not equipment:
            raise NoResultFound(f"Equipment with parameter {param} not found")

        return equipment



async def get_equipment_repository(db: AsyncSession = Depends(get_db)):
    return EquipmentsRepository(db)