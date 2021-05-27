from main.models import Track
from django.http import JsonResponse

class GroupView:
    def get_tracks(request):
        tracks = [track.sentence for track in Track.objects.all()]
        return JsonResponse(tracks, safe=False)