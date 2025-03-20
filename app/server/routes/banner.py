import os
from typing import Optional

from fastapi import APIRouter, Depends, Form, HTTPException
from starlette import status

from ..repositories.banners import BannerRepository, get_banner_repository

router = APIRouter()

@router.get('/')
async def get_banner(banner_repo: BannerRepository = Depends(get_banner_repository)):
    try:
        banner = await banner_repo.get_banner()
        return banner
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/", status_code=status.HTTP_200_OK)
async def update_banner(
    first_value_string: Optional[str] = Form(None),
    first_value: Optional[str] = Form(None),
    second_value_string: Optional[str] = Form(None),
    second_value: Optional[str] = Form(None),
    sub_header: Optional[str] = Form(None),
    banner_repo: BannerRepository = Depends(get_banner_repository),
):
    try:
        banner = await banner_repo.get_banner()
        if not banner:
            raise HTTPException(status_code=404, detail="Banner not found")

        updated_banner = await banner_repo.update_banner(
            first_value_string or banner.first_value_string,
            first_value or banner.first_value,
            second_value_string or banner.second_value_string,
            second_value or banner.second_value,
            sub_header or banner.sub_header,
        )
        return {
            "first_value_string": updated_banner.first_value_string,
            "first_value": updated_banner.first_value,
            "second_value_string": updated_banner.second_value_string,
            "second_value": updated_banner.second_value,
            "sub_header": updated_banner.sub_header,
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))