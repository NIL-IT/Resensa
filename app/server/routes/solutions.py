import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.solutions import SolutionsRepository, get_solutions_repository
from ..database.models import Solutions
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()
BASE_URL = "https://nilit1.ru"  # Замените на ваш реальный адрес


@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_solutions(name: str = Form(...),
    description: str = Form(...),
    image_banner: UploadFile = File(...), image_card: UploadFile = File(...), sub_header: str = File(...),  header: str = Form(...),  solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    dirname = os.path.dirname(__file__)  # Текущая директория
    save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
    os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет

    # Сохраняем файл
    image_banner_path = os.path.join(save_dir, image_banner.filename)
    image_banner_relative_path = f"files/{image_banner.filename}"
    await save_upload_file(image_banner, image_banner_path)

    image_card_path = os.path.join(save_dir, image_card.filename)
    image_card_relative_path = f"files/{image_card.filename}"
    await save_upload_file(image_card, image_card_path)


    solution_model = Solutions(
        image_banner=image_banner_relative_path,
        image_card=image_card_relative_path,
        name=name,
        description=description,
        sub_header=sub_header,
        header=header
    )
    try:
        solution = await solution_repo.create_solution(solution_model)
        return solution
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_solutions(solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        solutions = await solution_repo.get_all_solutions()
        solutions_with_images = []
        for solution in solutions:
            solutions_with_images.append({
                "id": solution.id,
                "name": solution.name,
                "description": solution.description,
                "image_card": f"{BASE_URL}/{solution.image_card}",
                "image_banner": f"{BASE_URL}/{solution.image_banner}",
                "sub_header": solution.sub_header,
                "header": solution.header
            })

        return solutions_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/{solution_id}", status_code=status.HTTP_200_OK)
async def get_equipment_by_id(solution_id: int, solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        solution = await solution_repo.get_solution_by_id(solution_id)
        return {
            "id": solution.id,
            "name": solution.name,
            "description": solution.description,
            "image_card": f"{BASE_URL}/{solution.image_card}",
            "image_banner": f"{BASE_URL}/{solution.image_banner}",
            "sub_header": solution.sub_header,
            "header": solution.header
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.put("/{solution_id}", status_code=status.HTTP_200_OK)
async def update_solution(solution_id: int, name: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    image_banner: UploadFile = File(None),  image_card: UploadFile = File(None), sub_header: str = File(None), header: str = File(None), solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        existing_solution = await solution_repo.get_solution_by_id(solution_id)
        if not existing_solution:
            raise HTTPException(status_code=404, detail="Solution not found")

        updated_name = name if name else existing_solution.name
        updated_description = description if description else existing_solution.description
        updated_image_banner = existing_solution.image_banner
        updated_image_card = existing_solution.image_card


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

        updated_solution = await solution_repo.update_solution(solution_id, updated_name, updated_description, updated_image_banner, updated_image_card, sub_header)
        return {
            "id": updated_solution.id,
            "name": updated_solution.name,
            "description": updated_solution.description,
            "image_card": f"{BASE_URL}/{updated_solution.image_card}",
            "image_banner": f"{BASE_URL}/{updated_solution.image_banner}",
            "sub_header": updated_solution.sub_header,
            "header": updated_solution.header
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.delete("/{solution_id}")
async def delete_equipment(solution_id: int, solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        return await solution_repo.delete_solution(solution_id)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error deleting solution")