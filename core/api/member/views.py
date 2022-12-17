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
from django.contrib.auth.hashers import make_password

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


@api_view(['GET', 'POST', 'DELETE'])
def productlist(request):
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
        username = data['email']
        password = data['password']
        user = User.objects.filter(username=username).first()
        if user is not None:
            if user.check_password(password):
                jwt_token = MyTokenObtainPairSerializer.get_token(user).access_token
                member = Member.objects.filter(user=user).first()
                data = MemberSerializer(member).data
                data['api_token'] = str(jwt_token)
                return Response(data, status=status.HTTP_200_OK)
        # 401 Unauthorized
        return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)
    

@csrf_exempt
@api_view(['GET', 'POST'])
def verify_token(request):
    user = request.user
    if user.is_authenticated:
        member = Member.objects.filter(user=user).first()
        data = MemberSerializer(member).data
        return Response(data, status=status.HTTP_200_OK)
    return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
@csrf_exempt
def check_user(request):
    username = request.GET.get('username')
    member = Member.objects.filter(user__username = username).first()
    if member:
        data  = MemberSerializer(member).data
        return Response(data)
    return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@csrf_exempt
def check_username(request):
    username = request.GET.get('username')
    user = User.objects.filter(username = username).first()
    if user:
        return Response(('Username already exists'))
    return Response({'errors': [['Invalid Credentials']]}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@csrf_exempt
def placement(request):
    member = Member.objects.get(id=19)
    data = placementSerializer(member).data
    return Response(data)

@api_view(['GET'])
def products(request):
    qs = Product.objects.all()
    data = ProductSerializer(qs, many=True).data
    return Response(data, status=status.HTTP_200_OK)
