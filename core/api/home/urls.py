from django.urls import path
from . import views
urlpatterns = [
    path('fundlist', views.fundlist),
    path('products', views.products),
]