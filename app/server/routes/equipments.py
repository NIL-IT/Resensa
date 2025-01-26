import os
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from fastapi.params import Query
from starlette import status

from ..database.models import Equipment
from ..repositories.equipments import EquipmentsRepository, get_equipment_repository
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()
BASE_URL = "https://nilit1.ru"  # Замените на ваш реальный адрес


@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_equipments(name: str = Form(...),
    description: str = Form(...),
    min_param: int = Form(...),
    max_param: int = Form(...),
    image_banner: UploadFile = File(...),  image_card: UploadFile = File(...), sub_header: str = Form(...), header: str = Form(...),
    equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):

    dirname = os.path.dirname(__file__)  # Текущая директория
    save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
    os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет

    # Сохраняем файл
    image_banner_path = os.path.join(save_dir, image_banner.filename)
    image_banner_relative_path = f"files/{image_banner.filename}"  # Относительный путь для базы данных
    await save_upload_file(image_banner, image_banner_path)

    image_card_path = os.path.join(save_dir, image_card.filename)
    image_card_relative_path = f"files/{image_card.filename}"  # Относительный путь для базы данных
    await save_upload_file(image_card, image_card_path)

    equipment_model = Equipment(
        image_banner=image_banner_relative_path,
        image_card=image_card_relative_path,
        name=name,
        min_param=min_param,
        max_param=max_param,
        description=description,
        sub_header=sub_header,
        header=header
    )

    try:
        equipment = await equipment_repo.create_equipment(equipment_model)
        return equipment
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get('/requested-equipment')
async def get_required_equipment(param: int = Query(..., description="Parameter to filter equipment"), equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        equipment = await equipment_repo.get_required_equipment(param)

        equipments_with_images = [
            {
                "id": equipment.id,
            "name": equipment.name,
            "min_param": equipment.min_param,
            "max_param": equipment.max_param,
            "description": equipment.description,
            "image_banner": f"{BASE_URL}/{equipment.image_banner}",
            "image_card": f"{BASE_URL}/{equipment.image_card}",
            "sub_header": equipment.sub_header,
            "header": equipment.header
            }
        ]

        return equipments_with_images
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_equipments(equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        equipments = await equipment_repo.get_all_equipment()  # Адрес вашего сервера

        equipments_with_images = [
            {
                "id": equipment.id,
            "name": equipment.name,
            "min_param": equipment.min_param,
            "max_param": equipment.max_param,
            "description": equipment.description,
            "image_banner": f"{BASE_URL}/{equipment.image_banner}",
            "image_card": f"{BASE_URL}/{equipment.image_card}",
            "sub_header": equipment.sub_header,
            "header": equipment.header
            }
            for equipment in equipments
        ]

        return equipments_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
@router.get("/{equipment_id}", status_code=status.HTTP_200_OK)
async def get_equipment_by_id(
    equipment_id: int,
    equipment_repo: EquipmentsRepository = Depends(get_equipment_repository),
):
    try:
        equipment = await equipment_repo.get_equipment_by_id(equipment_id)
        return {
            "id": equipment.id,
            "name": equipment.name,
            "min_param": equipment.min_param,
            "max_param": equipment.max_param,
            "description": equipment.description,
            "image_banner": f"{BASE_URL}/{equipment.image_banner}",
            "image_card": f"{BASE_URL}/{equipment.image_card}",
            "sub_header": equipment.sub_header,
            "header": equipment.header
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.put("/{equipment_id}", status_code=status.HTTP_200_OK)
async def update_equipment(
    equipment_id: int,
    name: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    min_param: Optional[int] = Form(None),
    max_param: Optional[int] = Form(None),
    image_banner: UploadFile = File(None),  image_card: UploadFile = File(None), sub_header: Optional[str] = Form(None), header: str = Form(None),
    equipment_repo: EquipmentsRepository = Depends(get_equipment_repository),
):
    try:
        equipment = await equipment_repo.get_equipment_by_id(equipment_id)
        if not equipment:
            raise HTTPException(status_code=404, detail="Equipment not found")

        updated_image_banner = equipment.image_banner
        updated_image_card = equipment.image_card
        if image_banner or image_card:
            dirname = os.path.dirname(__file__)  # Текущая директория
            save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
            os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет
            if image_banner:
                file_path = os.path.join(save_dir, image_banner.filename)
                updated_image_banner = f"files/{image_banner.filename}"
                await save_upload_file(image_banner, file_path)
            if image_card:
                file_path = os.path.join(save_dir, image_card.filename)
                updated_image_card = f"files/{image_card.filename}"
                await save_upload_file(image_card, file_path)

        updated_equipment = await equipment_repo.update_equipment(
            equipment_id,
            name or equipment.name,
            description or equipment.description,
            min_param or equipment.min_param,
            max_param or equipment.max_param,
            updated_image_banner, updated_image_card,
            sub_header or equipment.sub_header,
            header or equipment.header,
        )
        return {
            "id": equipment.id,
            "name": updated_equipment.name,
            "min_param": updated_equipment.min_param,
            "max_param": updated_equipment.max_param,
            "description": updated_equipment.description,
            "image_banner": f"{BASE_URL}/{updated_equipment.image_banner}",
            "image_card": f"{BASE_URL}/{updated_equipment.image_card}",
            "sub_header": updated_equipment.sub_header,
            "header": updated_equipment.header
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.delete("/{equipment_id}", status_code=status.HTTP_200_OK)
async def delete_equipment(
    equipment_id: int,
    equipment_repo: EquipmentsRepository = Depends(get_equipment_repository),
):
    try:
        return await equipment_repo.delete_equipment(equipment_id)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))