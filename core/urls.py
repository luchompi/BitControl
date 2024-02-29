from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # APIS para autenticacion
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.jwt')),
    # APIS para inventario
    path('api/v1/inventario/', include('apps.Inventario.urls'))
]
