from django.contrib import admin
from main.models import Track, Group, Tweet

# Register your models here.
admin.site.site_header = "TwitterKafka Admin"
admin.site.title = "TwitterKafka Admin"

admin.site.register(Track)
admin.site.register(Group)
admin.site.register(Tweet)
