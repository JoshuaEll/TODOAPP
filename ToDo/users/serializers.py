from ToDo.users.models import User
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'user_name', 'password')
