from django.db import models

# Create your models here.

class FilePDF(models.Model):
    file = models.FileField(upload_to='documents/')
    # Agrega otros campos según tus necesidades

    def __str__(self):
        return self.file.name

class Presentation(models.Model):
    title = models.CharField(max_length=255, blank=True)
    content = models.TextField()

    def __str__(self):
        return f'{self.title}'
    

class Skill(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    image_width = models.PositiveIntegerField(null=True, blank=True, help_text="Width of the image in pixels")

    def __str__(self):
        return self.name

class Interest(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    image_width = models.PositiveIntegerField(null=True, blank=True, help_text="Width of the image in pixels")

    def __str__(self):
        return self.name
