# app/auth/utils.py
import pyotp
from flask import session

def generate_otp():
    # Generate OTP with a time-based algorithm (valid for 5 mins)
    totp = pyotp.TOTP('base32secret3232', interval=300)
    otp = totp.now()
    session['otp'] = otp
    return otp

def verify_otp(user_input):
    totp = pyotp.TOTP('base32secret3232', interval=300)
    return totp.verify(user_input)
