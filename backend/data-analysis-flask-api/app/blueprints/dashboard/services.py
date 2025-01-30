from app.extensions import db
from app.blueprints.dashboard.models import Customer

def get_gender_distribution():
    """Calculate and return gender distribution."""
    total = db.session.query(Customer).count()
    if not total:
        return []
    data = (
        db.session.query(Customer.gender, db.func.count(Customer.gender))
        .group_by(Customer.gender)
        .all()
    )
    return [{"gender": gender, "percentage": (count / total) * 100} for gender, count in data]

def get_region_distribution():
    """Calculate and return region distribution."""
    total = db.session.query(Customer).count()
    if not total:
        return []
    data = (
        db.session.query(Customer.region, db.func.count(Customer.region))
        .group_by(Customer.region)
        .all()
    )
    return [{"region": region, "percentage": (count / total) * 100} for region, count in data]