from django.urls import path
from . import views
urlpatterns = [
    path('fundlist/', views.fundlist),
    path('categorylist/', views.categorylist),
    path('productlist/', views.productlist),
    path('login', views.LoginView.as_view()),
    path('verify_token', views.verify_token),
    path('members', views.members),
]