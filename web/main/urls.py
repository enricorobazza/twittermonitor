from django.urls import path
from main.views.index import IndexView
from main.views.tweet import TweetView

urlpatterns = [
    path('', IndexView.index, name='index'),
    path('tweets/<str:sentence>/', TweetView.list, name='list_tweets'),
]