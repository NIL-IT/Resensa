from fastapi import HTTPException, Depends
from sqlalchemy import select, update
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from app.server.database.database import get_db
from app.server.database.models import Company

class CompanyRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_company(self):
        try:
            result = await self.db.execute(select(Company))
            company = result.scalar_one_or_none()
            if not company:
                raise NoResultFound("Company data not found")
            return company
        except NoResultFound as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching company data")

    async def update_company(
        self,
        about_main_screen: str,
        about_unique_screen: str,
        main_page_description: str,
        main_page_title: str,
        main_page_keywords: str,
        main_hidden_seo_text: str,
        about_page_description: str,
        about_page_title: str,
        about_page_keywords: str,
        about_hidden_seo_text: str,
        contacts_page_description: str,
        contacts_page_title: str,
        contacts_page_keywords: str,
        contacts_hidden_seo_text: str,
        equipment_page_description: str,
        equipment_page_title: str,
        equipment_page_keywords: str,
        equipment_hidden_seo_text: str,
        solution_page_description: str,
        solution_page_title: str,
        solution_page_keywords: str,
        solution_hidden_seo_text: str,
    ):
        stmt = (
            update(Company)
            .where(Company.id == 1)
            .values(
                about_main_screen=about_main_screen,
                about_unique_screen=about_unique_screen,
                main_page_description=main_page_description,
                main_page_title=main_page_title,
                main_page_keywords=main_page_keywords,
                main_hidden_seo_text=main_hidden_seo_text,
                about_page_description=about_page_description,
                about_page_title=about_page_title,
                about_page_keywords=about_page_keywords,
                about_hidden_seo_text=about_hidden_seo_text,
                contacts_page_description=contacts_page_description,
                contacts_page_title=contacts_page_title,
                contacts_page_keywords=contacts_page_keywords,
                contacts_hidden_seo_text=contacts_hidden_seo_text,
                equipment_page_description=equipment_page_description,
                equipment_page_title=equipment_page_title,
                equipment_page_keywords=equipment_page_keywords,
                equipment_hidden_seo_text=equipment_hidden_seo_text,
                solution_page_description=solution_page_description,
                solution_page_title=solution_page_title,
                solution_page_keywords=solution_page_keywords,
                solution_hidden_seo_text=solution_hidden_seo_text,
            )
            .execution_options(synchronize_session="fetch")
        )
        result = await self.db.execute(stmt)
        await self.db.commit()

        company = await self.get_company()
        return company

async def get_company_repository(db: AsyncSession = Depends(get_db)):
    return CompanyRepository(db)
