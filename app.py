import base64
import json
from io import BytesIO
import numpy as np
import requests
from flask import Flask, request, jsonify, render_template, redirect
import tensorflow as tf
from tensorflow import keras
import functools
from scipy import ndimage, misc
from PIL import Image

from keras.models import load_model
model = load_model('model.h5')

app = Flask(__name__)
categories = ['Actinic Keratoses',
             'Basal Cell Carcinoma',
             'Benign Keratosis',
             'Dermatofibroma',
             'Melanoma',
             'Melanocytic Nevi',
             'Vascular skin lesion']
preds = np.zeros(7)

@app.route("/")
def index():
    return render_template('fileupload2.html')

@app.route("/doctor", methods=['GET', 'POST'])
def doctor():
    return render_template('doctor.html')

@app.route("/fileupload", methods=['GET', 'POST'])
def fileupload():
    if request.method == "POST":
        if request.files:
            image = np.asarray(Image.open(request.files["image"]).stream.resize((100,75)))
            image.shape = (1,) + image.shape
            preds = model.predict(image)[0]

            return redirect(request.url)


    return render_template("fileupload.html")

@app.route("/results", methods=['GET'])
def results():
    zipped = zip(categories, preds)
    sorted_pred = sorted(zipped, reverse = True)
    return render_template('results.html', pred = sorted_pred)

if __name__ == '__main__':
    app.run(debug=True)



