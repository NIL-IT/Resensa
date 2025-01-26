from datetime import datetime

from fastapi import HTTPException, Depends
from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession

from ..database.database import get_db
from ..database.models import Admin


class AdminsRepository:
    def __init__(self, db: AsyncSession):
        self.db = db
    async def get_user(self, email: str):
        try:
            result = await self.db.execute(select(Admin).filter(Admin.email == email))
            admin = result.scalar_one_or_none()
            now = datetime.now()
            formatted_date_time = now.strftime("%d-%m-%Y %H:%M")
            stmt = (
                update(Admin)
                .where(Admin.id == admin.id)
                .values(last_login=formatted_date_time)
                .execution_options(synchronize_session="fetch")
            )

            comm = await self.db.execute(stmt)
            await self.db.commit()
            result_2 = await self.db.execute(select(Admin).filter(Admin.email == email))
            updated_admin = result_2.scalar_one_or_none()

            return updated_admin
        except Exception as e:
            raise HTTPException(status_code=422, detail="Email not found")

async def get_admin_repository(db: AsyncSession = Depends(get_db)):
    return AdminsRepository(db)