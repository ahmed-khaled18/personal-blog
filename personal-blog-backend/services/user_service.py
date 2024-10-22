from fastapi import HTTPException
from sqlalchemy.orm import Session
from models.user_model import User
from schemas.user_schema import UserCreate
from repositories.user_repository import get_user_by_username, create_user_in_db

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def create_user(db: Session, user: UserCreate):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return create_user_in_db(db, user)