from flask import Flask
from app.config import DevelopmentConfig
from app.extensions import db, cors
from flask_migrate import Migrate

migrate = Migrate()

def create_app():
    """Flask application factory."""
    app = Flask(__name__)

    app.config.from_object(DevelopmentConfig)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Enable CORS for cross-domain API access
    cors.init_app(app)

    return app