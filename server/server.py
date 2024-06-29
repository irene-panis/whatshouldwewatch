from flask import Flask, jsonify
app = Flask(__name__)

def my_function():
  result = {"message": "This is the result of my function."}
  return result

@app.route("/")
def hello_world():
  result = my_function()
  return jsonify(result)