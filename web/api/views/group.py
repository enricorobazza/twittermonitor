from main.models import Track, Group, Tweet
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.template.defaultfilters import date as _date
from django.urls import reverse

class GroupView:
	def get_tracks(request):
		tracks = [track.sentence for track in Track.objects.all()]
		return JsonResponse(tracks, safe=False)

	def list_tweets(request, pk):
		group = get_object_or_404(Group, pk=pk)
		tweets = Tweet.objects.filter(tracks__in=group.tracks_id).order_by('-time').values('text', 'positive', 'time')
		positive = 0
		negative = 0
		for tweet in tweets:
			tweet['time'] = _date(tweet['time'], "j \d\e F \d\e Y \à\s H:i")
			if tweet['positive']:
				positive += 1
			else:
				negative += 1

		return JsonResponse({"tweets": list(tweets[:20]), "positive": positive, "negative": negative}, safe=False)

	def delete_group(request, pk):
		try:
			Group.objects.get(pk=pk).delete()
			return JsonResponse({"success": True}, safe=False)
		except Group.DoesNotExist:
			return JsonResponse({"success": True}, safe=False)

	def add_track(request, pk):
		if request.method == "POST":
			sentence = request.POST.get("sentence")
			group = get_object_or_404(Group, pk=pk)
			try:
				track = Track.objects.get(sentence=sentence)
			except Track.DoesNotExist:
				track = Track()
				track.sentence = sentence
				track.save()
			group.tracks.add(track)
			group.save()
			delete_url = reverse('delete_track', kwargs={'pk': track.pk, 'group_pk': pk})
			return JsonResponse({"sentence": sentence, "pk": track.pk, "deleteLink": delete_url}, safe=False)

	def delete_track(request, group_pk, pk):
		try:
			group = Group.objects.get(pk = group_pk)
			track = Track.objects.get(pk = pk)
			# remove track from group
			group.tracks.remove(track)

			# check if track is in any other group
			left_groups = Group.objects.filter(tracks = track)

			# if not, delete track
			if len(left_groups) == 0:
				track.delete()
			return JsonResponse({"success": True}, safe=False)
		except (Track.DoesNotExist, Group.DoesNotExist):
			return JsonResponse({"success": True}, safe=False)

	def add_group(request):
		if request.method == "POST":
			group_name = request.POST.get("group")
			group = Group()
			group.name = group_name
			group.user = request.user
			group.save()
			delete_url = reverse('delete_group', kwargs={'pk': group.pk})
			list_url = reverse('list_group_tweets', kwargs={'pk': group.pk})
			return JsonResponse({
				"pk": group.pk, 
				"name": group_name, 
				"link": list_url,
				"deleteLink": delete_url
				}, safe=False)
