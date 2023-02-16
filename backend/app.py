import uvicorn
from fastapi import FastAPI, File ,Response
from fastapi import Header, HTTPException
from services.Prediction_Services import image_classify
from services.ModelServices import model_loader
from services.errmsg import errmsg
import pickle
import json

model_path_checkpoint = "utils\model_from_Susana_v4.h5"

MODEL = model_loader(model_path_checkpoint)


app = FastAPI()

@app.get("/")
async def index():
    return {"result":"Do you see it?"}


@app.post("/")
async def index(file: bytes = File()):
    if not MODEL:
        status_code=500
        raise HTTPException(status_code, detail=errmsg.get(str(status_code)))
    model = MODEL
    # file = await file.read()
    pred = image_classify(file, model)
                    
    return Response(status_code=200,content=json.dumps(pred))

# uvicorn app:app --reload

if __name__ == "__main__":  
    config = uvicorn.Config("app:app", 
                            port=8000, 
                            log_level="info", 
                            reload=False,
                            host="0.0.0.0")
    server = uvicorn.Server(config)
    server.run()