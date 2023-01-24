from django.urls import path
from . import views
urlpatterns = [
    path('login', views.LoginView.as_view()),
    path('verify_token', views.verify_token),
    path('productlist/', views.productlist),
    path('placement/', views.placement),
    # stockiest only
    path('products/', views.products),
<<<<<<< HEAD
    path('stockiest-order/', views.stockiestOrder),
=======
    path('balances/', views.balances),
    # member only
>>>>>>> 0bc7fce5e3b35efa3f3170c1f64086e41213d9e6
]