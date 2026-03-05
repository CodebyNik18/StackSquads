from django.shortcuts import render
from website.models import HeroSection, ApproachSection


def home(request):
    hero_data = HeroSection.objects.first()
    approach_data = ApproachSection.objects.first()
    context = {
        'hero_data': hero_data,
        'approach_data': approach_data
    }
    return render(request=request, template_name='home.html', context=context)