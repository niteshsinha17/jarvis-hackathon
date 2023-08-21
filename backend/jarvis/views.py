from rest_framework.views import APIView
from jarvis.agents.jarvis import AgentManager
from rest_framework.response import Response


class JarvisView(APIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        username = data.get('username')
        server_messages = data.get('server_messages')
        message = data.get('message')
        fav_songs = data.get('fav_songs')
        call_history = data.get('call_history')
        agent_manager = AgentManager(server_messages, username, fav_songs=fav_songs, call_history=call_history)
        result = agent_manager.generate_response(message)
        return Response(data={
            'reply': result[0],
            'server_messages': result[1]
        })

