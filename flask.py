import tensorflow as tf
tf.enable_eager_execution()
from tensorflow import keras
from keras.models import load_model
import functools
import json

model = keras.models.load_model('model.h5')

# gets the uploaded image, formats it, then passes it into the model to make a prediction
# returns a json of prediction results
def predict(model, image):
    # clean_image = ... standardize the image
    model.predict(clean_image)
    # dict = ... model predictions
    result = json.dumps(dict)
    return result