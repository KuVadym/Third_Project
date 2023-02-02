import uvicorn
from fastapi import FastAPI
from services.Prediction_Services import image_classify
from services.ModelServices import model_loader
    
MODEL = model_loader([r'C:\Users\kuzik\Desktop\project3\models\model_from_Susana_v4.h5', 
                     r'C:\Users\kuzik\Desktop\project3\models\weights_from_Susana_v4.h5'])

app = FastAPI()

@app.get("/")
async def index():
    return {"result":"Do you see it?"}


@app.post("/")
async def index(img_path):
    model = MODEL
    pred = image_classify(img_path, model)
    
    return pred

# uvicorn app:app --reload

if __name__ == "__main__":
    config = uvicorn.Config("app:app", 
                            port=8000, 
                            log_level="info", 
                            reload=False,
                            host="0.0.0.0")
    server = uvicorn.Server(config)
    server.run()