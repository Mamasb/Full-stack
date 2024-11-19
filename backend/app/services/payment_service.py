# app/services/payment_service.py
import requests
from flask import url_for, redirect

FLUTTERWAVE_SECRET_KEY = "your_flutterwave_secret_key"

def initialize_payment(amount, currency="NGN"):
    url = "https://api.flutterwave.com/v3/payments"
    headers = {
        "Authorization": f"Bearer {FLUTTERWAVE_SECRET_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "tx_ref": "unique_transaction_reference",
        "amount": amount,
        "currency": currency,
        "redirect_url": url_for("auth.confirm_payment", _external=True),
        "customer": {
            "email": "user_email@example.com",
            "phonenumber": "user_phone",
            "name": "user_name"
        }
    }
    response = requests.post(url, headers=headers, json=payload)
    return response.json()
