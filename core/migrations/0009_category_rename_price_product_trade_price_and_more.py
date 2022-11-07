# Generated by Django 4.1.2 on 2022-11-07 06:54

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_product_price_product_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameField(
            model_name='product',
            old_name='price',
            new_name='trade_price',
        ),
        migrations.AddField(
            model_name='product',
            name='code',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='product',
            name='features',
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name='product',
            name='mrp',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='product',
            name='point',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='stock',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('Medical', 'Medical'), ('Non-Medical', 'Non-Medical')], default='Medical', max_length=20),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.category'),
        ),
    ]
