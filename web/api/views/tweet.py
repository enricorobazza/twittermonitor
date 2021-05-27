from main.models import Track, Tweet
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import serializers, viewsets
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response

class TweetSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many = True, queryset=Track.objects.all())

    def create(self, validated_data):
        tracks = validated_data.pop('tracks', [])  # Extract relation data
        tweet_instance = Tweet.objects.create(**validated_data)  # Save the instance w/o relations
        tweet_instance.tracks.add(*tracks)  # Add our relations to the instance
        tweet_instance.save()  # Save the instance w/ relations added
        return tweet_instance
    
    def update(self, validated_data, instance):
        # Update which can add new relations, but CANNOT remove them
        pk = validated_data.pop('pk', None)  # Fetch our target pk
        tracks = validated_data.pop('tracks', [])  # Extract relation data
        tweet_instance = Tweet.objects.fetch(pk=pk).update(**validated_data)  # Update non-relational data
        tweet_instance.tracks.add(*tracks)  # Add our relations
        tweet_instance.save()  # Save our instance w/ relations added
        return tweet_instance
    class Meta:
        model = Tweet
        fields = "__all__"

# ViewSets define the view behavior.
class TweetApiSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        sentences = request.data["tracks"]
        if len(sentences) > 0 and type(sentences[0]) is str:
            tracks = Track.objects.filter(sentence__in=sentences)
        else:
            tracks = sentences
        request.data["tracks"] = [track.pk for track in tracks]
        return super(TweetApiSet, self).create(request, args, kwargs)
