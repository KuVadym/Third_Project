from keras.models import load_model
def model_loader(model_path):
    model = load_model(model_path)
    return model

