from flask import Flask
from app.config import DevelopmentConfig

def create_app():
    """Flask application factory."""
    app = Flask(__name__)
    app.config.from_object(DevelopmentConfig)
    return app