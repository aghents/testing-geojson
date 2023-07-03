from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

import json

@app.route('/get-map', methods=['GET'])
def get_map():
    # Read locations.json
    with open('locations.json') as locations_file:
        locations_data = json.load(locations_file)

    # Read points.json
    with open('points.json') as points_file:
        points_data = json.load(points_file)

    # Create a dictionary with locations and points data
    data = {
        'locations': locations_data,
        'points': points_data
    }

    # Return the data as JSON response
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
