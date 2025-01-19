import enum

from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Enum, Table, Float
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()


class OrderState(enum.Enum):
    paid = "Оплачен"
    cancelled = "Отменен"
    shipped = "Доставлен"

class News(Base):
    __tablename__ = "news"
    id = Column(Integer, primary_key=True, index=True)
    news_photo = Column(String, nullable=False, unique=True)
    title = Column(String, unique=True, nullable=False)
    text = Column(String)
    date = Column(String)

class Equipment(Base):
    __tablename__ = "equipment"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    equipment_image = Column(String)

class Solutions(Base):
    __tablename__ = "solutions"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    solutions_image = Column(String)

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    number = Column(Integer, nullable=False)
    date = Column(String)
    client_name = Column(String)
    state = Column(Enum(OrderState), default=OrderState.paid)
    order_amount = Column(Float, nullable=False)
