from flask_restful import Resource
from app.blueprints.dashboard.services import get_gender_distribution, get_region_distribution  # Add this import
from flasgger import swag_from

class GenderDistributionResource(Resource):
    @swag_from({
        'tags': ['Gender Distribution'],
        'description': 'Retrieve the gender distribution of customers.',
        'responses': {
            200: {
                'description': 'Successfully retrieved gender distribution',
                'examples': {
                    'application/json': {
                        'gender': 'Male',
                        'percentage': '60'
                    }
                }
            }
        }
    })
    def get(self):
        return get_gender_distribution(), 200  # Use get_gender_distribution()

class RegionDistributionResource(Resource):
    @swag_from({
        'tags': ['Region Distribution'],
        'description': 'Retrieve the region distribution of customers.',
        'responses': {
            200: {
                'description': 'Successfully retrieved region distribution',
                'examples': {
                    'application/json': {
                        "region": "East",
                        "percentage": "20"
                    }
                }
            }
        }
    })
    def get(self):
        return get_region_distribution(), 200  # Use get_region_distribution()