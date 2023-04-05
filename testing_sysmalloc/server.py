from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
users = {"1234":"user1","5678":"user2"}

@app.route("/members",methods = ['POST','GET'])
def members():
   if request.method ==  'POST':
    if request.is_json:
        content = request.get_json()
        return jsonify({users["1234"]:"user1"})
   elif request.method == 'GET':
        content = request.args.get("username")
        return jsonify({users["1234"]: content})
   return jsonify({"a": "45"})
if __name__ == "__main__":
    app.run(debug=True)
