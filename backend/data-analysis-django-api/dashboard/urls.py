from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Keep the API versioning under api/v1/
    path('api/v1/', include([
        path('', include('analysis.urls')),  # Include 'analysis.urls'
    ])),
]