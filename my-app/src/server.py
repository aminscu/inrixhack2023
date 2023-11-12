from flask import Flask, request;
from flask_cors import CORS, cross_origin;
from inrix_route import google_geocoder, call_inrix, main; 

app = Flask(__name__)
CORS(app)

@app.route("/main", methods=['POST'])
@cross_origin()
def main_flask():
    # /main?param1=something&param2=anotherthing
    #param1 = request.args.get('param1')

    # json
    body = request.json
    
    return main(body["value1"], body["value2"])

@app.route("/geo-guesser", methods=['POST'])
def geo_guesser_flask():
    body = request.json
    return google_geocoder(body["value1"], body["value2"])

@app.route("/call-inrix", methods=['POST'])
def call_inrix_flask():
    body = request.json
    return call_inrix(body[0], body[1], body[2], body[3])


