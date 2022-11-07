from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .serializers import *
from core.models import *
from rest_framework.pagination import PageNumberPagination
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
def products(request):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    qs = Product.objects.all()
    result_page = paginator.paginate_queryset(qs, request)
    data = ProductSerializer(result_page, many=True).data
    return paginator.get_paginated_response(data) 