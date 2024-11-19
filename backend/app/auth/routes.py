from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Secretary(UserMixin, db.Model):
    __tablename__ = 'secretaries'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def verify_password(self, password):
        return check_password_hash(self.password, password)
