import random
import string
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_migrate import Migrate  # Import Flask-Migrate

load_dotenv()

app = Flask(__name__)
CORS(app)

# Fetching the database URI and SECRET_KEY from .env
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Models
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    grade = db.Column(db.String(50), nullable=False)
    admission_number = db.Column(db.String(10), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    fees_paid = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"<Student {self.first_name} {self.last_name}>"

# Routes
@app.route('/api/students', methods=['POST'])
def add_student():
    data = request.get_json()

    # Validate required fields
    if 'first_name' not in data or 'last_name' not in data or 'grade' not in data:
        return jsonify({"status": "error", "message": "Missing required fields"}), 400

    # Generate admission number
    admission_number = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

    # Generate a random password
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=10))

    # Create a new student instance
    new_student = Student(
        first_name=data['first_name'],
        last_name=data['last_name'],
        grade=data['grade'],
        admission_number=admission_number,
        password=password
    )

    # Add to the database
    db.session.add(new_student)
    db.session.commit()

    return jsonify({
        "status": "success",
        "message": "Student added successfully",
        "admission_number": admission_number,
        "password": password
    }), 201

if __name__ == '__main__':
    # Ensure that the app context is available for creating tables
    with app.app_context():
        db.create_all()  # This is optional; Flask-Migrate will handle the migrations
    
    app.run(debug=True)
