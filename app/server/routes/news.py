import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.news import NewsRepository, get_news_repository
from ..database.models import News
from ..utils.save_image import save_upload_file, read_image

router = APIRouter()
BASE_URL = "https://nilit1.ru"  # Замените на ваш реальный адрес


@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_news(title: str = Form(...),
    text: str = Form(...),
    news_photo: UploadFile = File(...),  news_repo: NewsRepository = Depends(get_news_repository)):
    dirname = os.path.dirname(__file__)  # Текущая директория
    save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
    os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет

    # Сохраняем файл
    file_path = os.path.join(save_dir, news_photo.filename)
    relative_path = f"files/{news_photo.filename}"
    await save_upload_file(news_photo, file_path)
    news_model = News(
        news_photo=relative_path,
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
            news_with_images.append({
                "id": news.id,
                "title": news.title,
                "text": news.text,
                "date": news.date,
                "image": f"{BASE_URL}/{news.news_photo}"
            })

        return news_with_images
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/news/{news_id}", status_code=status.HTTP_200_OK)
async def get_news_by_id(news_id: int, news_repo: NewsRepository = Depends(get_news_repository)):
    try:
        news = await news_repo.get_news_by_id(news_id)
        return {
            "id": news.id,
            "title": news.title,
            "text": news.text,
            "date": news.date,
            "image": f"{BASE_URL}/{news.news_photo}"
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.post("/{news_id}", status_code=status.HTTP_200_OK)
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
            dirname = os.path.dirname(__file__)  # Текущая директория
            save_dir = os.path.join(dirname, "../files")  # Папка `files` в проекте
            os.makedirs(save_dir, exist_ok=True)  # Создать папку, если её нет

            # Сохраняем файл
            file_path = os.path.join(save_dir, news_photo.filename)
            updated_news_photo = f"files/{news_photo.filename}"
            await save_upload_file(news_photo, file_path)
        else:
            updated_news_photo = existing_news.news_photo

        updated_news = await news_repo.update_news(news_id, title, text, updated_news_photo)
        return {
            "id": updated_news.id,
            "title": updated_news.title,
            "date": updated_news.date,
            "text": updated_news.text,
            "image": f"{BASE_URL}/{updated_news}",
        }
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