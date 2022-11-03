from django.shortcuts import render
from requests import request
from rest_framework.decorators import api_view
from rest_framework import generics, permissions
from .models import todo
from users.permissions import isOwner
from .serializers import ToDoSerialiazer
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.

class TodoList(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ToDoSerialiazer
    queryset = todo.objects.all()
    # add permissions
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    #GET and POST for todo list // For the get add only if the user matches the author in the todo

class UserTodo(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    model = todo
    serializer_class = ToDoSerialiazer
    def get_queryset(self):
        return todo.objects.filter(author=self.request.user)
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    model = todo
    serializer_class = ToDoSerialiazer
    
    def get_queryset(self):
        return todo.objects.filter(author=self.request.user)
