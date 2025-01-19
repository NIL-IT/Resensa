from fastapi import Depends, HTTPException
from sqlalchemy import select, update
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.server.database.database import get_db
from app.server.database.models import News


class NewsRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_news(self, news: News):
        try:
            self.db.add(news)
            await self.db.commit()
            await self.db.refresh(news)
            return news
        except Exception as e:
            await self.db.rollback()
            raise e

    async def get_all_news(self):
        try:
            result = await self.db.execute(select(News))
            news_list = result.scalars().all()
            return news_list
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching news")

    async def get_news_by_id(self, news_id: int):
        try:
            result = await self.db.execute(select(News).filter(News.id == news_id))
            news = result.scalar_one_or_none()  # Fetch one or return None if not found
            if not news:
                raise NoResultFound(f"News with id {news_id} not found")
            return news
        except NoResultFound as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching news by id")

    async def update_news(self, news_id: int, title: str, text: str, news_photo: str):
        stmt = (
            update(News)
            .where(News.id == news_id)
            .values(title=title, text=text, news_photo=news_photo)
            .execution_options(synchronize_session="fetch")
        )
        result = await self.db.execute(stmt)
        await self.db.commit()

        equipment = await self.get_news_by_id(news_id)
        return equipment

    async def delete_news(self, news_id: int):
        try:
            news = await self.get_news_by_id(news_id)
            await self.db.delete(news)
            await self.db.commit()
            return {"detail": "News deleted successfully"}
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error deleting news")

async def get_news_repository(db: AsyncSession = Depends(get_db)):
    return NewsRepository(db)