from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .database.database import init_db

from .routes.news import router as news_router
from .routes.equipments import router as equipments_router
from .routes.solutions import router as solutions_router
from .routes.orders import router as orders_router
server = FastAPI()
server.include_router(news_router, tags=["News"], prefix="/news")
server.include_router(equipments_router, tags=["Equipments"], prefix="/equipments")
server.include_router(solutions_router, tags=["Solutions"], prefix="/solutions")
server.include_router(orders_router, tags=["Orders"], prefix="/orders")


server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@server.on_event("startup")
async def on_startup():
    await init_db()

