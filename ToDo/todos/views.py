from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, status
# Create your views here.

class TodoList(generics.ListCreateAPIView):
    pass
    #GET and POST for todo list // For the get add only if the user matches the author in the todo

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    pass
    #GET/PUT only// gets the full detail of the individual todo