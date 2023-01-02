from django.urls import path, re_path
from . import views
urlpatterns = [
    path('', views.index),
    path('intro', views.index),
    path('signin', views.index),
    # any link that starts with dashboard/
    re_path(r'^dashboards/', views.index),
    path('dashboard/', views.dashboard),
    path('administrator/', views.administrator),
    re_path(r'^dashboard/(?P<slug>[\w-]+)/$', views.dashboard),
]