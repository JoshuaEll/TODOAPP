from django.urls import path
from .views import TodoList, DetailTodo

urlpatterns = [
    path('', TodoList.as_view(), name='ToDo'),
    path('detail/<pk>/', DetailTodo.as_view(), name='Detail')
]