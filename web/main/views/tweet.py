from django.shortcuts import render, get_object_or_404
from main.models import Track, Tweet

class TweetView():
    def list(request, sentence):
        track = get_object_or_404(Track, sentence=sentence)
        tweets = Tweet.objects.filter(track = track).order_by('-time')[:20]
        return render(request, 'tweet/list.html', {"tweets": tweets, "sentence": sentence})