from .agent import Agent

train_list = [
            {"train_number": "12345", "train_name": "Delhi Express", "from": "Delhi", "to": "Mumbai",
             "date": "2023-08-20", "time": "08:00 AM", "status": "on_time", "seats_available": 120},
            {"train_number": "23456", "train_name": "Mumbai Superfast", "from": "Delhi", "to": "Mumbai",
             "date": "2023-08-20", "time": "09:30 AM", "status": "delayed", "seats_available": 90},
            {"train_number": "34567", "train_name": "Rajdhani Express", "from": "Delhi", "to": "Kolkata",
             "date": "2023-08-21", "time": "10:00 AM", "status": "on_time", "seats_available": 150},
            {"train_number": "45678", "train_name": "Jaipur Intercity", "from": "Delhi", "to": "Jaipur",
             "date": "2023-08-21", "time": "10:30 AM", "status": "on_time", "seats_available": 80},
            {"train_number": "56789", "train_name": "Chennai Express", "from": "Delhi", "to": "Chennai",
             "date": "2023-08-22", "time": "11:00 AM", "status": "delayed", "seats_available": 100},
            {"train_number": "67890", "train_name": "Lucknow Shatabdi", "from": "Delhi", "to": "Lucknow",
             "date": "2023-08-22", "time": "12:00 PM", "status": "on_time", "seats_available": 110},
            {"train_number": "78901", "train_name": "Bangalore Express", "from": "Delhi", "to": "Bangalore",
             "date": "2023-08-23", "time": "01:00 PM", "status": "on_time", "seats_available": 130},
            {"train_number": "89012", "train_name": "Kolkata Mail", "from": "Delhi", "to": "Kolkata",
             "date": "2023-08-23", "time": "02:30 PM", "status": "on_time", "seats_available": 160},
            {"train_number": "90123", "train_name": "Mumbai Rajdhani", "from": "Delhi", "to": "Mumbai",
             "date": "2023-08-24", "time": "03:00 PM", "status": "on_time", "seats_available": 140},
            {"train_number": "01234", "train_name": "Varanasi Express", "from": "Delhi", "to": "Varanasi",
             "date": "2023-08-24", "time": "04:30 PM", "status": "delayed", "seats_available": 120},
            {"train_number": "34567", "train_name": "Ahmedabad Superfast", "from": "Delhi", "to": "Ahmedabad",
             "date": "2023-08-25", "time": "05:00 PM", "status": "on_time", "seats_available": 100},
            {"train_number": "45678", "train_name": "Pune Intercity", "from": "Delhi", "to": "Pune",
             "date": "2023-08-25", "time": "06:00 PM", "status": "on_time", "seats_available": 110},
            {"train_number": "56789", "train_name": "Chandigarh Express", "from": "Delhi", "to": "Chandigarh",
             "date": "2023-08-26", "time": "07:00 PM", "status": "delayed", "seats_available": 90},
            {"train_number": "67890", "train_name": "Jaipur Shatabdi", "from": "Delhi", "to": "Jaipur",
             "date": "2023-08-26", "time": "08:30 PM", "status": "on_time", "seats_available": 80},
            {"train_number": "78901", "train_name": "Bangalore Express", "from": "Delhi", "to": "Bangalore",
             "date": "2023-08-27", "time": "09:00 PM", "status": "on_time", "seats_available": 130},
            {"train_number": "89012", "train_name": "Kolkata Mail", "from": "Delhi", "to": "Kolkata",
             "date": "2023-08-27", "time": "10:30 PM", "status": "on_time", "seats_available": 160},
            {"train_number": "90123", "train_name": "Mumbai Rajdhani", "from": "Delhi", "to": "Mumbai",
             "date": "2023-08-28", "time": "11:00 PM", "status": "on_time", "seats_available": 140},
            {"train_number": "01234", "train_name": "Varanasi Express", "from": "Delhi", "to": "Varanasi",
             "date": "2023-08-28", "time": "12:30 AM", "status": "delayed", "seats_available": 120},
            {"train_number": "34567", "train_name": "Ahmedabad Superfast", "from": "Delhi", "to": "Ahmedabad",
             "date": "2023-08-29", "time": "01:00 AM", "status": "on_time", "seats_available": 100},
            {"train_number": "45678", "train_name": "Pune Intercity", "from": "Delhi", "to": "Pune",
             "date": "2023-08-29", "time": "02:30 AM", "status": "on_time", "seats_available": 110},
            {"train_number": "56789", "train_name": "Chandigarh Express", "from": "Delhi", "to": "Chandigarh",
             "date": "2023-08-30", "time": "03:00 AM", "status": "delayed", "seats_available": 90},
            {"train_number": "67890", "train_name": "Jaipur Shatabdi", "from": "Delhi", "to": "Jaipur",
             "date": "2023-08-30", "time": "04:30 AM", "status": "on_time", "seats_available": 80},
            {"train_number": "78901", "train_name": "Bangalore Express", "from": "Delhi", "to": "Bangalore",
             "date": "2023-08-31", "time": "05:00 AM", "status": "on_time", "seats_available": 130},
            {"train_number": "89012", "train_name": "Kolkata Mail", "from": "Delhi", "to": "Kolkata",
             "date": "2023-08-31", "time": "06:30 AM", "status": "on_time", "seats_available": 160},
            {"train_number": "90123", "train_name": "Mumbai Rajdhani", "from": "Delhi", "to": "Mumbai",
             "date": "2023-09-01", "time": "07:00 AM", "status": "on_time", "seats_available": 140},
            {"train_number": "01234", "train_name": "Varanasi Express", "from": "Delhi", "to": "Varanasi",
             "date": "2023-09-01", "time": "08:30 AM", "status": "delayed", "seats_available": 120},
            {"train_number": "34567", "train_name": "Ahmedabad Superfast", "from": "Delhi", "to": "Ahmedabad",
             "date": "2023-09-02", "time": "09:00 AM", "status": "on_time", "seats_available": 100},
            {"train_number": "45678", "train_name": "Pune Intercity", "from": "Delhi", "to": "Pune",
             "date": "2023-09-02", "time": "10:30 AM", "status": "on_time", "seats_available": 110},
            {"train_number": "56789", "train_name": "Chandigarh Express", "from": "Delhi", "to": "Chandigarh",
             "date": "2023-09-03", "time": "11:00 AM", "status": "delayed", "seats_available": 90},
            {"train_number": "67890", "train_name": "Jaipur Shatabdi", "from": "Delhi", "to": "Jaipur",
             "date": "2023-09-03", "time": "12:00 PM", "status": "on_time", "seats_available": 80},
            {"train_number": "78901", "train_name": "Bangalore Express", "from": "Delhi", "to": "Bangalore",
             "date": "2023-09-04", "time": "01:00 PM", "status": "on_time", "seats_available": 130},
            {"train_number": "89012", "train_name": "Kolkata Mail", "from": "Delhi", "to": "Kolkata",
             "date": "2023-09-04", "time": "02:30 PM", "status": "on_time", "seats_available": 160},
            {"train_number": "90123", "train_name": "Mumbai Rajdhani", "from": "Delhi", "to": "Mumbai",
             "date": "2023-09-05", "time": "03:00 PM", "status": "on_time", "seats_available": 140},
        ]

