from pydantic import BaseModel, EmailStr

class FormData(BaseModel):
    name: str
    email: EmailStr
    message: str