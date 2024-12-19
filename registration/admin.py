from django.contrib import admin

from .models import Attendee, Inscriptions

class AttendeeAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'message', 'registration_date') 
    search_fields = ('full_name', 'email')  
    list_filter = ('registration_date',)  

class InscriptionsAdmin(admin.ModelAdmin):
    list_display = ('nom', 'email', 'organisation', 'type_de_participation', 'registration_date', 'informations_supplémentaires') 
    search_fields = ('nom', 'email', 'organisation') 
    list_filter = ('type_de_participation', 'registration_date') 

admin.site.register(Attendee, AttendeeAdmin)
admin.site.register(Inscriptions, InscriptionsAdmin)
