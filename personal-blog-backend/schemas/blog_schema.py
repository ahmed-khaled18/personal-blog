from pydantic import BaseModel
from datetime import datetime

class BlogBase(BaseModel):
    title: str
    content: str

class BlogCreate(BlogBase):
    pass

class BlogUpdate(BlogBase):
    pass

class Blog_Schema(BlogBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True