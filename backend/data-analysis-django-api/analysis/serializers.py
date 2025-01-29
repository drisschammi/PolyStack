from rest_framework import serializers
from .models import Customer, Policy

class PolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = Policy
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    policies = PolicySerializer(many=True, read_only=True)
    class Meta:
        model = Customer
        fields = '__all__'