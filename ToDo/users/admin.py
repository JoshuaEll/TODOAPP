from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import User
# Register your models here.
class AccountAdmin(UserAdmin):
    list_display =  ('email', 'user_name', 'last_login', 'is_staff')
    search_fields = ('email', 'user_name')
    readonly_fields = ('id', 'last_login')

    ordering = ('email', 'user_name', 'last_login', 'is_staff')

admin.site.register(User, AccountAdmin)