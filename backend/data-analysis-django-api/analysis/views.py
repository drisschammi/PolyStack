from django.db.models import Count, Avg, Sum
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from .models import Policy

# Utility function to aggregate premium data
def get_premium_distribution(group_by_field):
    return Policy.objects.values(group_by_field).annotate(
        average_premium=Avg('premium')
    ).order_by(group_by_field)

class InsuranceCustomersViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    # I don't need CRUDs for this app, just Custom actions only

    @swagger_auto_schema(
        operation_description="This API returns the distribution of insurance premiums by region. It shows the total premium paid in each region, as well as the average premium in each region. Use this API to analyze how different regions are contributing to overall premium income.",
        responses={200: 'A list of regions with total and average premiums'}
    )
    @action(detail=False, methods=['get'], url_path='premium-by-region')
    def premium_by_region(self, request):
        """Get premium distribution by region."""
        distribution = get_premium_distribution('customer__region')
        return Response(distribution)

    @swagger_auto_schema(
        operation_description="This API returns the distribution of insurance premiums by income group. It shows the total premium paid in each income group and calculates the average premium within each group. This helps determine how premium payments vary between different income groups.",
        responses={200: 'A list of income groups with total and average premiums'}
    )
    @action(detail=False, methods=['get'], url_path='premium-by-income')
    def premium_by_income(self, request):
        """Get premium distribution by income group."""
        distribution = get_premium_distribution('customer__income_group')
        return Response(distribution)

    @swagger_auto_schema(
        operation_description="This API calculates the premium distribution by marital status of customers. It shows the total premium and average premium for each marital status group (e.g., Single, Married). Use this to understand the impact of marital status on premium payments.",
        responses={200: 'A list of marital statuses with total and average premiums'}
    )
    @action(detail=False, methods=['get'], url_path='premium-by-marital-status')
    def premium_by_marital_status(self, request):
        """Get premium distribution by marital status."""
        distribution = get_premium_distribution('customer__marital_status')
        return Response(distribution)

    @swagger_auto_schema(
        operation_description="This API returns the distribution of insurance premiums by vehicle segment. It shows the total premium paid in each vehicle segment and calculates the average premium within each segment. This helps determine how premium payments vary between different vehicle segments.",
        responses={200: 'A list of vehicle segments with total and average premiums'}
    )
    @action(detail=False, methods=['get'], url_path='premium-by-vehicle-segment')
    def premium_by_vehicle_segment(self, request):
        """Get premium distribution by vehicle segment."""
        distribution = get_premium_distribution('vehicle_segment')
        return Response(distribution)

    @swagger_auto_schema(
        operation_description="This API returns the distribution of insurance premiums by fuel type. It shows the total premium paid in each fuel type and calculates the average premium within each type. This helps determine how premium payments vary between different fuel types.",
        responses={200: 'A list of fuel types with total and average premiums'}
    )
    @action(detail=False, methods=['get'], url_path='premium-by-fuel-type')
    def premium_by_fuel_type(self, request):
        """Get premium distribution by fuel type."""
        distribution = get_premium_distribution('fuel')
        return Response(distribution)