from django.db import models
from django.conf import settings


# Create your models here.
class todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def _str_(self):
        return self.title