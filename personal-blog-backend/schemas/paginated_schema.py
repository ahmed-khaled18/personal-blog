from typing import Generic, List

from annotated_types import T
from pydantic import BaseModel


class PaginatedResponse(BaseModel, Generic[T]):
    data: List[T]
    total: int
    page: int
    size: int