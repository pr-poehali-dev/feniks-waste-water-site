import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка email уведомлений о новых заявках
    Args: event - dict with httpMethod, body (name, email, phone, company, message, equipment)
          context - object with request_id, function_name
    Returns: HTTP response dict
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
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    company = body_data.get('company', '')
    message = body_data.get('message', '')
    equipment = body_data.get('equipment', '')
    
    email_user = os.environ.get('EMAIL_USER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    
    if not email_user or not email_password:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email credentials not configured'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта ФЕНИКС{" - " + equipment if equipment else ""}'
    msg['From'] = email_user
    msg['To'] = email_user
    
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Новая заявка с сайта
          </h2>
          
          {f'<p style="background: #f0f8ff; padding: 10px; border-radius: 5px;"><strong>Оборудование:</strong> {equipment}</p>' if equipment else ''}
          
          <div style="margin: 20px 0;">
            <p><strong>Имя:</strong> {name}</p>
            {f'<p><strong>Компания:</strong> {company}</p>' if company else ''}
            <p><strong>Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
            {f'<p><strong>Сообщение:</strong><br>{message}</p>' if message else ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              Заявка отправлена автоматически с сайта feniks-water.ru
            </p>
          </div>
        </div>
      </body>
    </html>
    '''
    
    html_part = MIMEText(html_content, 'html', 'utf-8')
    msg.attach(html_part)
    
    smtp_server = 'smtp.mail.ru'
    smtp_port = 465
    
    server = smtplib.SMTP_SSL(smtp_server, smtp_port)
    server.login(email_user, email_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Email sent successfully'}),
        'isBase64Encoded': False
    }
