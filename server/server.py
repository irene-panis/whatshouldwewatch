from flask import Flask, jsonify, request
from flask_cors import CORS
from index import find_overlap, delete_cache

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def process_data():
  usernames = request.json['usernames']
  result = find_overlap(usernames)
  return jsonify(result)

@app.route("/delete/<username>", methods=['DELETE'])
def delete(username):
  delete_cache(username)
  return jsonify({"message": f"Cache for user {username} cleared"}), 200