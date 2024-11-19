# config.py
class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable Flask-SQLAlchemy modification tracking
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://flask_user:twendeVasha_2025@localhost/school_system'
    SECRET_KEY = 'your_secret_key_here'  # For securing sessions and cookies

