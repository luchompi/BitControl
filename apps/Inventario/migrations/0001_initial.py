# Generated by Django 5.0.2 on 2024-02-29 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Marca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(error_messages={'unique': 'Ya existe una marca con ese nombre'}, max_length=100, unique=True)),
                ('timestamps', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]