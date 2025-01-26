import requests


def send_message_to_telegram(order_info):
    bot_token = '7596705272:AAEMTxUss6MarU3qpSXUyM8DTOiGdmhXtOc'
    chat_id = '-1002335074227'
    message = f"Новый заказ:\n\nИмя: {order_info['name']}\nТелефон: {order_info['phone']}\nИмя компании: {order_info['company_name']}\nПочта: {order_info['email']}\nПродукт: {order_info['product_name']}"

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message,
    }

    response = requests.post(url, json=payload)
