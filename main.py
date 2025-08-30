from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from agent.agentic_workflow import GraphBuilder
from utils.save_to_document import save_document
from starlette.responses import JSONResponse
from auth.routes import router as auth_router
from auth.routes import get_current_user
import os
from dotenv import load_dotenv
from pydantic import BaseModel
from fastapi.responses import FileResponse
from queries.routes import router as queries_router
from queries.database import queries_collection
from datetime import datetime
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # set specific origins in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(queries_router, prefix="/queries", tags=["queries"])

class QueryRequest(BaseModel):
    question: str

@app.post("/query")
async def query_travel_agent(query:QueryRequest, current_user: str = Depends(get_current_user)):
    try:
        print(query)
        graph = GraphBuilder(model_provider="groq")
        react_app=graph()
        #react_app = graph.build_graph()

        
        # Assuming request is a pydantic object like: {"question": "your text"}
        messages={"messages": [query.question]}
        output = react_app.invoke(messages)

        # If result is dict with messages:
        if isinstance(output, dict) and "messages" in output:
            final_output = output["messages"][-1].content  # Last AI response
        else:
            final_output = str(output)

        saved_file = save_document(final_output)

        await queries_collection.insert_one({
            "user_email": current_user,
            "question": query.question,
            "answer": final_output,
            "filename": saved_file,
            "timestamp": datetime.utcnow()
        })
        
        return {
            "answer": final_output,
            "filename": saved_file  # return filename to frontend
        }
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    
@app.get("/download/{filename}")
async def download_file(filename: str):
    file_path = os.path.join("output", filename)  # your save_document saves here
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/pdf", filename=filename)
    return JSONResponse(status_code=404, content={"error": "File not found"})