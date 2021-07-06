from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import Group

class IndexView():
    
    @login_required
    def index(request):
        groups = Group.objects.filter(user = request.user)
        # groups = Group.objects.all()
        return render(request, 'index/index.html', {"groups": groups})