from django.db import models

# Create your models here.


class Marca(models.Model):
    name = models.CharField(max_length=100, unique=True, error_messages={
        'unique': 'Ya existe una marca con ese nombre'})
    timestamps = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
