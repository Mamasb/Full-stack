from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Student model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    grade = db.Column(db.String(50), nullable=False)
    fees_paid = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"<Student {self.first_name} {self.last_name}>"

# Fee model
class Fee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    paid_on = db.Column(db.DateTime, nullable=True)

    student = db.relationship('Student', back_populates='fees')

Student.fees = db.relationship('Fee', back_populates='student')

