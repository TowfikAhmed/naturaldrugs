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
import base64, random, string
from django.core.files.base import ContentFile 
from django.contrib.auth.hashers import make_password

from django.db.models import Q

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

@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def productlist(request):
    if request.method == 'POST':
        data = request.data
        print(data)
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
            features = data['features'],
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
    if request.method == 'PUT':
        data = request.data
        print(data)
        product = Product.objects.get(id = data['id'])
        product.title = data['title']
        product.description = data['description']
        product.code = data['code']
        product.point = Decimal(data['point'])
        product.trade_price = Decimal(data['trade_price'])
        product.mrp = Decimal(data['mrp'])
        product.type = data['type']
        product.stock = data['stock']
        product.category = Category.objects.get(id = data['category'])
        product.save()
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


@api_view(['GET', 'POST', "PUT"])
def orders(request):
    if request.method == 'PUT':
        data = request.data
        order = Stockiest_invoice.objects.get(id = data['id'])
        order.status = data['status']
        order.save()
        return Response('success')
    ords = Stockiest_invoice.objects.all().order_by('-id')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(ords, request)
    serializer = Stockiest_invoiceSerializer(result_page, many=True)
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

@api_view(['GET', 'POST', 'DELETE'])
@csrf_exempt
def members(request):
    if request.method == 'POST':
        data = request.data
        print(data)
        # {'info': {'name': 'Towfik Ahmed', 'gender': 'MALE', 'mobile': '+8801727567764', 'email': 'shimul929@gmail.com', 'address': 'Lalon Shah mazar chewria', 'im': '', 'passwd': 'asdf', 'passwd2': 'asdf', 'sponsor': 'asdf', 'sponsorStatus': {'id': 1, 'type': 'MEMBER', 'name': 'Test 1', 'gender': 'MALE', 'mobile': None, 'email': None, 'address': None, 'im': None, 'passwd': None, 'image': None, 'created_at': 'November 15 2022, 04:27 PM', 'updated_at': 'November 15 2022, 04:28 PM', 'current_balance': '0.00', 'total_earned': '0.00', 'blocked': False, 'user': 1, 'sponsor_memeber': None, 'sponsor_agent': None, 'sponsor_dealer': None, 'sponsor_depot': None}}, 'type': 'Member'}
        user = User.objects.create(
            username = data['username'],
            first_name = data['name'],
            email = data['email'],
            password = make_password(data['passwd']),
        )
        spn = Member.objects.get(user__username = data['sponsor_id'])
        member = Member.objects.create(
            user = user,
            name = data['name'],
            type = data['type'].upper(),
            sponsor_member = spn,
            mobile = data['mobile'],
            address = data['address'],
            email = data['email'],
            im = data['im'],
            passwd = data['passwd'],
            gender = data['gender'].upper()
        )
        return Response('success')
    if request.method == 'DELETE':
        member = Member.objects.get(id = request.GET.get('id'))
        user = member.user
        user.delete()
        return Response('success')
    type = request.GET.get('type')
    if type == 'stockiest':
        members = Member.objects.filter(Q(type = 'AGENT') |Q(type = 'DEALER') | Q(type = 'DEPOT')).order_by('-id')
    elif type:
        members = Member.objects.filter(type = type).order_by('-id')
    else:
        members = Member.objects.all().order_by('-id')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(members, request)
    serializer = MemberSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
@csrf_exempt
def check_user(request):
    print(777)
    username = request.GET.get('username')
    type = request.GET.get('type')
    if type:
        member = Member.objects.filter(user__username = username, type = type).first()
    else:
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

@api_view(['GET', 'PUT', 'DELETE'])
def balances(request):
    if request.method == 'PUT':
        bal  = Balance.objects.get(id = request.data['id'])
        serializers = BalanceSerializer(bal, data=request.data)
        if serializers.is_valid():
            serializers.save()
    qs = Balance.objects.all().order_by('-id')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(qs, request)
    data = BalanceSerializer(result_page, many=True).data
    return paginator.get_paginated_response(data)