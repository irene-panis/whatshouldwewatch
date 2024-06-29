from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def my_function():
  result = {"message": "This is the result of my function."}
  return result

@app.route("/")
def hello_world():
  result = my_function()
  return jsonify(result)