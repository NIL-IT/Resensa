import logging
import os
from datetime import timedelta, datetime

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Form
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from openpyxl.pivot.table import Format
from passlib.context import CryptContext
from pydantic import BaseModel, validate_email
from pydantic_core import PydanticCustomError

from ..repositories.admins import get_admin_repository, AdminsRepository

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")

class User(BaseModel):
    email: str

class UserLogin(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    last_login: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")

@router.post("/token", response_model=Token)
async def login_for_access_token(username: str = Form(...), password: str = Form(...), admins_repo: AdminsRepository = Depends(get_admin_repository)):
    try:
        validate_email(username)
    except PydanticCustomError as e:
        raise HTTPException(status_code=400, detail="Invalid email address")

    logger.info(get_password_hash(password))
    user = await admins_repo.get_user(username)
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token_expires = timedelta(minutes=int(ACCESS_TOKEN_EXPIRE_MINUTES))
    access_token = create_access_token(
        data={"sub": username}, expires_delta=access_token_expires
    )
    return {"last_login": user.last_login, "access_token": access_token,  "token_type": "bearer"}
'''
@router.get("/protected-data")
async def read_protected_data(token: str = Depends(oauth2_scheme)):
    email = verify_token(token)
    return {"message": f"Welcome, {email}"}

@router.get('/generate')
async def create(password: str):
    hashed = pwd_context.hash(password)
    return hashed
'''
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=15)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Token missing email")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)