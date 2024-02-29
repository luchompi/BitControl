from django.urls import path
from . import views as v
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('marcas/', v.MarcaController.as_view()),
    path('marcas/<int:pk>/', v.MarcaController.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)