from django.shortcuts import render,redirect

# Create your views here.
from .models import Attendee
from django.contrib import messages


def contact_view(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Enregistrement dans le modèle
        attendee = Attendee.objects.create(full_name=full_name, email=email, message=message)
        attendee.save()

        messages.success(request, "Your message has been sent successfully!")
        return redirect('contact')

    return render(request, 'home.html')
