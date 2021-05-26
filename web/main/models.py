# from django.db import models
from djongo import models
from account.models import User

# Create your models here.

class Track(models.Model):
    word = models.CharField(max_length=40)

    def __str__(self):
        return self.word

class Group(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="group")
    name = models.CharField(max_length=50)
    # words = models.ManyToManyField(Track)
    words = models.ArrayReferenceField(
        to=Track,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name

