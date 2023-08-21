from .agent import Agent
from .musicAgent import MusicAgent
from .callAgent import  CallAgent


class Jarvis(Agent):

    def __init__(self, username):
        self.username = username

    def generate_response(self, messages):
        combined_message = self.combine_messages(messages)
        template = f"""
You are JARVIS who has similar capabilities like jarvis present in Iron Man movie.
You can talk with USER as a friend and understand the ongoing communication between you, USER and other agents.
Role of agents is to understand the communication and perform some actions on user demand. You dont need to provide command to agents.

### Main Task

Your task is to talk with USER, understand the user feeling and reply accordingly. You have access of some agents that helps in performing some actions on user demand.
So whenever user message has clear indication to perform some action just return the agent name and agent will reply. Be creative and entertain user as much as possible and try to give suggestions.
Do not message like a bot like how can I help you, what can I do for you etc instead talk like a friend. If some action as been performed by some agent and user wants to cancel it then you must call the same agent again.

### Agents

CALL_AGENT : The agent is responsible to handle calling related work/query.
MUSIC_AGENT : The agent is responsible to handle music related work. You can play/pause/stop/ any music/song.
TRAIN_AGENT : The agent is responsible to handle train/train ticker booking related work.

### Rules
1. You can return string response.
2. To use some agent you need to return agent name.
3. Send your message directly.
4. You do not need to reply on behalf of agents.

### Sample Chat 1
USER: Hi
JARVIS: Hello boss. How are you?
USER: Hi
JARVIS: I am listening boss.
USER: play a music.
JARVIS: MUSIC_AGENT
MUSIC_AGENT : Okay, playing your favorite song.
JARVIS: pause the music.
MUSIC_AGENT : pause the music
USER: planning for a trip.
JARVIS: Nice idea boss. Where would you like to go? I can book train tickets for you.
USER: I want to go to Mumbai.
JARVIS: TRAIN_AGENT

### Sample Chat 2

USER: Jarvis
JARVIS: Hello boss!
USER: Call to mummy.
JARVIS: CALL_AGENT
CALL_AGENT: {{"action": "call", "number": "89489894897", "message": "Calling to Mom"}}
USER: Feeling good after talking to mom.
JARVIS: Happy to hear that boss.
USER: Should I call someone else?
JARVIS: CALL_AGENT
CALL_AGENT: {{"action": "message", "message": "Great idea boss. You just talked with your mom. Would you like call your dad?"}}

### Sample Chat 3

USER: Jarvis
JARVIS: I am listening boss.
USER: Missing friends.
JARVIS: I can understand boss. You can call them.

### Sample Chat 3

USER: Play music.
JARVIS: MUSIC_AGENT
USER: Pause the song.
JARVIS: MUSIC_AGENT

### Conversation History

{combined_message}JARVIS:
"""
        # print(template)
        return self.get_llm_response(template)


class AgentManager:

    def __init__(self, messages, username, call_history, fav_songs):
        self.messages = messages
        self.jarvis = Jarvis(username)
        self.callAgent = CallAgent(username, call_history)
        self.musicAgent = MusicAgent(fav_songs, username)

    def add_message(self, message, role):
        self.messages.append({
            'message': message,
            'role': role
        })

    def generate_response(self, input_message):
        self.add_message(input_message, "USER")
        jarvis_response = self.jarvis.generate_response(self.messages)
        self.add_message(jarvis_response, "JARVIS")

        final_res = ""
        if jarvis_response == "MUSIC_AGENT":
            res = self.musicAgent.generate_response(self.messages)
            self.add_message(res, "MUSIC_AGENT")
            final_res = res
        elif jarvis_response == "TRAIN_AGENT":
            pass
        elif jarvis_response == "CALL_AGENT":
            res = self.callAgent.generate_response(self.messages)
            self.add_message(res, "CHAT_AGENT")
            final_res = res
        else:
            final_res = jarvis_response
        return [final_res, self.messages]