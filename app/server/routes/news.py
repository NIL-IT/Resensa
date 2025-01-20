import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.news import NewsRepository, get_news_repository
from ..database.models import News
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_news(title: str = Form(...),
    text: str = Form(...),
    news_photo: UploadFile = File(...),  news_repo: NewsRepository = Depends(get_news_repository)):

    dirname = os.path.dirname(__file__)
    directory = os.path.join(dirname, f"../../../files/{news_photo.filename}")
    absolute_path = os.path.abspath(directory)
    await save_upload_file(news_photo, absolute_path)
    news_model = News(
        news_photo=absolute_path,
        title=title,
        text=text,
        date=datetime.now().strftime("%d-%m-%Y"),
    )
    try:
        news = await news_repo.create_news(news_model)
        return news
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_news(news_repo: NewsRepository = Depends(get_news_repository)):
    try:
        news_list = await news_repo.get_all_news()
        news_with_images = []

        for news in news_list:
            image_data = read_image(news.news_photo)
            news_with_images.append({
                "id": news.id,
                "title": news.title,
                "text": news.text,
                "date": news.date,
                "image": image_data if image_data else None
            })

        return news_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/news/{news_id}", status_code=status.HTTP_200_OK)
async def get_news_by_id(news_id: int, news_repo: NewsRepository = Depends(get_news_repository)):
    try:
        news = await news_repo.get_news_by_id(news_id)
        image_data = read_image(news.news_photo)
        return {
            "id": news.id,
            "title": news.title,
            "text": news.text,
            "date": news.date,
             "image": (image_data if image_data else None)
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.put("/{news_id}", status_code=status.HTTP_200_OK)
async def update_news(news_id: int, title: Optional[str] = Form(None),
    text: Optional[str] = Form(None),
    news_photo: Optional[UploadFile] = File(None), news_repo: NewsRepository = Depends(get_news_repository)):
    try:
        existing_news = await news_repo.get_news_by_id(news_id)
        if not existing_news:
            raise HTTPException(status_code=404, detail="News not found")

        updated_title = title if title else existing_news.title
        updated_text = text if text else existing_news.text

        if news_photo is not None:
            dirname = os.path.dirname(__file__)
            directory = os.path.join(dirname, f"../../../files/{news_photo.filename}")
            updated_equipment_photo = os.path.abspath(directory)
            await save_upload_file(news_photo, updated_equipment_photo)
        else:
            updated_equipment_photo = existing_news.news_photo

        updated_equipment = await news_repo.update_news(news_id, title, text, updated_equipment_photo)
        return updated_equipment
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.delete("/{news_id}")
async def delete_news(news_id: int, news_repo: NewsRepository = Depends(get_news_repository)):
    try:
        return await news_repo.delete_news(news_id)
    except HTTPException as e:
        raise e  # Re-raise the HTTPException for FastAPI to handle
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error deleting news")