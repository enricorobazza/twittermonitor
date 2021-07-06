from django.urls import path
from main.views.index import IndexView
from main.views.tweet import TweetView
from main.views.group import GroupView

urlpatterns = [
    path('', IndexView.index, name='index'),
    path('tweets/<str:sentence>/', TweetView.list, name='list_tweets'),
    path('groups/<int:pk>/', GroupView.list_tweets, name='list_group_tweets'),
]