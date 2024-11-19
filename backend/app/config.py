import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

class Config:
    # Secret key for session management and other cryptographic operations
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")

    # MySQL database URI configuration for SQLAlchemy
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "mysql+pymysql://flask_user:your_password@localhost/school_system")

    # Prevents Flask-SQLAlchemy from tracking modifications of objects to save resources
    SQLALCHEMY_TRACK_MODIFICATIONS = False
