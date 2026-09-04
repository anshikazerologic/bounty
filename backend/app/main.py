import os

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Engine, text
from sqlalchemy.inspection import inspect
from sqlalchemy.orm import Session

from . import models, schemas
from .database import Base, engine, get_db

app = FastAPI(title="Waitlist API")


def _get_cors_origins() -> list[str]:
    """Read allowed CORS origins from the CORS_ORIGINS env var.

    Comma-separated. Falls back to the local Vite dev servers so the app
    works out of the box in development.
    """
    raw = os.getenv("CORS_ORIGINS")
    if not raw:
        return [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
        ]
    return [origin.strip() for origin in raw.split(",") if origin.strip()]


# Allow browser origins (Vite dev server locally; Vercel URL in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=_get_cors_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all tables
Base.metadata.create_all(bind=engine)


def _ensure_hunter_columns(engine: Engine) -> None:
    """Add missing username/password/guild columns to an existing hunter_user table.

    create_all() doesn't alter existing tables, so this covers databases that were created
    before those columns existed.
    """
    inspector = inspect(engine)
    if "hunter_user" not in inspector.get_table_names():
        return
    existing_columns = {column["name"] for column in inspector.get_columns("hunter_user")}
    missing_columns = {
        "username": "VARCHAR(150)",
        "password": "VARCHAR(255)",
        "guild": "VARCHAR(100)",
    }
    with engine.begin() as connection:
        for column_name, column_type in missing_columns.items():
            if column_name not in existing_columns:
                connection.execute(
                    text(f"ALTER TABLE hunter_user ADD COLUMN {column_name} {column_type}")
                )


_ensure_hunter_columns(engine)


@app.get("/")
def root():
    return {
        "message": "Backend connected successfully 🚀"
    }


@app.post(
    "/api/waitlist",
    response_model=schemas.WaitlistResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_waitlist_entry(
    payload: schemas.WaitlistCreate,
    db: Session = Depends(get_db),
):
    existing = db.query(models.Waitlist).filter(
        models.Waitlist.email == payload.email
    ).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A waitlist entry with this email already exists.",
        )

    entry = models.Waitlist(**payload.model_dump())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


@app.get("/api/waitlist", response_model=list[schemas.WaitlistResponse])
def list_waitlist_entries(db: Session = Depends(get_db)):
    return db.query(models.Waitlist).order_by(models.Waitlist.created_at.desc()).all()


@app.get(
    "/api/waitlist/{entry_id}",
    response_model=schemas.WaitlistResponse,
)
def get_waitlist_entry(entry_id: int, db: Session = Depends(get_db)):
    entry = db.get(models.Waitlist, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Waitlist entry not found.",
        )
    return entry


@app.put(
    "/api/waitlist/{entry_id}",
    response_model=schemas.WaitlistResponse,
)
def update_waitlist_entry(
    entry_id: int,
    payload: schemas.WaitlistUpdate,
    db: Session = Depends(get_db),
):
    entry = db.get(models.Waitlist, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Waitlist entry not found.",
        )

    update_data = payload.model_dump(exclude_unset=True)
    if "email" in update_data:
        existing = db.query(models.Waitlist).filter(
            models.Waitlist.email == update_data["email"],
            models.Waitlist.id != entry_id,
        ).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="A waitlist entry with this email already exists.",
            )

    for field, value in update_data.items():
        setattr(entry, field, value)

    db.commit()
    db.refresh(entry)
    return entry


@app.delete(
    "/api/waitlist/{entry_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_waitlist_entry(entry_id: int, db: Session = Depends(get_db)):
    entry = db.get(models.Waitlist, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Waitlist entry not found.",
        )

    db.delete(entry)
    db.commit()
    return None


@app.post(
    "/api/hunter/userdetails",
    response_model=schemas.HunterUserResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_hunter_user(
    payload: schemas.HunterUserCreate,
    db: Session = Depends(get_db),
):
    existing = db.query(models.HunterUser).filter(
        models.HunterUser.email == payload.email
    ).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A hunter user with this email already exists.",
        )

    entry = models.HunterUser(**payload.model_dump())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


@app.get("/api/hunter/userdetails", response_model=list[schemas.HunterUserResponse])
def list_hunter_users(db: Session = Depends(get_db)):
    return db.query(models.HunterUser).order_by(models.HunterUser.created_at.desc()).all()


@app.get(
    "/api/hunter/userdetails/{entry_id}",
    response_model=schemas.HunterUserResponse,
)
def get_hunter_user(entry_id: int, db: Session = Depends(get_db)):
    entry = db.get(models.HunterUser, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Hunter user not found.",
        )
    return entry


@app.put(
    "/api/hunter/userdetails/{entry_id}",
    response_model=schemas.HunterUserResponse,
)
def update_hunter_user(
    entry_id: int,
    payload: schemas.HunterUserUpdate,
    db: Session = Depends(get_db),
):
    entry = db.get(models.HunterUser, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Hunter user not found.",
        )

    update_data = payload.model_dump(exclude_unset=True)
    if "email" in update_data:
        existing = db.query(models.HunterUser).filter(
            models.HunterUser.email == update_data["email"],
            models.HunterUser.id != entry_id,
        ).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="A hunter user with this email already exists.",
            )

    for field, value in update_data.items():
        setattr(entry, field, value)

    db.commit()
    db.refresh(entry)
    return entry


@app.delete(
    "/api/hunter/userdetails/{entry_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_hunter_user(entry_id: int, db: Session = Depends(get_db)):
    entry = db.get(models.HunterUser, entry_id)
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Hunter user not found.",
        )

    db.delete(entry)
    db.commit()
    return None


@app.put(
    "/api/hunters/complete-profile/{email}",
    response_model=schemas.HunterUserResponse,
)
def complete_hunter_profile(
    email: str,
    payload: schemas.CompleteHunterProfile,
    db: Session = Depends(get_db),
):
    user = db.query(models.HunterUser).filter(
        models.HunterUser.email == email
    ).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Hunter user not found.",
        )
    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)
    db.commit()
    db.refresh(user)
    return user
