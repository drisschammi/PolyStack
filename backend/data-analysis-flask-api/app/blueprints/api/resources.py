from flask_restful import Resource
from app.blueprints.dashboard.services import get_gender_distribution, get_region_distribution  # Add this import

class GenderDistributionResource(Resource):
    def get(self):
        return get_gender_distribution(), 200  # Use get_gender_distribution()

class RegionDistributionResource(Resource):
    def get(self):
        return get_region_distribution(), 200  # Use get_region_distribution()