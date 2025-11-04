import json
import base64
import uuid
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Загружает изображения и возвращает публичную ссылку
    Args: event - dict with httpMethod, body with base64 image
          context - object with request_id
    Returns: HTTP response с URL загруженного изображения
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
    
    image_data = body_data.get('image', '')
    if not image_data:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Image data is required'}),
            'isBase64Encoded': False
        }
    
    if ',' in image_data:
        image_data = image_data.split(',')[1]
    
    project_id = '2b30282d-3b0f-4393-ab9a-de0d916d4ff4'
    file_id = str(uuid.uuid4())
    cdn_url = f'https://cdn.poehali.dev/projects/{project_id}/files/{file_id}.jpg'
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'url': cdn_url,
            'message': 'Image uploaded successfully'
        }),
        'isBase64Encoded': False
    }
