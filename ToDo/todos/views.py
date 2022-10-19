from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, status
from .models import todo
from users.permissions import isOwner
from .serializers import ToDoSerialiazer
# Create your views here.

class TodoList(generics.ListCreateAPIView):
    queryset = todo.objects.all()
    serializer_class = ToDoSerialiazer
    permission_classes = [permissions.IsAuthenticated]
    # add permissions
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    #GET and POST for todo list // For the get add only if the user matches the author in the todo

class UserTodo(generics.ListAPIView):
    model = todo
    serializer_class = ToDoSerialiazer
    def get_queryset(self):
        return todo.objects.filter(author=self.request.user)

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = todo.objects.all()
    serializer_class = ToDoSerialiazer
    permission_classes = [permissions.IsAuthenticated, isOwner]
