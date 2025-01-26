from sqlalchemy import inspect
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

from .models import News, Equipment, Solutions, Order, Admin, Banner

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_async_engine(DATABASE_URL, echo=True)

async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# Dependency to get the database session
async def get_db():
    async with async_session() as session:
        yield session

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(create_tables)

def create_tables(conn):
    inspector = inspect(conn)

    if not inspector.has_table('news'):
        News.__table__.create(conn)
    if not inspector.has_table('equipment'):
        Equipment.__table__.create(conn)
    if not inspector.has_table('solutions'):
        Solutions.__table__.create(conn)
    if not inspector.has_table('orders'):
        Order.__table__.create(conn)
    if not inspector.has_table('admins'):
        Admin.__table__.create(conn)
    if not inspector.has_table('banner'):
        Banner.__table__.create(conn)