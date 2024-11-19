# app/services/notification_service.py
import smtplib
from twilio.rest import Client

def send_email(recipient, subject, body):
    smtp_server = smtplib.SMTP("smtp.mailtrap.io", 587)
    smtp_server.login("username", "password")
    message = f"Subject: {subject}\n\n{body}"
    smtp_server.sendmail("from_email@example.com", recipient, message)
    smtp_server.quit()

def send_sms(phone_number, message):
    client = Client("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN")
    client.messages.create(
        body=message,
        from_="Your Twilio Number",
        to=phone_number
    )
