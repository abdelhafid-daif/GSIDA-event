from django.db import models

class Attendee(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=500,null=True, blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

class Inscriptions(models.Model):
    TYPE_CHOICES =(
        ('En présentiel', 'En présentiel'),
        ('Virtuelle', 'Virtuelle'),
    )
    nom = models.TextField(max_length=100)
    email = models.EmailField(unique=True)
    organisation = models.CharField(max_length=200,null=True, blank=True)
    type_de_participation = models.CharField(max_length=20, choices=TYPE_CHOICES, default='En présentiel')
    registration_date = models.DateTimeField(auto_now_add=True)
    informations_supplémentaires = models.CharField(max_length=500,null=True, blank=True)

    def __str__(self):
        return self.nom 

