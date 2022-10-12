from rest_framework import serializers
from .models import todo


class ToDoSerialiazer(serializers.ModelSerializer):
    title = serializers.CharField(required=True, allow_blank=False, max_length=150)
    description = serializers.CharField(required=False)
    completed = serializers.BooleanField(default=False)
    author = serializers.SerializerMethodField('get_username_from_author')

    class Meta:
        model = todo
        fields = ['pk', 'title', 'description', 'completed', 'author']
    
    def get_username_from_author(self, todo):
        return todo.author.user_name