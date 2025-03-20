import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.solutions import SolutionsRepository, get_solutions_repository
from ..database.models import Solutions
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()
BASE_URL = "https://new.recensa.ru"  # Замените на ваш реальный адрес


@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_solutions(name: str = Form(...),
    description: str = Form(...),
    extra_description: str = Form(...),
    image_banner: UploadFile = File(...), image_card: UploadFile = File(...),
    sub_header: str = File(...),  header: str = Form(...),
    image_banner_alt: str = Form(...),
    image_card_alt: str = Form(...),
    page_description: str = Form(...),
    page_title: str = Form(...),
    page_keywords: str = Form(...), hidden_seo_text: str = Form(...), solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    dirname = os.path.dirname(__file__)  # Текущая директория
    save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
    os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет

    # Сохраняем файл
    image_banner_path = os.path.join(save_dir, image_banner.filename.replace(" ", "_"))
    image_banner_relative_path = f"files/{image_banner.filename.replace(" ", "_")}"
    await save_upload_file(image_banner, image_banner_path)

    image_card_path = os.path.join(save_dir, image_card.filename.replace(" ", "_"))
    image_card_relative_path = f"files/{image_card.filename.replace(" ", "_")}"
    await save_upload_file(image_card, image_card_path)


    solution_model = Solutions(
        image_banner=image_banner_relative_path,
        image_card=image_card_relative_path,
        name=name,
        description=description,
        extra_description=extra_description,
        sub_header=sub_header,
        header=header,
        image_banner_alt=image_banner_alt,
        image_card_alt=image_card_alt,
        page_description=page_description,
        page_title=page_title,
        page_keywords=page_keywords,
        hidden_seo_text=hidden_seo_text
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
                "extra_description": solution.extra_description,
                "image_card": f"{BASE_URL}/{solution.image_card}",
                "image_banner": f"{BASE_URL}/{solution.image_banner}",
                "sub_header": solution.sub_header,
                "header": solution.header,
                "image_banner_alt": solution.image_banner_alt,
                "image_card_alt": solution.image_card_alt,
                "page_description": solution.page_description,
                "page_title": solution.page_title,
                "page_keywords": solution.page_keywords,
                "hidden_seo_text": solution.hidden_seo_text,
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
            "extra_description": solution.extra_description,
            "image_card": f"{BASE_URL}/{solution.image_card}",
            "image_banner": f"{BASE_URL}/{solution.image_banner}",
            "sub_header": solution.sub_header,
            "header": solution.header,
            "image_banner_alt": solution.image_banner_alt,
            "image_card_alt": solution.image_card_alt,
            "page_description": solution.page_description,
            "page_title": solution.page_title,
            "page_keywords": solution.page_keywords,
            "hidden_seo_text": solution.hidden_seo_text,
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.put("/{solution_id}", status_code=status.HTTP_200_OK)
async def update_solution(solution_id: int, name: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    extra_description: Optional[str] = Form(None),
    image_banner: UploadFile = File(None),  image_card: UploadFile = File(None), image_banner_alt: Optional[str] = Form(None),
    image_card_alt: Optional[str] = Form(None),
    page_description: Optional[str] = Form(None),
    page_title: Optional[str] = Form(None),
    page_keywords: Optional[str] = Form(None), hidden_seo_text: Optional[str] = Form(None), sub_header: str = File(None), header: str = File(None), solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        existing_solution = await solution_repo.get_solution_by_id(solution_id)
        if not existing_solution:
            raise HTTPException(status_code=404, detail="Solution not found")

        updated_name = name if name else existing_solution.name
        updated_description = description if description else existing_solution.description
        updated_extra_description = extra_description if extra_description else existing_solution.extra_description
        updated_sub_header = sub_header if sub_header else existing_solution.sub_header
        updated_header = header if header else existing_solution.header
        updated_image_banner = existing_solution.image_banner
        updated_image_card = existing_solution.image_card
        updated_image_banner_alt = image_banner_alt if image_banner_alt else existing_solution.image_banner_alt
        updated_image_card_alt = image_card_alt if image_card_alt else existing_solution.image_card_alt
        updated_page_description = page_description if page_description else existing_solution.page_description
        updated_page_title = page_title if page_title else existing_solution.page_title
        updated_page_keywords = page_keywords if page_keywords else existing_solution.page_keywords
        updated_hidden_seo_text = hidden_seo_text if hidden_seo_text else existing_solution.hidden_seo_text


        if image_banner or image_card:
            dirname = os.path.dirname(__file__)  # Текущая директория
            save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
            os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет
            if image_banner:
                file_path = os.path.join(save_dir, image_banner.filename.replace(" ", "_"))
                updated_image_banner = f"files/{image_banner.filename.replace(" ", "_")}"
                await save_upload_file(image_banner, file_path)
            if image_card:
                file_path = os.path.join(save_dir, image_card.filename.replace(" ", "_"))
                updated_image_card = f"files/{image_card.filename.replace(" ", "_")}"
                await save_upload_file(image_card, file_path)

        updated_solution = await solution_repo.update_solution(solution_id, updated_name, updated_description, updated_extra_description,
                                                               updated_image_banner, updated_image_card, updated_sub_header, updated_header,
                                                               updated_image_banner_alt, updated_image_card_alt, updated_page_description, updated_page_title,
                                                               updated_page_keywords, hidden_seo_text)
        return {
            "id": updated_solution.id,
            "name": updated_solution.name,
            "description": updated_solution.description,
            "extra_description": updated_solution.extra_description,
            "image_card": f"{BASE_URL}/{updated_solution.image_card}",
            "image_banner": f"{BASE_URL}/{updated_solution.image_banner}",
            "sub_header": updated_solution.sub_header,
            "header": updated_solution.header,
            "image_banner_alt": updated_solution.image_banner_alt,
            "image_card_alt": updated_solution.image_card_alt,
            "page_description": updated_solution.page_description,
            "page_title": updated_solution.page_title,
            "page_keywords": updated_solution.page_keywords,
            "hidden_seo_text": updated_solution.hidden_seo_text,
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