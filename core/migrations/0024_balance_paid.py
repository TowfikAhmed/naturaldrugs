# Generated by Django 4.1.2 on 2023-01-20 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0023_balance_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='balance',
            name='paid',
            field=models.BooleanField(default=False),
        ),
    ]