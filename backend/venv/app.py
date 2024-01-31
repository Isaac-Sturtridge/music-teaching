from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/test')
def test_connection():
    return jsonify({'message': 'Connjected'})

if __name__ == '__main__':
    app.run()