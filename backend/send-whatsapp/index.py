import json
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Генерация ссылки для отправки сообщения в WhatsApp
    Args: event - dict with httpMethod, body (name, phone, company, message, equipment)
          context - object with request_id, function_name
    Returns: HTTP response dict с WhatsApp URL
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    company = body_data.get('company', '')
    message = body_data.get('message', '')
    equipment = body_data.get('equipment', '')
    
    whatsapp_phone = '79202243445'
    
    text_parts = ['Здравствуйте! Новая заявка с сайта ФЕНИКС:\n']
    
    if equipment:
        text_parts.append(f'🔧 Оборудование: {equipment}\n')
    
    text_parts.append(f'👤 Имя: {name}')
    
    if company:
        text_parts.append(f'🏢 Компания: {company}')
    
    text_parts.append(f'📞 Телефон: {phone}')
    
    if message:
        text_parts.append(f'💬 Сообщение: {message}')
    
    text = '\n'.join(text_parts)
    encoded_text = urllib.parse.quote(text)
    
    whatsapp_url = f'https://wa.me/{whatsapp_phone}?text={encoded_text}'
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'whatsappUrl': whatsapp_url}),
        'isBase64Encoded': False
    }
