# Generated by Django 4.0.1 on 2024-12-04 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attendee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('message', models.CharField(blank=True, max_length=500, null=True)),
                ('registration_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
