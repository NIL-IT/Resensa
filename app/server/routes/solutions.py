import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.solutions import SolutionsRepository, get_solutions_repository
from ..database.models import Solutions
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_solutions(name: str = Form(...),
    description: str = Form(...),
    solution_photo: UploadFile = File(...),  solution_repo: SolutionsRepository = Depends(get_solutions_repository)):

    dirname = os.path.dirname(__file__)
    directory = os.path.join(dirname, f"../../../files/{solution_photo.filename}")
    absolute_path = os.path.abspath(directory)
    await save_upload_file(solution_photo, absolute_path)
    solution_model = Solutions(
        solutions_image=absolute_path,
        name=name,
        description=description,
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
            image_data = read_image(solution.solutions_image)
            solutions_with_images.append({
                "id": solution.id,
                "name": solution.name,
                "description": solution.description,
                "image": image_data if image_data else None
            })

        return solutions_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/{solution_id}", status_code=status.HTTP_200_OK)
async def get_equipment_by_id(solution_id: int, solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        solution = await solution_repo.get_solution_by_id(solution_id)
        image_data = read_image(solution.solutions_image)
        return {
            "id": solution.id,
            "name": solution.name,
            "description": solution.description,
            "image": (image_data if image_data else None)
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.put("/{solution_id}", status_code=status.HTTP_200_OK)
async def update_solution(solution_id: int, name: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    solution_photo: Optional[UploadFile] = File(None), solution_repo: SolutionsRepository = Depends(get_solutions_repository)):
    try:
        existing_solution = await solution_repo.get_solution_by_id(solution_id)
        if not existing_solution:
            raise HTTPException(status_code=404, detail="Solution not found")

        updated_name = name if name else existing_solution.name
        updated_description = description if description else existing_solution.description

        if solution_photo:
            dirname = os.path.dirname(__file__)
            directory = os.path.join(dirname, f"../../../files/{solution_photo.filename}")
            updated_solution_photo = os.path.abspath(directory)
            await save_upload_file(solution_photo, updated_solution_photo)
        else:
            updated_solution_photo = existing_solution.solutions_image

        updated_solution = await solution_repo.update_solution(solution_id, updated_name, updated_description, updated_solution_photo)
        return updated_solution
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