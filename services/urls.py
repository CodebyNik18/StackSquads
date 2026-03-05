from django.urls import path
from . import views

urlpatterns = [
    path('', views.services, name='services'),
    path('google_ad-services/', views.googleadservice, name='google_ad_service'),
    path('public-services/', views.publicservice, name='public_service'),
    path('seo-services/', views.seoservice, name='seo_service'),
    path('social-services/', views.socialservice, name='social_service'),
    path('video-services/', views.videoservice, name='video_service'),
    path('web-services/', views.webservice, name='web_service'),
]