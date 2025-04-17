import requests
import os

def send_message_to_telegram(order_info):
    BOT_ID = os.getenv("BOT_ID")
    CHAT_ID = os.getenv("CHAT_ID")

    bot_token = BOT_ID
    chat_id = CHAT_ID
    message = f"Новый заказ:\n\nИмя: {order_info['name']}\nТелефон: {order_info['phone']}\nИмя компании: {order_info['company_name']}\nПочта: {order_info['email']}\nПродукт: {order_info['product_name']}"

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message,
    }

    response = requests.post(url, json=payload)
