from django.shortcuts import render
from django.http import JsonResponse
from portafolio import models

# Create your views here.

def index(request):
    archivo = models.FilePDF.objects.first()
    file_name = archivo.file.name if archivo else ''
    skills = models.Skill.objects.all()
    interests = models.Interest.objects.all()
    
    
    presentations_sections = models.Presentation.objects.all()
    
    return render(request, 'index.html', {'file_name': file_name, 'presentations_sections': presentations_sections, 'skills': skills, 'interests': interests})


