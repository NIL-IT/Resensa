import os
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..database.models import Equipment
from ..repositories.equipments import EquipmentsRepository, get_equipment_repository
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_equipments(name: str = Form(...),
    description: str = Form(...),
    equipment_photo: UploadFile = File(...),  equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):

    dirname = os.path.dirname(__file__)
    directory = os.path.join(dirname, f"../../../files/{equipment_photo.filename}")
    absolute_path = os.path.abspath(directory)
    await save_upload_file(equipment_photo, absolute_path)
    equipment_model = Equipment(
        equipment_image=absolute_path,
        name=name,
        description=description,
    )
    try:
        equipment = await equipment_repo.create_equipment(equipment_model)
        return equipment
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_equipments(equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        equipments = await equipment_repo.get_all_equipment()
        equipments_with_images = []
        for equipment in equipments:
            image_data = read_image(equipment.equipment_image)
            equipments_with_images.append({
                "id": equipment.id,
                "name": equipment.name,
                "description": equipment.description,
                "image": image_data if image_data else None
            })

        return equipments_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/{equipment_id}", status_code=status.HTTP_200_OK)
async def get_equipment_by_id(equipment_id: int, equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        equipment = await equipment_repo.get_equipment_by_id(equipment_id)
        image_data = read_image(equipment.equipment_image)
        return {
            "id": equipment.id,
            "name": equipment.name,
            "description": equipment.description,
            "image": (image_data if image_data else None)
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.put("/{equipment_id}", status_code=status.HTTP_200_OK)
async def update_equipment(equipment_id: int, name: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    equipment_photo: Optional[UploadFile] = File(None), equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        existing_equipment = await equipment_repo.get_equipment_by_id(equipment_id)
        if not existing_equipment:
            raise HTTPException(status_code=404, detail="Equipment not found")

        updated_name = name if name else existing_equipment.name
        updated_description = description if description else existing_equipment.description

        if equipment_photo:
            dirname = os.path.dirname(__file__)
            directory = os.path.join(dirname, f"../../../files/{equipment_photo.filename}")
            updated_equipment_photo = os.path.abspath(directory)
            await save_upload_file(equipment_photo, updated_equipment_photo)
        else:
            updated_equipment_photo = existing_equipment.equipment_image

        updated_equipment = await equipment_repo.update_equipment(equipment_id, updated_name, updated_description, updated_equipment_photo)
        return updated_equipment
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.delete("/{equipment_id}")
async def delete_equipment(equipment_id: int, equipment_repo: EquipmentsRepository = Depends(get_equipment_repository)):
    try:
        return await equipment_repo.delete_equipment(equipment_id)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error deleting equipment")