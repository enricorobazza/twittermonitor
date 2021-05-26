from main.models import Track
from django.http import JsonResponse

class GroupView:
    def get_words(request):
        words = [track.word for track in Track.objects.all()]
        return JsonResponse(words, safe=False)