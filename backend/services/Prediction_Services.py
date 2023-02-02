import numpy as np
import skimage
# import os
# import re


def si_rescale(img):
        for_rescale = list(img.shape)
        for_rescale.sort()
        scale_rating = 32 / for_rescale[1]
        img = skimage.transform.rescale(skimage.transform.resize(img, (for_rescale[1], for_rescale[1])), scale_rating, multichannel=True)
        img = img = np.expand_dims(img, axis=0)
        return img


def image_classify(filename, model): #, processor
    img = skimage.io.imread(filename)
    img = si_rescale(img)
    
    features = model.predict(img)
    top = []
    top_num = 10
    classes = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']

    for request in range(1):  # num of foto or objects on foto
        classes_request = classes
        features_request = features[0]
        rang = 1
        for i in range(top_num):
            pred = np.argmax(features_request)
            top.append([rang, classes_request[pred], str(round(features_request[np.argmax(features_request)], 4)*100)])
            features_request = np.delete(features_request, np.argmax(features_request))
            classes_request.remove(classes_request[pred])
            rang +=1
    return top


# def get_photo_path():
#     dir_path = r'C:\Users\misha\Desktop\python\team_1\media\images'
#     list_files = os.listdir(dir_path)
#     list_files
#     files  = ''
#     for filename in list_files:
#         files = (re.sub(r'\\', r'/', dir_path + "/" + filename))
#     return files