from keras.models import load_model
def model_loader(model_path):
    model = load_model(model_path[0])
    model.load_weights(model_path[1])
    return model