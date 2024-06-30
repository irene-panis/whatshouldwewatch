from flask import Flask, jsonify
from flask_cors import CORS
from index import find_overlap

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
  result = {'data': find_overlap()}
  return jsonify(result)