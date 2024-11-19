# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config  # Create a config file for environment variables

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Register Blueprints (if you plan to use them later for modularization)
    # from .routes import main as main_blueprint
    # app.register_blueprint(main_blueprint)
    
    # Import models to ensure they are registered with the app
    from . import models
    
    return app
