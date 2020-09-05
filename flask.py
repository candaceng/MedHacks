import base64
import json
from io import BytesIO
import numpy as np
import requests
from flask import Flask, request, jsonify, render_template
import tensorflow as tf
tf.enable_eager_execution()
from tensorflow import keras
import functools
from scipy import ndimage, misc
from PIL import Image

app = Flask(__name__)
model = keras.models.load_model('model.h5')
# categories = ['Actinic Keratoses',
#              'Basal Cell Carcinoma',
#              'Benign Keratosis',
#              'Dermatofibroma',
#              'Melanoma',
#              'Melanocytic Nevi',
#              'Vascular skin lesion']
# dict = {}

@app.route('/predict/', methods=['POST'])
def predict(model, x):
    im = np.asarray(Image.open(x).resize((100,75))

    # returns a list of 7 numbers
    predictions = model.predict(im)[0]

    # match numbers to categories
    # dictionary = dict(zip(categories, predictions))
    # return flask.jsonify(dictionary)

    return predictions



