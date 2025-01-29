from django.db.models import Count, Avg, Sum
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Policy

# Utility function to aggregate premium data
def get_premium_distribution(group_by_field):
    return Policy.objects.values(group_by_field).annotate(
        average_premium=Avg('premium')
    ).order_by(group_by_field)

class InsuranceCustomersViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    # I don't need CRUDs for this app, just Custom actions only

    @action(detail=False, methods=['get'], url_path='premium-by-region')
    def premium_by_region(self, request):
        """Get premium distribution by region."""
        distribution = get_premium_distribution('customer__region')
        return Response(distribution)

    @action(detail=False, methods=['get'], url_path='premium-by-income')
    def premium_by_income(self, request):
        """Get premium distribution by income group."""
        distribution = get_premium_distribution('customer__income_group')
        return Response(distribution)

    @action(detail=False, methods=['get'], url_path='premium-by-marital-status')
    def premium_by_marital_status(self, request):
        """Get premium distribution by marital status."""
        distribution = get_premium_distribution('customer__marital_status')
        return Response(distribution)

    @action(detail=False, methods=['get'], url_path='premium-by-vehicle-segment')
    def premium_by_vehicle_segment(self, request):
        """Get premium distribution by vehicle segment."""
        distribution = get_premium_distribution('vehicle_segment')
        return Response(distribution)

    @action(detail=False, methods=['get'], url_path='premium-by-fuel-type')
    def premium_by_fuel_type(self, request):
        """Get premium distribution by fuel type."""
        distribution = get_premium_distribution('fuel')
        return Response(distribution)