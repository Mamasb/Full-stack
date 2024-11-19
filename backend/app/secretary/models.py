from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
import random
import string

db = SQLAlchemy()

class Grade(db.Model):
    __tablename__ = 'grades'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)  # E.g., Grade 1, Grade 2

class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    admission_number = db.Column(db.String(20), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    grade_id = db.Column(db.Integer, db.ForeignKey('grades.id'), nullable=False)
    parent_email = db.Column(db.String(120), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    @staticmethod
    def generate_admission_number():
        return ''.join(random.choices(string.digits, k=8))

    @staticmethod
    def generate_password():
        return ''.join(random.choices(string.ascii_letters + string.digits, k=10))
