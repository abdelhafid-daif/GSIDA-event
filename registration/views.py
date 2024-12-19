from django.shortcuts import render,redirect
from .models import Attendee,Inscriptions
from .forms import InscriptionForm
from django.contrib import messages
import logging


def contact_view(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Enregistrement dans le modèle
        attendee = Attendee.objects.create(full_name=full_name, email=email, message=message)
        attendee.save()

        messages.success(request, "Votre message a été enregistrée avec succès!")

    return render(request, 'home.html')


logger = logging.getLogger(__name__)

def custom_404_view(request, exception):
    logger.warning(f"Tentative d'accès à une URL inexistante : {request.path}")
    return render(request, '404.html', status=404)



def create_inscription(request):
    form = None
    if request.method == 'POST':
        nom = request.POST.get('nom')
        email = request.POST.get('email')
        organisation = request.POST.get('organisation')
        type_de_participation = request.POST.get('type_de_participation')
        informations_supplémentaires = request.POST.get('informations_supplémentaires')
        inscription = Inscriptions(
            nom=nom,
            email=email,
            organisation=organisation,
            type_de_participation=type_de_participation,
            informations_supplémentaires=informations_supplémentaires
        )
        inscription.save()
        messages.success(request, "Votre inscription a été enregistrée avec succès !")
    else:
        form = InscriptionForm()
    return render(request, 'home.html', {'form': form})

