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

from keras.models import load_model
model = load_model('model.h5')

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

@app.route("/")

@app.route("/doctor", methods=['GET', 'POST'])
def home():
    return render_template('doctor.html')


@app.route("/fileupload", methods=['GET', 'POST'])
def about():
    return render_template('fileupload.html')

@app.route("/results", methods=['GET'])
def about():
    return render_template('results.html')



if __name__ == '__main__':
    app.run(debug=True)



