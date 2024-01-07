from django.contrib import admin
from portafolio import models

# Register your models here.

admin.site.register(models.FilePDF)

admin.site.register(models.Presentation)

admin.site.register(models.Skill)

admin.site.register(models.Interest)