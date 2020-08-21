import joblib
import json
import sys
import os

# get the JSON values from the node server
features_dict = sys.argv[1]

# transform JSON to Dictionary
features = json.loads(features_dict) 

# get exact path to the Machine Leearning Model
scriptpath = os.path.realpath("pythonCode/Diabetes/GradientBoostingClassifier.joblib")

# Loads the model
classifier = joblib.load(scriptpath)

# grab the dictionary values
values_features = list(features.values()) 

# reshape to a matrix 1x3
values_features = [values_features] 

# predict the probability
prediction_value = classifier.predict_proba(values_features)

# decimal to percentage
prediction_value = prediction_value*100 

# round the percentage value
prediction_value = prediction_value.round(2)

#put the predicion value into a dictionary
prediction = {
    "negative": prediction_value[0, 0],
    "positive": prediction_value[0, 1]
}

# transform the dictionary in json
prediction = json.dumps(prediction) 

# return the value to the node server
print(prediction) 