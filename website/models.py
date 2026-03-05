from django.db import models

class HeroSection(models.Model):
    page_title = models.CharField(max_length=300)
    hero_title = models.CharField(max_length=500)
    hero_body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.hero_title
    
    
class ApproachSection(models.Model):
    approach_title = models.CharField(max_length=500)
    approach_body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.approach_title