from django.contrib import admin
from .models import HeroSection, ApproachSection


class HeroAdmin(admin.ModelAdmin):
    list_display = [
        'hero_title', 'updated_at'
    ]

class ApproachAdmin(admin.ModelAdmin):
    list_display = [
        'approach_title', 'updated_at'
    ]
    
    
admin.site.register(HeroSection, HeroAdmin)
admin.site.register(ApproachSection, ApproachAdmin)