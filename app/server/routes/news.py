import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from starlette import status

from ..repositories.news import NewsRepository, get_news_repository
from ..database.models import News
from ..utils.save_image import save_upload_file

router = APIRouter()
BASE_URL = "https://new.recensa.ru"

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_news(
    title: str = Form(...),
    text: str = Form(...),
    news_photo: UploadFile = File(...),
    page_description: str = Form(...),
    page_title: str = Form(...),
    page_keywords: str = Form(...),
    hidden_seo_text: str = Form(...),
    news_repo: NewsRepository = Depends(get_news_repository)
):
    dirname = os.path.dirname(__file__)
    save_dir = os.path.join(dirname, "../files")
    os.makedirs(save_dir, exist_ok=True)

    file_path = os.path.join(save_dir, news_photo.filename.replace(" ", "_"))
    relative_path = f"files/{news_photo.filename.replace(' ', '_')}"
    await save_upload_file(news_photo, file_path)

    news_model = News(
        news_photo=relative_path,
        title=title,
        text=text,
        date=datetime.now().strftime("%d/%m/%Y"),
        page_description=page_description,
        page_title=page_title,
        page_keywords=page_keywords,
        hidden_seo_text=hidden_seo_text
    )
    try:
        news = await news_repo.create_news(news_model)
        return news
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.post("/{news_id}", status_code=status.HTTP_200_OK)
async def update_news(
    news_id: int,
    title: Optional[str] = Form(None),
    text: Optional[str] = Form(None),
    news_photo: Optional[UploadFile] = File(None),
    date: Optional[str] = Form(None),
    page_description: Optional[str] = Form(None),
    page_title: Optional[str] = Form(None),
    page_keywords: Optional[str] = Form(None),
    hidden_seo_text: Optional[str] = Form(None),
    news_repo: NewsRepository = Depends(get_news_repository)
):
    try:
        existing_news = await news_repo.get_news_by_id(news_id)
        if not existing_news:
            raise HTTPException(status_code=404, detail="News not found")

        updated_news_photo = existing_news.news_photo
        if news_photo is not None:
            dirname = os.path.dirname(__file__)
            save_dir = os.path.join(dirname, "../files")
            os.makedirs(save_dir, exist_ok=True)
            file_path = os.path.join(save_dir, news_photo.filename.replace(" ", "_"))
            updated_news_photo = f"files/{news_photo.filename.replace(" ", "_")}"
            await save_upload_file(news_photo, file_path)

        updated_news = await news_repo.update_news(
            news_id,
            title or existing_news.title,
            text or existing_news.text,
            updated_news_photo,
            date or existing_news.date,
            page_description or existing_news.page_description,
            page_title or existing_news.page_title,
            page_keywords or existing_news.page_keywords,
            hidden_seo_text or existing_news.hidden_seo_text
        )

        return {
            "id": updated_news.id,
            "title": updated_news.title,
            "date": updated_news.date,
            "text": updated_news.text,
            "image": f"{BASE_URL}/{updated_news.news_photo}",
            "page_description": updated_news.page_description,
            "page_title": updated_news.page_title,
            "page_keywords": updated_news.page_keywords,
            "hidden_seo_text": updated_news.hidden_seo_text,
        }
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
                "image": f"{BASE_URL}/{news.news_photo}",
                "page_description": news.page_description,
                "page_title": news.page_title,
                "page_keywords": news.page_keywords,
                "hidden_seo_text": news.hidden_seo_text,
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
            "image": f"{BASE_URL}/{news.news_photo}",
            "page_description": news.page_description,
            "page_title": news.page_title,
            "page_keywords": news.page_keywords,
            "hidden_seo_text": news.hidden_seo_text,
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