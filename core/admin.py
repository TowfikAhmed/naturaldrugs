from django.contrib import admin
<<<<<<< HEAD
from .models import *
=======
from .models import Member, Product, ProductImage, Category, Fund, Fund_transfer, Sales, Withdraw, Balance, Bonus
>>>>>>> 0bc7fce5e3b35efa3f3170c1f64086e41213d9e6
# Register your models here.
admin.site.register(Member)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductImage)
class FundAdmin(admin.ModelAdmin):
    list_display = ('name', 'reserve', 'cash_in', 'expense', 'transferred', 'recieved', 'percentage', 'type')
admin.site.register(Fund, FundAdmin)
class Fund_transferAdmin(admin.ModelAdmin):
    list_display = ('transfer_from', 'transfer_to', 'amount', 'date')
admin.site.register(Fund_transfer, Fund_transferAdmin)
class SalesAdmin(admin.ModelAdmin):
    list_display = ('sales_from', 'at_cash', 'at_point')
admin.site.register(Sales, SalesAdmin)
class WithdrawAdmin(admin.ModelAdmin):
    list_display = ('member_type', 'total', 'paid')
admin.site.register(Withdraw, WithdrawAdmin)
class BalanceAdmin(admin.ModelAdmin):
    list_display = ('amount', 'status', 'member', 'date')
admin.site.register(Balance, BalanceAdmin)
class BonusAdmin(admin.ModelAdmin):
    list_display = ('Cash_in', 'Depot_bonus', 'Dealer_bonus', 'Agent_bonus', 'Total_payout')
admin.site.register(Bonus, BonusAdmin)

<<<<<<< HEAD
admin.site.register(Stockiest_product)
admin.site.register(Stockiest_invoice)
admin.site.register(Member_product)
admin.site.register(Member_invoice)
=======
>>>>>>> 0bc7fce5e3b35efa3f3170c1f64086e41213d9e6
