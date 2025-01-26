from fastapi import HTTPException, Depends
from sqlalchemy import select, update
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from ..database.database import get_db
from ..database.models import Banner


class BannerRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_banner(self, banner: Banner):
        try:
            self.db.add(banner)
            await self.db.commit()
            await self.db.refresh(banner)
            return banner
        except Exception as e:
            await self.db.rollback()
            raise e

    async def get_banner(self):
        try:
            result = await self.db.execute(select(Banner))
            banner = result.scalar_one_or_none()  # Fetch one or return None if not found
            if not banner:
                raise NoResultFound(f"Banner not found")
            return banner
        except NoResultFound as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching banner")

    async def update_banner(self,  first_value_string: str, first_value: int, second_value_string: str, second_value: int, sub_header: str):
        stmt = (
            update(Banner)
            .where(Banner.id == 1)
            .values(first_value_string = first_value_string,
            first_value = first_value,
            second_value_string = second_value_string,
            second_value =  second_value,
            sub_header = sub_header)
            .execution_options(synchronize_session="fetch")
        )
        result = await self.db.execute(stmt)
        await self.db.commit()

        equipment = await self.get_banner()
        return equipment

async def get_banner_repository(db: AsyncSession = Depends(get_db)):
    return BannerRepository(db)