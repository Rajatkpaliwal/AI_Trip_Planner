from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserRegister(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class QueryRecord(BaseModel):
    user_email: str
    question: str
    answer: str
    timestamp: datetime