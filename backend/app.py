from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

# from flask_cors import CORS
# import uuid
load_dotenv()
db = SQLAlchemy()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
db.init_app(app)

#Database Tables
class UserModel(db.Model): # Holds the information for the users
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(100), nullable=True)
    last_name = db.Column(db.String(100), nullable=True)
    timezone = db.Column(db.String(50), nullable=True, default='UTC')
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
class SubscriptionPlanModel(db.Model): # Holds the subscription info (name, description, price, billing cycle)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Float, nullable=False)
    billing_cycle = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
class UserSubscriptionModel(db.Model): # Holds the detailed information for the subscription of the users (start - end, status (paid, unpaid), plan)
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_model.id'), nullable=False)
    plan_id = db.Column(db.Integer, db.ForeignKey('subscription_plan_model.id'), nullable=False)
    start_date = db.Column(db.DateTime, default=db.func.current_timestamp(), nullable=False)
    end_date = db.Column(db.DateTime, nullable=True)
    status = db.Column(db.String(50), nullable=False, default='active')
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    user = db.relationship('UserModel', backref='subscriptions')
    plan = db.relationship('SubscriptionPlanModel', backref='subscriptions')
    
class PaymentModel(db.Model): # Holds the payment information (keeps track of the payments made by the user)
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_model.id'), nullable=False)
    subscription_id = db.Column(db.Integer, db.ForeignKey('user_subscription_model.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    payment_date = db.Column(db.DateTime, nullable=False)  # Tracks when payment was made
    user = db.relationship('UserModel', backref='payments')
    subscription = db.relationship('UserSubscriptionModel', backref='payments')
    
    
with app.app_context():
    db.create_all()
    
# API Section 
# Root endpoint
@app.route('/')
def home():
    return jsonify({'message': 'Subscription Tracker API is running.'})

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    required_fields = ['username', 'email', 'password_hash']
    if not all(key in data for key in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
    
    if db.session.query(UserModel).filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 409
    if db.session.query(UserModel).filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 409
    
    user = UserModel(
        username=data['username'],
        email=data['email'],
        password_hash=data['password_hash'],
        first_name=data.get('first_name'),
        last_name=data.get('last_name'),
        timezone=data.get('timezone', 'UTC')
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'timezone': user.timezone
    }), 201
    
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = db.session.get(UserModel, user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'timezone': user.timezone,
        'is_active': user.is_active,
        'created_at': user.created_at.isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True)
