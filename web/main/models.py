# from django.db import models
from djongo import models
from account.models import User

# Create your models here.

class Track(models.Model):
    sentence = models.CharField(max_length=40)
    objects = models.DjongoManager()

    def __str__(self):
        return self.sentence

class Group(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="group")
    name = models.CharField(max_length=50)
    # words = models.ManyToManyField(Track)
    tracks = models.ArrayReferenceField(
        to=Track,
        on_delete=models.CASCADE,
    )
    objects = models.DjongoManager()

    def __str__(self):
        return self.name


class Tweet(models.Model):
    tracks = models.ArrayReferenceField(
        to=Track,
        on_delete=models.CASCADE,
        related_name="tweet",
        blank=True,
        null = True
    )
    text = models.TextField(max_length=280)
    time = models.DateTimeField()
    positive = models.BooleanField()
    objects = models.DjongoManager()

    def __str__(self):
        return self.text
