from flask import Flask

from app.blueprints.api.urls import register_routes, register_error_handlers
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

    # Register API routes and error handlers
    register_routes(app)
    register_error_handlers(app)

    # Enable CORS for cross-domain API access
    cors.init_app(app)

    return app