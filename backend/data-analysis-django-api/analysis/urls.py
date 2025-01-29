from rest_framework.routers import DefaultRouter
from .views import InsuranceCustomersViewSet

router = DefaultRouter()
router.register(r'', InsuranceCustomersViewSet, basename='insurance-customers')

urlpatterns = router.urls