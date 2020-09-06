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
    # match result numbers to category names
    zipped = zip(categories, preds)
    # rank results by highest probability
    sorted_zip = sorted(zipped, reverse = True)
    # turn ranks into a multi-line string
    pred_percent = ""
    for pair in sorted_zip:
        print(pair)
        pred_percent += pair[0] + ': ' + str(pair[1]) + '\n'
    return render_template('results.html', pred_percent = pred_percent)

if __name__ == '__main__':
    app.run(debug=True)



