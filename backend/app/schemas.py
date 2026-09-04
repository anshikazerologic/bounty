from datetime import datetime

from pydantic import BaseModel, ConfigDict


class WaitlistCreate(BaseModel):
    name: str
    email: str
    contact: str
    city: str
    path: str
    status: str


class WaitlistUpdate(BaseModel):
    name: str | None = None
    email: str | None = None
    contact: str | None = None
    city: str | None = None
    path: str | None = None
    status: str | None = None


class WaitlistResponse(WaitlistCreate):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class HunterUserCreate(BaseModel):
    name: str
    email: str
    college_name: str
    personal_email: str
    mobile_number: str
    discipline: str
    graduating_year: str
    date_of_birth: str
    postal_zip_code: str
    city: str
    state: str
    question_one_answer: str | None = None
    question_two_answer: str | None = None
    username: str | None = None
    password: str | None = None
    guild: str | None = None


class HunterUserUpdate(BaseModel):
    name: str | None = None
    email: str | None = None
    college_name: str | None = None
    personal_email: str | None = None
    mobile_number: str | None = None
    discipline: str | None = None
    graduating_year: str | None = None
    date_of_birth: str | None = None
    postal_zip_code: str | None = None
    city: str | None = None
    state: str | None = None
    question_one_answer: str | None = None
    question_two_answer: str | None = None
    username: str | None = None
    password: str | None = None
    guild: str | None = None

class CompleteHunterProfile(BaseModel):
    username: str | None = None
    password: str | None = None
    guild: str | None = None


class HunterUserResponse(HunterUserCreate):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
