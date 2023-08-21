from .agent import Agent
import json
import datetime as dt
from jarvis.utils import send_message_to_user

contact_list = [
            {
                "name": "Mom",
                "number": "123-456-7890",
                "place": "Home",
                "relation": "Mother"
            },
            {
                "name": "Dad",
                "number": "987-654-3210",
                "place": "Home",
                "relation": "Father"
            },
            {
                "name": "Brother",
                "number": "555-123-4567",
                "place": "City",
                "relation": "Brother"
            },
            {
                "name": "Alice Johnson",
                "number": "555-555-1234",
                "place": "Suburb",
                "relation": "Friend"
            },
            {
                "name": "John Smith",
                "number": "555-789-1234",
                "place": "City",
                "relation": "Colleague"
            },
            {
                "name": "Emily White",
                "number": "555-987-6543",
                "place": "Town",
                "relation": "Friend"
            },
            {
                "name": "Grandma",
                "number": "555-222-3333",
                "place": "Countryside",
                "relation": "Grandmother"
            },
            {
                "name": "Alex Davis",
                "number": "555-444-5555",
                "place": "City",
                "relation": "Classmate"
            },
            {
                "name": "Aunt Mary",
                "number": "555-666-7777",
                "place": "City",
                "relation": "Aunt"
            },
            {
                "name": "Best Pizza Place",
                "number": "555-123-9876",
                "place": "City",
                "relation": "Restaurant"
            },
            {
                "name": "Boss",
                "number": "555-888-9999",
                "place": "Office",
                "relation": "Supervisor"
            },
            {
                "name": "Janet Green",
                "number": "555-789-4567",
                "place": "City",
                "relation": "Neighbor"
            },
            {
                "name": "Doctor Smith",
                "number": "555-111-2222",
                "place": "Hospital",
                "relation": "Medical"
            },
            {
                "name": "Emergency Services",
                "number": "911",
                "place": "City",
                "relation": "Urgent"
            },
            {
                "name": "Best Coffee Shop",
                "number": "555-222-4444",
                "place": "City",
                "relation": "Cafe"
            },
            {
                "name": "Sarah Miller",
                "number": "555-333-4444",
                "place": "City",
                "relation": "Friend"
            },
            {
                "name": "Best Chinese Restaurant",
                "number": "555-444-5555",
                "place": "City",
                "relation": "Restaurant"
            },
            {
                "name": "Best Italian Restaurant",
                "number": "555-555-6666",
                "place": "City",
                "relation": "Restaurant"
            },
            {
                "name": "Best Mexican Restaurant",
                "number": "555-666-7777",
                "place": "City",
                "relation": "Restaurant"
            },
            {
                "name": "Best Sushi Restaurant",
                "number": "555-777-8888",
                "place": "City",
                "relation": "Restaurant"
            },
            {
                "name": "Best Thai Restaurant",
                "number": "555-888-9999",
                "place": "City",
                "relation": "Restaurant"
            },
        ]

contact_csv = "S.No, Name, Number, Place, Relation\n"
for i, contact in enumerate(contact_list):
    contact_csv += "{},{},{},{},{}\n".format(i+1, contact["name"], contact["number"], contact["place"], contact["relation"])


class CallAgent(Agent):

    def __init__(self, username, call_history):
        self.call_history = call_history
        self.username = username

    def generate_response(self, messages):
        conversation = self.combine_messages(messages)
        call_history = "" if len(self.call_history) > 0 else "No call history\n"
        for call in self.call_history:
            call_history += "Number: {}, Time: {}\n".format(call["number"], call["time"])

        template = f""" 
You are a CALL_AGENT who is very friendly and can understand user feeling and can talk with USER as a friend.
You need to generate a response after understand the ongoing communication between you, USER, JARVIS and other agents.
If JARVIS calls your name then you need to give a relpy. but there are some rules you need to follow and there are some actions that you can perform.

### Rules
1. Understand the current state of the conversation then reply.
1. Do not call anyone until you find a clear instruction from the conversation.
2. You can only call someone from your contact list. If you do not have person name in contact list then ask user to provide number.
3. You can only one person at a time.
4. You can only return json response.
5. You can only perform cut action if you having initialed the call.

### Actions
1. To make a call return:
```json
{{
"action": "call",
  "number": "123-456-7890",
  "message": Calling to user_name
}}
```
2. To send a reply message return:
```json
{{
  "action": "message",
  "message": "To whom you would like to talk?"
}}
```
Return this action if you are not sure about the user name. You can replace message with your own message.

3. To cut the call return:
```json
{{
  "action": "cut",
  "message": "Cutting the call"
}}
```

### Contact List csv
```csv
{contact_csv}
```

### Call History
{call_history}

### Sample Chat 1
USER: Jarvis
JARVIS: Hello boss! How can I assist you today? Is there anything specific you'd like to do or talk about?
USER: Call to mummy.
JARVIS: CALL_AGENT
CALL_AGENT: {{"action": "call", "number": "89489894897", "message": "Calling to Mom"}}
USER: Feeling good after talking to mom.
JARVIS: Happy to hear that boss.
USER: Should I call someone else?
JARVIS: CALL_AGENT
CALL_AGENT: {{"action": "message", "message": "Great idea boss. You just talked with your mom. Would you like call your dad?"}}


### Reply for this
{conversation}CALL_AGENT:
"""
        res = self.get_llm_response(template)
        print("generated response CALL", res)
        res = json.loads(res)
        msg = res["message"]
        action = res["action"]

        if action == "call":
            self.call_to_number(res["number"])
        elif action == "cut":
            self.cut_call()
        return msg

    def call_to_number(self, number):
        send_message_to_user(self.username,{
            'action': 'call',
            'number': number,
        })

    def cut_call(self):
        send_message_to_user(self.username, {
            'action': 'cut',
        })