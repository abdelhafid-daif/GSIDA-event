from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
app_name = 'registration'  # Ensure there are no spaces here
handler404 = 'registration.views.custom_404_view'
urlpatterns = [
    path('', views.contact_view, name='home_avent'),
    path('create-inscription/', views.create_inscription, name='create_inscription'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
