from django.contrib import admin
from .models import Product, Category, Fund, Fund_transfer, Sales, Withdraw, Bonus
# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
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
class BonusAdmin(admin.ModelAdmin):
    list_display = ('Cash_in', 'Depot_bonus', 'Dealer_bonus', 'Agent_bonus', 'Total_payout')
admin.site.register(Bonus, BonusAdmin)
