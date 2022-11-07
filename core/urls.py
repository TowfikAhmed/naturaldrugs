from django.urls import path, re_path
from . import views
urlpatterns = [
    path('', views.index),
    path('dashboard/', views.dashboard),
    re_path(r'^dashboard/(?P<slug>[\w-]+)/$', views.dashboard),
]