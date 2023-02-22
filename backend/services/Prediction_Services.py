import numpy as np
import io
import skimage
from PIL import Image


def read_bite_file(img):
    img = Image.open(io.BytesIO(img))
    img = np.asarray(img)
    img = skimage.transform.resize(img, (32, 32, 3), anti_aliasing=True)
    img = np.expand_dims(img, axis=0)
    return img


def image_classify(img, model):
    img = read_bite_file(img)
    features = model.predict(img)
    top = []
    top_num = 3
    classes = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']

    for request in range(1):  # num of foto or objects on foto
        classes_request = classes
        features_request = features[0]
        for i in range(top_num):
            pred = np.argmax(features_request)
            top.append({'key':classes_request[pred], 
                       'value':str(features_request[np.argmax(features_request)]*100)[0:5]})
            if top_num > 1:
                features_request = np.delete(features_request, np.argmax(features_request))
                classes_request.remove(classes_request[pred])
    return top 