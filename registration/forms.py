from django import forms
from .models import Inscriptions

class InscriptionForm(forms.ModelForm):
    class Meta:
        model = Inscriptions
        fields = ['nom', 'email', 'organisation', 'type_de_participation', 'informations_supplémentaires']

    def clean_nom(self):
        nom = self.cleaned_data.get('nom')
        if not nom.isalpha():
            raise forms.ValidationError("Le nom ne doit contenir que des lettres.")
        return nom

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if not email:
            raise forms.ValidationError("Veuillez fournir une adresse e-mail valide.")
        return email