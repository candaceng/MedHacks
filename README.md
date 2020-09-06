# Skin Lesion Classifier - MedHacks 2020

## Inspiration 
Due to the current global pandemic, it may be difficult and risky to go to the hospital to receive check ups and a lot of family doctor appointments are done virtually over call. Most skin lesions need to be monitored over time to properly identify which type it is and how to go about treatment. With our application, we’d like to bring a simple diagnosis at the cost of just a single click. This way, the user can have a general idea of what the condition could be and stay educated and informed.

## What it does
Classifies images of skin lesions into 1 of 7 categories and outputs probabilities for each of the 7 classes: 
- Actinic Keratoses
- Basal Cell Carcinoma
- Benign Keratosis
- Dermatofibroma
- Melanoma
- Melanocytic Nevi
- Vascular skin lesion

## How we built it
Using the [HAM10000 dataset](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T) we built a deep learning model using a simple CNN architecture on python. The model was stored in a .h5 file that could be read in through Flask and used to output predictions based on an image the user uploads. We also have an info page that displays examples of each class of skin lesion and includes helpful links to informative websites. There is also the feature that the user to email their family physician with the image and their results. 

## Challenges we ran into
The original front end was built in React and was very Javascript heavy. Our python program needed to take in the user's uploaded image in order to predict the final output and we could not figure out how to pass that information from React to a python script, then pass the predictions back to React. We decided to migrate our entire front end over to Flask. 

## What's next? 
In the future, we would like to redesign the UI and create a mobile version of the application to make the app more user friendly. Users will be able to directly take a photo from their mobile phones to upload.
