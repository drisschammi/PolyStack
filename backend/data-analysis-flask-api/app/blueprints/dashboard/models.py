from app.extensions import db

class Customer(db.Model):
    __tablename__ = "customer"  # Matches the table name in the database

    customer_id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(10), nullable=False)  # 'Male', 'Female'
    income_group = db.Column(db.String(20), nullable=True)  # '0-$25K', '$25-$70K', '>$70K'
    region = db.Column(db.String(20), nullable=False)  # 'North', 'South', 'East', 'West'
    marital_status = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return f"<Customer {self.customer_id}>"