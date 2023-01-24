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

class MemberSerializer(serializers.ModelSerializer):
    sponsor_member = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    def get_username(self, obj):
        return obj.user.username
    def get_sponsor_member(self, obj):
        return MemberSerializer(obj.sponsor_member, allow_null=True).data
    class Meta:
        model = Member
        fields = '__all__'

class placementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'
        depth = 4

# stokiest 

class BalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Balance
        fields = '__all__'

class Stockiest_invoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stockiest_invoice
        fields = '__all__'
        depth = 2

class Stockiest_productSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    def get_product(self, obj):
        return ProductSerializer(obj.product).data
    class Meta:
        model = Stockiest_product
        fields = '__all__'
        depth = 2