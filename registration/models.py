from django.db import models

class Attendee(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=500,null=True, blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name