import json

from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync


class JarvisConsumer(WebsocketConsumer):
    def websocket_connect(self, event):
        self.userId = self.scope["url_route"]["kwargs"]["userId"]
        async_to_sync(self.channel_layer.group_add)(
            self.userId,
            self.channel_name,
        )
        self.accept()

    def receive(self, text_data):
        pass

    def regular_update(self, event):
        message = event['message']
        self.send(text_data=json.dumps({'message': message}))

