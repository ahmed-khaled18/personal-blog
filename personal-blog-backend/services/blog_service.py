from sqlalchemy.orm import Session
from schemas.blog_schema import BlogCreate, BlogUpdate
from repositories.blog_repository import (
    get_blogs_from_db, create_blog_in_db, get_blog_by_id, update_blog_in_db, delete_blog_in_db
)

def get_blogs(db: Session, skip: int = 0, limit: int = 10):
    return get_blogs_from_db(db, skip=skip, limit=limit)

def get_blog(db: Session, blog_id: int):
    return get_blog_by_id(db, blog_id)

def create_blog(db: Session, blog: BlogCreate):
    return create_blog_in_db(db, blog)

def update_blog(db: Session, blog_id: int, blog: BlogUpdate):
    return update_blog_in_db(db, blog_id, blog)

def delete_blog(db: Session, blog_id: int):
    return delete_blog_in_db(db, blog_id)