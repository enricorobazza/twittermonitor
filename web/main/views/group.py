from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from main.models import Group, Tweet, Track

class GroupView():
	
	@login_required
	def list_tweets(request, pk):
		group = get_object_or_404(Group, pk=pk)
		tweets = Tweet.objects.filter(tracks__in=group.tracks_id).order_by('-time')
		tracks = Track.objects.filter(pk__in=group.tracks_id)
		positive = 0
		negative = 0
		for tweet in tweets:
			if tweet.positive:
				positive += 1
			else:
				negative += 1

		return render(request, 'group/list_tweets.html', {
			"group": group,
			"tracks": tracks,
			"tweets": tweets[:20],
			"positive": positive,
			"negative": negative
		})