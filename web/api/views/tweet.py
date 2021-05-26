from main.models import Track, Tweet
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import serializers, viewsets
from rest_framework.permissions import AllowAny

# class TweetView:
#     def add_tweet(request):
#         if request.method == "POST":
#             track_word = request.POST["track"]
#             tweet_text = request.POST["tweet"]
#             time = request.POST["time"]

#             track = get_object_or_404(Track, word = track_word)
#             tweet = Tweet(track=track, tweet=tweet_text, time=time)
#             tweet.save()
#             return JsonResponse({"success": True}, safe=False)
#         else:
#             return JsonResponse({"error": "wrong method", "success": False}, safe=False)

class TweetSerializer(serializers.ModelSerializer):
# class AtivoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tweet
        fields = "__all__"

# ViewSets define the view behavior.
class TweetApiSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        track = get_object_or_404(Track, word = request.data["track"])
        request.data["track"] = track.pk
        return super(TweetApiSet, self).create(request, args, kwargs)

        # serializer = self.get_serializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # self.perform_create(serializer)
        # headers = self.get_success_headers(serializer.data)
        # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
