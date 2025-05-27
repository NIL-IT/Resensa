from sqlalchemy import inspect
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

from .models import News, Equipment, Solutions, Order, Admin, Banner, Company

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
print(DATABASE_URL)
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
    if not inspector.has_table('company'):
        Company.__table__.create(conn)

# from sqlalchemy import inspect
# import asyncpg
#
# # Импорт моделей должен быть после объявления Base
# from .models import News, Equipment, Solutions, Order, Admin, Banner, Company
#
# load_dotenv()
# DATABASE_URL = os.getenv("DATABASE_URL")
#
# # Явно создаем Base
# Base = declarative_base()
#
# engine = create_async_engine(
#     DATABASE_URL,
#     echo=True,
#     pool_pre_ping=True  # Добавляем проверку соединения
# )
#
# async_session = sessionmaker(
#     bind=engine,
#     class_=AsyncSession,
#     expire_on_commit=False,
#     autoflush=False
# )
#
# async def get_db():
#     """Генератор сессий с обработкой ошибок"""
#     async with async_session() as session:
#         try:
#             yield session
#         except asyncpg.PostgresError as e:
#             await session.rollback()
#             raise e
#         finally:
#             await session.close()
#
# async def init_db():
#     """Инициализация БД с улучшенной обработкой ошибок"""
#     try:
#         async with engine.begin() as conn:
#             # Стандартный способ создания всех таблиц
#             await conn.run_sync(Base.metadata.create_all)
#
#             # Дополнительная проверка (опционально)
#             inspector = await conn.run_sync(inspect)
#             table_names = await conn.run_sync(inspector.get_table_names)
#             print(f"✅ Таблицы в БД: {table_names}")
#
#     except Exception as e:
#         print(f"❌ Ошибка при инициализации БД: {e}")
#         raise
