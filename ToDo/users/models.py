from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class CustomUserManager(BaseUserManager):
    def _create_user(self, email, password, user_name, **extra_fields):
        if not email:
            raise ValueError("Email is needed")
        if not password:
            raise ValueError("Password is needed")

        user = self.model(
            email = self.normalize_email(email),
            user_name  = user_name,
            **extra_fields

        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, email, password, user_name, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)
        
        return self._create_user(email, password, user_name, **extra_fields)
    
    def create_superuser(self, email, password, user_name, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        return self._create_user(email, password, user_name, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    user_name = models.CharField(unique=True, max_length=100)

    is_staff = models.BooleanField(default=True) #not really needed unless django admin is used
    is_active = models.BooleanField(default=True) # can be false if you want user to validate email first
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']
