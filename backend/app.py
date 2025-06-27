from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Simulated in-memory database
subscriptions = []

# Route: Get all subscriptions
@app.route('/api/subscriptions', methods=['GET'])
def get_subscriptions():
    return jsonify(subscriptions)

# Route: Add new subscription
@app.route('/api/subscriptions', methods=['POST'])
def add_subscription():
    data = request.json
    new_subscription = {
        'id': str(uuid.uuid4()),
        'name': data.get('name'),
        'price': data.get('price'),
        'billing_date': data.get('billing_date')  # e.g. "2025-07-01"
    }
    subscriptions.append(new_subscription)
    return jsonify(new_subscription), 201

# Route: Delete a subscription
@app.route('/api/subscriptions/<sub_id>', methods=['DELETE'])
def delete_subscription(sub_id):
    global subscriptions
    subscriptions = [s for s in subscriptions if s['id'] != sub_id]
    return jsonify({'message': 'Deleted'}), 200

# Route: Update a subscription
@app.route('/api/subscriptions/<sub_id>', methods=['PUT'])
def update_subscription(sub_id):
    data = request.json
    for s in subscriptions:
        if s['id'] == sub_id:
            s['name'] = data.get('name', s['name'])
            s['price'] = data.get('price', s['price'])
            s['billing_date'] = data.get('billing_date', s['billing_date'])
            return jsonify(s), 200
    return jsonify({'error': 'Subscription not found'}), 404

# Root route (optional)
@app.route('/')
def home():
    return jsonify({'message': 'Subscription Tracker API is running.'})

if __name__ == '__main__':
    app.run(debug=True)
