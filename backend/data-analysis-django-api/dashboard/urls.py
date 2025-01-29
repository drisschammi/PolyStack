from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

# Define the schema view for Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Insurance Policy Analysis API",
        default_version='1.0',
        description="API documentation for insurance policy analysis",
        contact=openapi.Contact(name="Chammi Driss", email="drisschami24@gmail.com", url="https://ma.linkedin.com/in/drisschammi"),
    ),
    public=True,
)
urlpatterns = [
    path('admin/', admin.site.urls),

    path('swagger-ui/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger'),

    # Keep the API versioning under api/v1/
    path('api/v1/', include([
        path('', include('analysis.urls')),  # Include 'analysis.urls'
    ])),
]