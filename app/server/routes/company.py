import os
from typing import Optional

from fastapi import APIRouter, Depends, Form, HTTPException
from starlette import status

from app.server.repositories.company import CompanyRepository, get_company_repository

router = APIRouter()

@router.get('/')
async def get_company(company_repo: CompanyRepository = Depends(get_company_repository)):
    try:
        company = await company_repo.get_company()
        return company
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/", status_code=status.HTTP_200_OK)
async def update_company(
    about_main_screen: Optional[str] = Form(None),
    about_unique_screen: Optional[str] = Form(None),
    main_page_description: Optional[str] = Form(None),
    main_page_title: Optional[str] = Form(None),
    main_page_keywords: Optional[str] = Form(None),
    main_hidden_seo_text: Optional[str] = Form(None),
    about_page_description: Optional[str] = Form(None),
    about_page_title: Optional[str] = Form(None),
    about_page_keywords: Optional[str] = Form(None),
    about_hidden_seo_text: Optional[str] = Form(None),
    contacts_page_description: Optional[str] = Form(None),
    contacts_page_title: Optional[str] = Form(None),
    contacts_page_keywords: Optional[str] = Form(None),
    contacts_hidden_seo_text: Optional[str] = Form(None),
    company_repo: CompanyRepository = Depends(get_company_repository),
    equipment_page_description: Optional[str] = Form(None),
    equipment_page_title:Optional[str] = Form(None),
    equipment_page_keywords:Optional[str] = Form(None),
    equipment_hidden_seo_text:Optional[str] = Form(None),
    solution_page_description: Optional[str] = Form(None),
    solution_page_title: Optional[str] = Form(None),
    solution_page_keywords:Optional[str] = Form(None),
    solution_hidden_seo_text:Optional[str] = Form(None),
):
    try:
        company = await company_repo.get_company()
        if not company:
            raise HTTPException(status_code=404, detail="Company data not found")

        updated_company = await company_repo.update_company(
            about_main_screen or company.about_main_screen,
            about_unique_screen or company.about_unique_screen,
            main_page_description or company.main_page_description,
            main_page_title or company.main_page_title,
            main_page_keywords or company.main_page_keywords,
            main_hidden_seo_text or company.main_hidden_seo_text,
            about_page_description or company.about_page_description,
            about_page_title or company.about_page_title,
            about_page_keywords or company.about_page_keywords,
            about_hidden_seo_text or company.about_hidden_seo_text,
            contacts_page_description or company.contacts_page_description,
            contacts_page_title or company.contacts_page_title,
            contacts_page_keywords or company.contacts_page_keywords,
            contacts_hidden_seo_text or company.contacts_hidden_seo_text,
            equipment_page_description or company.equipment_page_description,
            equipment_page_title or company.equipment_page_title,
            equipment_page_keywords or company.equipment_page_keywords,
            equipment_hidden_seo_text or company.equipment_hidden_seo_text,
            solution_page_description or company.solution_page_description,
            solution_page_title or company.solution_page_title,
            solution_page_keywords or company.solution_page_keywords,
            solution_hidden_seo_text or company.solution_hidden_seo_text,

        )

        return {
            "about_main_screen": updated_company.about_main_screen,
            "about_unique_screen": updated_company.about_unique_screen,
            "main_page_description": updated_company.main_page_description,
            "main_page_title": updated_company.main_page_title,
            "main_page_keywords": updated_company.main_page_keywords,
            "main_hidden_seo_text": updated_company.main_hidden_seo_text,
            "about_page_description": updated_company.about_page_description,
            "about_page_title": updated_company.about_page_title,
            "about_page_keywords": updated_company.about_page_keywords,
            "about_hidden_seo_text": updated_company.about_hidden_seo_text,
            "contacts_page_description": updated_company.contacts_page_description,
            "contacts_page_title": updated_company.contacts_page_title,
            "contacts_page_keywords": updated_company.contacts_page_keywords,
            "contacts_hidden_seo_text": updated_company.contacts_hidden_seo_text,
            "equipment_page_description": updated_company.equipment_page_description,
            "equipment_page_title": updated_company.equipment_page_title,
            "equipment_page_keywords": updated_company.equipment_page_keywords,
            "equipment_hidden_seo_text": updated_company.equipment_hidden_seo_text,
            "solution_page_description": updated_company.solution_page_description,
            "solution_page_title": updated_company.solution_page_title,
            "solution_page_keywords": updated_company.solution_page_keywords,
            "solution_hidden_seo_text": updated_company.solution_hidden_seo_text,
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
