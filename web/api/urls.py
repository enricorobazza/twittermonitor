from django.urls import path, include, re_path
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from api.views.group import GroupView
# from api.views.tweet import TweetView
from api.views.tweet import TweetApiSet
# from api.views import ExampleApiSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'tweet', TweetApiSet)

urlpatterns = [
    path('', include(router.urls + [
        re_path(r'^token/?$', jwt_views.TokenObtainPairView.as_view(),
                name='token_obtain_pair'),
        re_path(r'^token/refresh/?$',
                jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    ])),
    path('auth/', include('rest_framework.urls')),
    path('track/', GroupView.get_tracks, name="get_tracks"),
    path('group/<int:group_pk>/track/<int:pk>/delete', GroupView.delete_track, name="delete_track"),
    path('group/<int:pk>/', GroupView.list_tweets, name="api_list_group_tweets"),
    path('group/<int:pk>/delete', GroupView.delete_group, name="delete_group"),
    path('group/<int:pk>/track', GroupView.add_track, name="api_group_add_sentence"),
    path('group/', GroupView.add_group, name="add_group"),
]