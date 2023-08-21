from django.urls import re_path
from jarvis.consumers import JarvisConsumer

websocket_urlpatterns = [
    re_path(r'ws/jarvis/(?P<userId>\w+)/$', JarvisConsumer.as_asgi()),
]