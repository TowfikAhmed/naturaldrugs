from django.contrib.auth.models import User
from rest_framework import serializers
from core.models import *

class FundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fund
        fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    productimage_set = serializers.SerializerMethodField()
    def get_productimage_set(self, obj):
        return ProductImageSerializer(obj.productimage_set, many=True).data
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'