train_list_table = "| Train Number | Train Name | From | To | Date | Time | Status | Seats available |\n" \

for train in train_list:
    train_list_table += f'| {train["train_number"]} | {train["train_name"]} | {train["from"]} | {train["to"]} | {train["date"]} | {train["time"]} | {train["status"]} | {train["seats_available"]} |\n'


class TrainAgent(Agent):

    def __init__(self, booking_history, username):
        self.booking_history = booking_history
        self.username = username
        self.locations_list = self.get_locations()
        self.booking_history_table = ""
        self.locations_csv = ""

        for location in self.locations_list:
            self.locations_csv += location + "\n"

        for booking in self.booking_history:
            self.booking_history_table += f'| {booking["train_number"]} | {booking["train_name"]} | {booking["from"]} | {booking["to"]} | {booking["date"]} | {booking["time"]} | {booking["status"]} | {booking["seats_available"]} |\n'

    @classmethod
    def get_locations(cls):
        return [
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Chennai",
            "Kolkata",
            "Hyderabad",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Lucknow",
            "Chandigarh",
            "Kochi",
            "Goa",
            "Varanasi",
            "Agra"
        ]


    def generate_response(self, messages):
        conversation = self.combine_messages(messages)
        template = f"""
You are a TRAIN_AGENT who is very friendly and can help user in booking train ticket. You need to understand the communication between USER, JARVIS and other agents.
If JARVIS calls you name then you need to give a relpy. but there are some rules you need to follow and there are some actions that you can perform.

### Rules
1. You can only book train ticket only when you have clear information in which train you have to book ticket.
2. You can only book a train only if tickets are available.
3. You must give suggestions while booking a train ticket.
4. You must return a json response according to actions.
5. You can only perform actions that are mentioned below.


### Actions
1. To book a train ticket return
```json
{{
    "action": "book_ticket",
    "id": "generate a unique id for all train booking",
    "train_number": "12345",
    "date": "12-12-2019",
    "from": "Delhi",
    "to": "Mumbai",
    "class": "sleeper",
    "quota": "general",
    "passengers":[
        {{
            name: "Rahul",
        }}
    ]
}}
```

2. To stop a train booking process return
```json
{{
    "action": "stop_booking",
    "id": "unique id of train booking"
}}
```

You can stop a train booking process only if its booking status is pending.

3. To get train status return
```json
{{
    "action": "train_status",
    "id": "unique id of train booking"
}}

```

4. To get train list return
```json
{{
    "action": "train_list",
    "id": "unique id of train booking"
    "from": "Delhi",
    "to": "Mumbai",
    "date": "12-12-2019"
}}

If you do not have train list to answer the query then you can return this action.

```
5. To send a message or query return
```json
{{
    "action": "send_message",
    "message": "Boss! Will you go alone?"
}}
```

### Jarvis will provide you following information so that you can perform your actions.
1. Last train booking history with their status.
2. User's current location 
3. User name
4. Train list if you have sent train_list action in last message.


### Jarvis data:
    ## Train List

    | Train Number | Train Name | From | To | Date | Time | Status | Seats available |
    {train_list_table}

    ## Booking History

    | Train Number | Train Name | From | To | Date | Time | Status | Booking Id |
    {self.booking_history_table}
    
    ## User's current location
    Delhi
    
    ## User's name
    Tony
    

### Sample Chat 1
USER: Hi
JARVIS: Hi, boss.
USER: Book a train ticket from Delhi to Mumbai.
JARVIS: TRAIN_AGENT
TRAIN_AGENT: {{"action": "train_list", "from": "Delhi", "to": "Mumbai", "date": "12-12-2019"}}
TRAIN_AGENT: {{"action": "message", "message": "These are the list of train available...."}}
USER: Book in second one
TRAIN_AGENT: {{"action": "book_ticket", "id": "12345", "train_number": "12345", "date": "12-12-2019", "from": "Delhi", "to": "Mumbai", "class": "sleeper", "quota": "general", passenger:[{{name: "Rahul"}}]}}
TRAIN_AGENT: {{"action": "message", "message": "Ticket booked successfully."}}

### Sample Chat 2
USER: Hi
JARVIS: Hi, boss.
USER: Book a train ticket.
JARVIS: TRAIN_AGENT
TRAIN_AGENT: {{"action": "message", "message": "Boss! Where do you want to go?"}}
USER: Delhi to Mumbai. I wont go. I will send my friend.
JARVIS: TRAIN_AGENT
TRAIN_AGENT: {{"action": "message", "message": "okay, please confirm location and friends name."}}

### Return response on the basic of following conversation.

{conversation}TRAIN_AGENT:
"""
        res = self.get_llm_response(template)