from django.urls import path
from .import views


app_name = 'app'


urlpatterns = [
    path('', views.Index, name='home'),
    path('button/', views.Button, name='button'),
]
