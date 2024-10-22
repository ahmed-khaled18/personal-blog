from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from models.user_model import User
from schemas.blog_schema import Blog, BlogCreate, BlogUpdate
from services.blog_service import get_blogs, create_blog, get_blog, update_blog, delete_blog
from database.database import get_db
from middleware.auth import get_current_user

router = APIRouter()

@router.post("/blogs/", response_model=Blog)
def create_blog_endpoint(blog: BlogCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return create_blog(db=db, blog=blog)

@router.get("/blogs/", response_model=List[Blog])
def read_blogs(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    blogs = get_blogs(db, skip=skip, limit=limit)
    return blogs

@router.get("/blogs/{blog_id}", response_model=Blog)
def read_blog(blog_id: int, db: Session = Depends(get_db)):
    db_blog = get_blog(db, blog_id=blog_id)
    if db_blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return db_blog

@router.put("/blogs/{blog_id}", response_model=Blog)
def update_blog_endpoint(blog_id: int, blog: BlogUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_blog = update_blog(db, blog_id=blog_id, blog=blog)
    if db_blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return db_blog

@router.delete("/blogs/{blog_id}", response_model=Blog)
def delete_blog_endpoint(blog_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_blog = delete_blog(db, blog_id=blog_id)
    if db_blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return db_blog