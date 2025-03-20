import os

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles

from .database.database import init_db

from .routes.news import router as news_router
from .routes.equipments import router as equipments_router
from .routes.solutions import router as solutions_router
from .routes.orders import router as orders_router
from .routes.auth import router as auth_router
from .routes.banner import router as banner_router
from .routes.company import router as company_router

server = FastAPI()
server.include_router(news_router, tags=["News"], prefix="/news")
server.include_router(equipments_router, tags=["Equipments"], prefix="/equipments")
server.include_router(solutions_router, tags=["Solutions"], prefix="/solutions")
server.include_router(orders_router, tags=["Orders"], prefix="/orders")
server.include_router(auth_router, tags=["Auth"], prefix="/auth")
server.include_router(banner_router, tags=["Banner"], prefix="/banner")
server.include_router(company_router, tags=["Company"], prefix="/company")


server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


FILES_DIR = os.path.join(os.path.dirname(__file__), "files")
os.makedirs(FILES_DIR, exist_ok=True)

# Подключение статических файлов
server.mount("/files", StaticFiles(directory=FILES_DIR), name="files")


@server.on_event("startup")
async def on_startup():
    await init_db()

