from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .serializers import *
from core.models import *
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import generics

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework.decorators import authentication_classes
from decimal import Decimal
import base64 
from django.core.files.base import ContentFile 

class JWTAuthenticationSafe(JWTAuthentication):
    def authenticate(self, request):
        try:
            return super().authenticate(request=request)
        except InvalidToken:
            return None

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        return token

@api_view(['GET'])
def fundlist(request):
    cm = Fund.objects.filter(type = 'Company Management')
    pm = Fund.objects.filter(type = 'Payout Management') 
    data = {
        'cm': FundSerializer(cm, many=True).data,
        'pm': FundSerializer(pm, many=True).data,
    }
    return Response(data)

@api_view(['GET'])
def categorylist(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'DELETE'])
def productlist(request):
    if request.method == 'POST':
        data = request.data['data']
        # {'name': 'asdfaddddd', 'description': 'asdfasdf', 'category': '', 'type': '', 'tradePrice': '', 'mrp': '', 'code': '', 'points': '', 'imagelist': [], 'customfunds': [{'name': 'Company’s Profit', 'percentage': 3}, {'name': 'Production Fund', 'percentage': 22}], 'specifications': [{'name': 'aaaaaaa', 'value': 'fffffffff'}, {'name': 'vv', 'value': 'aaaaaaa'}]}
        product = Product.objects.create(
            title = data['title'],
            description = data['description'],
            category = Category.objects.get(name = data['category']),
            type = data['type'],
            trade_price = Decimal(data['trade_price']),
            mrp = Decimal(data['mrp']),
            code = data['code'],
            point = Decimal(data['point']),
            features = data['specifications'],
            customfunds = data['customfunds'],
        )
        for image in data['imagelist']:
            format, imgstr = image.split(';base64,') 
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
            ProductImage.objects.create(
                product = product,
                image = data,
            )
    if request.method == 'DELETE':
        product = Product.objects.get(id = request.GET.get('id'))
        product.delete()
        return Response('success')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    products = Product.objects.all().order_by('-id')
    result_page = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


# aunthentication_classes JWTAuthenticationSafe
@authentication_classes([JWTAuthenticationSafe])
class LoginView(APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        user = User.objects.filter(email=email).first()
        if user is not None:
            if user.check_password(password):
                jwt_token = MyTokenObtainPairSerializer.get_token(user).access_token
                data = {
                    'api_token': str(jwt_token),
                    'id': user.id,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email,
                    'email_verified_at': user.date_joined,
                    'created_at': user.date_joined,
                    'updated_at': user.date_joined,
                }
                return Response(data, status=status.HTTP_200_OK)
        # 401 Unauthorized
        return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)
    

@csrf_exempt
@api_view(['GET', 'POST'])
def verify_token(request):
    user = request.user
    if user.is_authenticated:
        return Response({'status': 'ok'})
    return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@csrf_exempt
def members(request):
    members = Member.objects.all()
    serializer = MemberSerializer(members, many=True)
    return Response(serializer.data)
