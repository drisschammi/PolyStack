from flask import Flask

from app.blueprints.api.urls import register_routes, register_error_handlers
from app.config import DevelopmentConfig
from app.extensions import db, cors
from flask_migrate import Migrate
from flasgger import Swagger

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

    # Configure and initialize Swagger with metadata
    Swagger(app, template={
        "swagger": "2.0",
        "info": {
            "title": "Insurance Policy Analysis API",
            "description": "API for analyzing insurance policies and customer data.",
            "version": "1.0",
            "contact": {
                "name": "Chammi Driss",
                "email": "drisschami24@gmail.com",
                "url": "https://ma.linkedin.com/in/drisschammi"
            }
        },
        "basePath": "/",
    }, config={
        "headers": [],
        "specs": [
            {
                "endpoint": "apispec_1",
                "route": "/apispec_1.json",  # JSON specification endpoint
                "rule_filter": lambda rule: True,  # Include all endpoints
                "model_filter": lambda tag: True  # Include all models
            }
        ],
        "static_url_path": "/flasgger_static",  # Default static path for Swagger
        "swagger_ui": True,  # Enable Swagger UI
        "specs_route": "/swagger-ui"  # Route for Swagger UI
    })

    return app