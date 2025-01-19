import os
from io import BytesIO
from typing import List

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from pydantic import BaseModel
from starlette.responses import FileResponse

from app.server.database.models import Order, OrderState
from app.server.repositories.orders import OrdersRepository, get_orders_repository

router = APIRouter()

class OrderBase(BaseModel):
    name: str
    number: int
    date: str
    client_name: str
    state: OrderState = OrderState.paid
    order_amount: float

@router.post("/")
async def create_order(order: OrderBase, orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        order_model = Order(
            name=order.name,
            number=order.number,
            date=order.date,
            client_name=order.client_name,
            state=order.state,
            order_amount=order.order_amount,
        )
        return await orders_repo.create_order(order_model)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)

# Get all orders
@router.get("/")
async def get_orders(orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        return await orders_repo.get_orders()
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching orders")

# Get order by ID
@router.get("/{order_id}")
async def get_order(order_id: int, orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        return await orders_repo.get_order_by_id(order_id)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching order by id")

# Delete order by ID
@router.delete("/{order_id}")
async def delete_order(order_id: int, orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        return await orders_repo.delete_order(order_id)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error deleting order")

@router.patch("/{order_id}/state")
async def change_order_state(order_id: int, new_state: OrderState, orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        return await orders_repo.change_state(order_id, new_state)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error changing order state")

@router.get("/export/excel")
async def export_orders_to_excel(orders_repo: OrdersRepository = Depends(get_orders_repository)):
    dirname = os.path.dirname(__file__)
    directory = os.path.join(dirname, f"../../../files/orders_export.csv")
    absolute_path = os.path.abspath(directory)
    os.makedirs(os.path.dirname(absolute_path), exist_ok=True)
    try:
        if os.path.exists(absolute_path):
            os.remove(absolute_path)

        await orders_repo.get_excel_data(absolute_path)

        # Return the file as a downloadable response
        return FileResponse(absolute_path, filename="orders_export.xlsx", media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error exporting orders to CSV: {e}")

@router.post("/import/excel")
async def import_orders(file: UploadFile = File(...), orders_repo: OrdersRepository = Depends(get_orders_repository)):
    try:
        # Читаем файл
        file_content = await file.read()
        file_bytes = BytesIO(file_content)

        # Импортируем данные в базу данных
        return await orders_repo.import_orders_from_excel(file_bytes)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error importing orders: {e}")