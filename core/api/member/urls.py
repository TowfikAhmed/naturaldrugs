from django.urls import path
from . import views
urlpatterns = [
    path('login', views.LoginView.as_view()),
    path('verify_token', views.verify_token),
    path('placement/', views.placement),
    # stockiest only
    path('balances/', views.balances),
    path('products/', views.products),
    path('myproducts/', views.myproducts),
    path('register/', views.register),
    path('orders/', views.orders),
    path('stockiest-order/', views.stockiestOrder),
]