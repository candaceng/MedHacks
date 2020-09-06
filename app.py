import base64
import json
from io import BytesIO
import numpy as np
import requests
from flask import Flask, request, jsonify, render_template, redirect, flash, url_for
import tensorflow as tf
from tensorflow import keras
import functools
from scipy import ndimage, misc
from PIL import Image

from keras.models import load_model
model = load_model('model.h5')

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'medhacks/img'
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
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            image = np.asarray(Image.open(request.files["image"]).stream.resize((100,75)))
            image.shape = (1,) + image.shape
            preds = model.predict(image)[0]
            print("DEBUG: IMAGE RECEIVED")
            print(preds)
            return redirect(url_for('results'))
    return render_template("fileupload.html")

@app.route("/results", methods=['GET'])
def results():
    zipped = zip(categories, preds)
    sorted_pred = sorted(zipped, reverse = True)
    pred_str = [(str(p[0]) + ': ' + str(p[1])) for p in sorted_pred]
    return render_template('results.html', pred = pred_str)

if __name__ == '__main__':
    app.run(debug=True)



