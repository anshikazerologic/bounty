from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set")

# Force the psycopg (v3) driver. The plain "postgresql://" scheme makes
# SQLAlchemy default to the psycopg2 driver, which is NOT installed (and
# would need pg_config to build). Normalize to "postgresql+psycopg://"
# so the same DATABASE_URL works locally and on Render/Neon regardless of
# which format was pasted.
if DATABASE_URL.startswith("postgresql://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg://", 1)

engine = create_engine(
    DATABASE_URL,
    # Only log SQL when explicitly enabled (set SQL_ECHO=true in dev).
    echo=os.getenv("SQL_ECHO", "false").lower() == "true",
)

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)
class Base(DeclarativeBase):
    pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()