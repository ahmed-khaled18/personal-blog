from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from database.database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)