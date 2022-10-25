from django.urls import path
from .views import TodoList, DetailTodo, UserTodo

urlpatterns = [
    path('', UserTodo.as_view(), name='ToDo'),
    path('detail/<int:id>/', DetailTodo.as_view(), name='Detail')
]