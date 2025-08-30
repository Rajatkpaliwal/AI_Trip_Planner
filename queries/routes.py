from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from queries.database import queries_collection
from queries.models import QueryRecord
from auth.routes import get_current_user
from bson import ObjectId
from bson.errors import InvalidId

router = APIRouter()

# Get all queries of current user
@router.get("/my-queries")
async def get_user_queries(
    current_user: str = Depends(get_current_user),
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Queries per page"),
    sort_by: str = Query("timestamp", description="Field to sort by"),
    order: str = Query("desc", regex="^(asc|desc)$", description="Sort order"),
):
    skip = (page - 1) * page_size

    # Map order to MongoDB sort
    sort_order = -1 if order == "desc" else 1

    total_count = await queries_collection.count_documents({"user_email": current_user})

    records = await queries_collection.find(
        {"user_email": current_user}
    ).sort(sort_by, sort_order).skip(skip).limit(page_size).to_list(page_size)

    return {
        "total": total_count,
        "page": page,
        "page_size": page_size,
        "total_pages": (total_count + page_size - 1) // page_size,
        "sort_by": sort_by,
        "order": order,
        "queries": [QueryRecord(**r) for r in records],
    }


# Get a single query by ID
@router.delete("/{query_id}")
async def delete_query(query_id: str, current_user: str = Depends(get_current_user)):
    try:
        obj_id = ObjectId(query_id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid query ID")

    result = await queries_collection.delete_one({"_id": obj_id, "user_email": current_user})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Query not found or not authorized")

    return {
        "success": True,
        "message": "Query deleted successfully",
        "deleted_id": query_id
    }

@router.delete("/{query_id}")
async def delete_query(query_id: str, current_user: str = Depends(get_current_user)):
    try:
        obj_id = ObjectId(query_id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid query ID")

    result = await queries_collection.delete_one({"_id": obj_id, "user_email": current_user})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Query not found or not authorized")

    return {
        "success": True,
        "message": "Query deleted successfully",
        "deleted_id": query_id
    }