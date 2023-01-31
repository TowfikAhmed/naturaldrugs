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
    member = Member.objects.get(user = request.user)
    data = placementSerializer(member).data
    return Response(data)


# stockiest only 
@api_view(['GET', 'POST'])
def balances(request):
    user = request.user
    member = Member.objects.get(user = request.user)
    if request.method == 'POST':
        data = request.data
        print(data)
        balance = Balance.objects.create(member = member, amount = data['amount'], note = data['note'])
        
    qs = Balance.objects.filter(member = member).order_by('-id')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(qs, request)
    serializer = BalanceSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def products(request):
    user = request.user
    member = Member.objects.filter(user=user).first()
    if request.method == 'POST':
        data = request.data
        print(data)
        inv = Stockiest_invoice.objects.create(stockiest = member)
        for item in data:
            prod = Product.objects.get(id = item['id'])
            prod.stock -= item['qty']
            prod.save()
            st_pr, created = Stockiest_product.objects.get_or_create(stockiest = member, product_id = item['id'])
            st_pr.qty = item['qty']
            st_pr.save()
            inv.Stockiests_products.add(st_pr)
            inv.total += float(st_pr.product.trade_price * st_pr.qty)
            inv.totalbp += float(st_pr.product.point * st_pr.qty)
        inv.save()
        member.current_balance -= Decimal(inv.total)
        member.save()
    paginator = PageNumberPagination()
    paginator.page_size = 10
    products = Product.objects.all().order_by('-id')
    result_page = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET', 'POST'])
def orders(request):
    user = request.user
    member = Member.objects.get(user = request.user)
    ords = Stockiest_invoice.objects.filter(stockiest = member).order_by('-id')
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(ords, request)
    serializer = Stockiest_invoiceSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def myproducts(request):
    user = request.user
    member = Member.objects.filter(user=user).first()
    paginator = PageNumberPagination()
    paginator.page_size = 10
    products = Stockiest_product.objects.filter(stock__gte = 1, stockiest = member).order_by('-id')
    result_page = paginator.paginate_queryset(products, request)
    serializer = Stockiest_productSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)



@api_view(['GET', 'POST'])
def stockiestOrder(request):
    user = request.user
    member = Member.objects.get(user = request.user)
    qs = Stockiest_invoice.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(qs, request)
    serializer = Stockiest_invoiceSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET', 'POST'])
def register(request):
    user = request.user
    member = Member.objects.filter(user=user).first()
    if request.method == 'POST':
        data = request.data['member']
        cart = request.data['cart']

        # {'name': 'member10', 'username': 'member10', 'email': 'shimul929@gmail.com', 'phone': '+8801727567764', 'passwd': 'asdf', 'passwd2': 'asdf', 'gender': 'Male', 'sponsor': 'asdfs', 'sponsorValid': 'Towfik Ahmed 4', 'placement': 'asdfs', 'placementValid': 'Towfik Ahmed 4', 'usernameValid': 'Valid', 'error': ''}
        new_member = Member.objects.create(
            type = 'MEMBER',
            user = User.objects.create_user(data['username'], data['email'], data['passwd']),
            name = data['name'],
            gender = data['gender'],
            mobile = data['phone'],
            email = data['email'],
            passwd = data['passwd'],
            sponsor_member = Member.objects.get(user__username = data['sponsor']),
        )
        placement = Member.objects.get(user__username = data['placement'])
        if data['placement_position'] == 'A':
            placement.placement_a = new_member
        elif data['placement_position'] == 'B':
            placement.placement_b = new_member
        placement.save()

        member_inv = Member_invoice.objects.create(stockiest = member, member = new_member)
        for pr in cart:
            stokiest_pr = Stockiest_product.objects.get(id = pr['id'])
            pr = Member_product.objects.create(stockiest = member, member = new_member, product = stokiest_pr, qty = pr['qty'])
            member_inv.Members_products.add(pr)
            member_inv.total += float(pr.product.product.trade_price * pr.qty)
            member_inv.totalbp += float(pr.product.product.point * pr.qty)
            stokiest_pr.stock -= pr.qty
            stokiest_pr.save()
        member_inv.save()
        new_member.bp = member_inv.totalbp
        new_member.save()
        data = {}
        return Response(data, status=status.HTTP_200_OK) 