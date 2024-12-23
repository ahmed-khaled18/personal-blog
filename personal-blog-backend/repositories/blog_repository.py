from sqlalchemy.orm import Session
from models.blog_model import Blog_Model
from schemas.blog_schema import BlogCreate, BlogUpdate
from datetime import datetime, timezone

def get_blogs_from_db(db: Session, page: int = 1, size: int = 10):
    skip = (page - 1) * size
    limit = size
    return db.query(Blog_Model).offset(skip).limit(limit).all()

def get_blog_by_id(db: Session, blog_id: int):
    return db.query(Blog_Model).filter(Blog_Model.id == blog_id).first()

def create_blog_in_db(db: Session, blog: BlogCreate):
    db_blog = Blog_Model(
        title=blog.title,
        content=blog.content,
        created_at=datetime.now(timezone.utc),
        updated_at=datetime.now(timezone.utc)
    )
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog

def update_blog_in_db(db: Session, blog_id: int, blog: BlogUpdate):
    db_blog = get_blog_by_id(db, blog_id)
    if db_blog:
        db_blog.title = blog.title
        db_blog.content = blog.content
        db_blog.updated_at = datetime.now(timezone.utc)
        db.commit()
        db.refresh(db_blog)
    return db_blog

def delete_blog_in_db(db: Session, blog_id: int):
    db_blog = get_blog_by_id(db, blog_id)
    if db_blog:
        db.delete(db_blog)
        db.commit()
    return db_blog