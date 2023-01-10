from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'home/index.html')
def dashboard(request):
    return render(request, 'dashboard/index.html')
def administrator(request):
    return render(request, 'administrator/index.html')
