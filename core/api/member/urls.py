from django.urls import path
from . import views
urlpatterns = [
    path('login', views.LoginView.as_view()),
    path('verify_token', views.verify_token),
    path('productlist/', views.productlist),
    path('placement/', views.placement),
    path('products/', views.products),
]