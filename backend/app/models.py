from datetime import datetime

from sqlalchemy import DateTime, String, func
from sqlalchemy.orm import Mapped, mapped_column

from .database import Base


class Waitlist(Base):
    __tablename__ = "waitlist"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(150), unique=True, index=True)
    contact: Mapped[str] = mapped_column(String(20))
    city: Mapped[str] = mapped_column(String(100))
    path: Mapped[str] = mapped_column(String(50))
    status: Mapped[str] = mapped_column(String(100))

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        default=datetime.utcnow,
    )


class HunterUser(Base):
    __tablename__ = "hunter_user"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    name: Mapped[str] = mapped_column(String(150))
    email: Mapped[str] = mapped_column(String(150), unique=True, index=True)
    college_name: Mapped[str] = mapped_column(String(150))
    personal_email: Mapped[str] = mapped_column(String(150))
    mobile_number: Mapped[str] = mapped_column(String(20))
    discipline: Mapped[str] = mapped_column(String(100))
    graduating_year: Mapped[str] = mapped_column(String(10))
    date_of_birth: Mapped[str] = mapped_column(String(20))
    postal_zip_code: Mapped[str] = mapped_column(String(20))
    city: Mapped[str] = mapped_column(String(100))
    state: Mapped[str] = mapped_column(String(100))
    question_one_answer: Mapped[str | None] = mapped_column(
        String(1000), nullable=True
    )
    question_two_answer: Mapped[str | None] = mapped_column(
        String(1000), nullable=True
    )
    username: Mapped[str | None] = mapped_column(String(150), nullable=True)
    password: Mapped[str | None] = mapped_column(String(255), nullable=True)
    guild: Mapped[str | None] = mapped_column(String(100), nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        default=datetime.utcnow,
    )
