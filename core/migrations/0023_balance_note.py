# Generated by Django 4.1.2 on 2023-01-20 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0022_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='balance',
            name='note',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
