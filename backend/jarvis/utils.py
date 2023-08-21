
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


def send_message_to_user(user_id, message):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        user_id,
        {
            'type': 'regular.update',
            'message': message
        },
    )