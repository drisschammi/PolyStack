from django.db import models

class Customer(models.Model):
    REGIONS = [('North', 'North'), ('South', 'South'), ('East', 'East'), ('West', 'West')]
    INCOME_GROUPS = [('0-$25K', '0-$25K'), ('$25-$70K', '$25-$70K'), ('>$70K', '>$70K')]

    customer_id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    income_group = models.CharField(max_length=20, choices=INCOME_GROUPS)
    region = models.CharField(max_length=20, choices=REGIONS)
    marital_status = models.BooleanField()

    class Meta:
        db_table = "customer"  # Explicitly match the table name in the database

    def __str__(self):
        return f"Customer {self.customer_id}"

class Policy(models.Model):
    FUELS = [('CNG', 'CNG'), ('Diesel', 'Diesel'), ('Petrol', 'Petrol')]
    VEHICLE_SEGMENTS = [('A', 'A'), ('B', 'B'), ('C', 'C')]

    policy_id = models.AutoField(primary_key=True)
    date_of_purchase = models.DateTimeField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='policies')
    fuel = models.CharField(max_length=10, choices=FUELS)
    vehicle_segment = models.CharField(max_length=10, choices=VEHICLE_SEGMENTS)
    premium = models.DecimalField(max_digits=10, decimal_places=2)
    bodily_injury_liability = models.BooleanField()
    personal_injury_protection = models.BooleanField()
    property_damage_liability = models.BooleanField()
    collision = models.BooleanField()
    comprehensive = models.BooleanField()

    class Meta:
        db_table = "policy"  # Explicitly match the table name in the database

    def __str__(self):
        return f"Policy {self.policy_id} - Customer {self.customer.customer_id}"