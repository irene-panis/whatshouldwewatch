from flask import Flask, jsonify, request
from flask_cors import CORS
from index import find_overlap

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def process_data():
  usernames = request.json['usernames']
  result = find_overlap(usernames)
  return jsonify(result)