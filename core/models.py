from django.db import models
from django.utils import timezone
from io import BytesIO
import sys
from PIL import Image
from django.core.files.uploadedfile import InMemoryUploadedFile
# Create your models here.

def compressImage(uploadedImage, width, height):
    if uploadedImage.width == width or uploadedImage.height == height:
        return uploadedImage
    try:
        imageTemproary = Image.open(uploadedImage).convert('RGB')
        outputIoStream = BytesIO()
    
        target_width = width
        target_height = height
        target_ratio = target_height / target_width
        im_ratio = uploadedImage.height / uploadedImage.width
        if target_ratio > im_ratio:
            # It must be fixed by width
            resize_width = target_width
            resize_height = round(resize_width * im_ratio)
        else:
            # Fixed by height
            resize_height = target_height
            resize_width = round(resize_height / im_ratio)
    
        imageTemproaryResized = imageTemproary.resize( (resize_width,resize_height) )
        imageTemproaryResized.save(outputIoStream , format='JPEG', quality=70)
        outputIoStream.seek(0)
        name = uploadedImage.name.split('.')[0][0:10] +"_"+str(width) + 'x' + str(height) + '.jpg'
        uploadedImage = InMemoryUploadedFile(outputIoStream,'ImageField', name, 'image/jpeg', sys.getsizeof(outputIoStream), None)
    except:
        print('error compressing')
    return uploadedImage


class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length = 200, null=False, blank = False)
    description = models.TextField(max_length = 2000, null=False, blank = True)
    image = models.ImageField(upload_to="media/product", null=True, blank=True)
    thumbnail = models.ImageField(upload_to="media/product/thumbnail", null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    code = models.CharField(max_length=100, null=True, blank=True)
    point = models.IntegerField(default=0)
    trade_price = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, default=0.00)
    mrp = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, default=0.00)
    stock = models.IntegerField(default=0)
    rating = models.IntegerField(default=4)
    TYPE_CHOICES = (
        ('Medical', 'Medical'),
        ('Non-Medical', 'Non-Medical'),
    )
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='Medical')
    features = models.JSONField(null=False, blank=False, default=list)
    customfunds = models.JSONField(null=False, blank=False, default=list)
    date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.title
    def save(self, *args, **kwargs):
        if self.image:
            self.thumbnail = compressImage(self.image, 300, 300)
        super(Product, self).save(*args, **kwargs)


class Fund(models.Model):
    TYPE_CHOICES = (
        ('Company Management', 'Company Management'),
        ('Payout Management', 'Payout Management'),
    )
    name = models.CharField(max_length=100)
    percentage = models.IntegerField(default=1, verbose_name="Percentage(%)")
    type = models.CharField(max_length=100, choices=TYPE_CHOICES, default='Company Management')
    reserve = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    cash_in = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    expense = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    transferred = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    recieved = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    def __str__(self):
        return self.name
        
class Fund_transfer(models.Model):
    transfer_from = models.ForeignKey(Fund, on_delete=models.CASCADE, related_name='transfer_from')
    transfer_to = models.ForeignKey(Fund, on_delete=models.CASCADE, related_name='transfer_to')
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.transfer_from.name + " to " + self.transfer_to.name

# Other

class Sales(models.Model):
    SALES_FROM_CHOICES = (
        ('Registration', 'Registration'),
        ('Re-Purchase', 'Re-Purchase')
    )
    sales_from = models.CharField(max_length=100, choices=SALES_FROM_CHOICES, default='Registration')
    at_cash = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    at_point = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    def __str__(self):
        return str(self.sales_from)

class Withdraw(models.Model):
    MEMBER_CHOICES = (
        ('Member', 'Member'),
        ('Stockiest', 'Stockiest'),
    )
    member_type = models.CharField(max_length=100, choices=MEMBER_CHOICES, default='Member')
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    paid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    def __str__(self):
        return str(self.member_type)

class Bonus(models.Model):
    Cash_in = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    Depot_bonus = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    Dealer_bonus = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    Agent_bonus = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    Total_payout = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    def __str__(self):
        return str(self.Total_payout)