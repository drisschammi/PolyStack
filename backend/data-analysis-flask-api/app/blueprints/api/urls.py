from flask_restful import Api
from flask import Blueprint, jsonify
from app.blueprints.api.resources import GenderDistributionResource, RegionDistributionResource

api_bp = Blueprint("api", __name__)
api = Api(api_bp)

api.add_resource(GenderDistributionResource, "/gender-distribution")
api.add_resource(RegionDistributionResource, "/region-distribution")

def register_routes(app):
    app.register_blueprint(api_bp, url_prefix="/api/v1")

def register_error_handlers(app):
    """Register error handlers for the application."""
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({"error": "Internal server error"}), 500
