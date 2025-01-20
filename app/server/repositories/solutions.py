from fastapi import Depends, HTTPException
from sqlalchemy import select, update
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from ..database.database import get_db
from ..database.models import Solutions


class SolutionsRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_solution(self, solution: Solutions):
        try:
            self.db.add(solution)
            await self.db.commit()
            await self.db.refresh(solution)
            return solution
        except Exception as e:
            await self.db.rollback()
            raise e

    async def get_all_solutions(self):
        try:
            result = await self.db.execute(select(Solutions))
            solution = result.scalars().all()
            return solution
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching solutions")

    async def get_solution_by_id(self, solution_id: int):
        try:
            result = await self.db.execute(select(Solutions).filter(Solutions.id == solution_id))
            solution = result.scalar_one_or_none()  # Fetch one or return None if not found
            if not solution:
                raise NoResultFound(f"Solution with id {solution} not found")
            return solution
        except NoResultFound as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching solutions by id")

    async def update_solution(self, solution_id: int, name: str, description: str, solutions_image: str):
        stmt = (
            update(Solutions)
            .where(Solutions.id == solution_id)
            .values(name=name, description=description, solutions_image=solutions_image)
            .execution_options(synchronize_session="fetch")
        )
        result = await self.db.execute(stmt)
        await self.db.commit()

        solution = await self.get_solution_by_id(solution_id)
        return solution

    async def delete_solution(self, solution_id: int):
        try:
            solution = await self.get_solution_by_id(solution_id)
            await self.db.delete(solution)
            await self.db.commit()
            return {"detail": "Equipment deleted successfully"}
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error deleting solution")

async def get_solutions_repository(db: AsyncSession = Depends(get_db)):
    return SolutionsRepository(db)