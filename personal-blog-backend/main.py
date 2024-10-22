from fastapi import FastAPI
from database.database import engine, Base
from controllers.user_controller import router as user_router
from controllers.blog_controller import router as blog_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(user_router, prefix="/api/v1", tags=["User"])
app.include_router(blog_router, prefix="/api/v1", tags=["Blog"])
