# Generated by Django 4.1.2 on 2023-01-31 18:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0032_flushout_carryforward'),
    ]

    operations = [
        migrations.AddField(
            model_name='member_invoice',
            name='stockiest',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='stockiest_seller', to='core.member'),
        ),
        migrations.AddField(
            model_name='member_product',
            name='stockiest',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='stockiest', to='core.member'),
        ),
    ]
