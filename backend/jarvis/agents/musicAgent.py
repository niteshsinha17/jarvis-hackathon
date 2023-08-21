from .agent import Agent
import json
from jarvis.utils import send_message_to_user

song_list = [
            {"id": 1, "name": "Tum Hi Ho", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 2, "name": "Shayad", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 3, "name": "Raabta", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 4, "name": "Tera Ban Jaunga", "singer": "Akhil Sachdeva & Tulsi Kumar", "mood": "Love"},
            {"id": 5, "name": "Tu Hi Yaar Mera", "singer": "Neha Kakkar & Arijit Singh", "mood": "Feel-Good"},
            {"id": 6, "name": "Tu Hi Hai", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 7, "name": "Hawayein", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 8, "name": "Tu Jo Mila", "singer": "Arijit Singh", "mood": "Hopeful"},
            {"id": 9, "name": "Tum Mile", "singer": "Arijit Singh", "mood": "Romantic"},
            {"id": 10, "name": "Main Tera Boyfriend", "singer": "Arijit Singh & Neha Kakkar", "mood": "Upbeat"},
            # {"id": 11, "name": "Tu Hi Hai Aashiqui", "singer": "Arijit Singh & Palak Muchhal", "mood": "Romantic"},
            # {"id": 12, "name": "Jab Tak", "singer": "Arijit Singh", "mood": "Romantic"},
            # {"id": 13, "name": "Pal Pal Dil Ke Paas", "singer": "Arijit Singh & Parampara Thakur", "mood": "Romantic"},
            # {"id": 14, "name": "Agar Tum Saath Ho", "singer": "Arijit Singh & Alka Yagnik", "mood": "Sentimental"},
            # {"id": 15, "name": "Channa Mereya", "singer": "Arijit Singh", "mood": "Emotional"},
            # {"id": 16, "name": "Tu Chahiye", "singer": "Atif Aslam", "mood": "Romantic"},
            # {"id": 17, "name": "Nehu Da Vyah", "singer": "Neha Kakkar & Rohanpreet Singh", "mood": "Celebratory"},
            # {"id": 18, "name": "Tera Hone Laga Hoon", "singer": "Atif Aslam & Alisha Chinai", "mood": "Romantic"},
            # {"id": 19, "name": "Jinke Liye", "singer": "Neha Kakkar & Jaani", "mood": "Heartbreak"},
            # {"id": 20, "name": "Phir Bhi Tumko Chaahunga", "singer": "Arijit Singh", "mood": "Romantic"},
            # {"id": 21, "name": "Bekhayali", "singer": "Sachet Tandon", "mood": "Intense"},
            # {"id": 22, "name": "Tera Ghata", "singer": "Gajendra Verma", "mood": "Heartbreak"},
            # {"id": 23, "name": "Tera Zikr", "singer": "Darshan Raval", "mood": "Romantic"},
            # {"id": 24, "name": "Kya Banogi Meri GF", "singer": "Darshan Raval", "mood": "Playful"},
            # {"id": 25, "name": "Kheech Meri Photo", "singer": "Darshan Raval & Neeti Mohan", "mood": "Flirty"},
            # {"id": 26, "name": "Bhula Dunga", "singer": "Darshan Raval & Sidharth Shukla", "mood": "Heartbreak"},
            # {"id": 27, "name": "Mere Rashke Qamar", "singer": "Nusrat Fateh Ali Khan & Neha Kakkar", "mood": "Sensual"},
            # {"id": 28, "name": "Manali Trance", "singer": "Neha Kakkar & Yo Yo Honey Singh", "mood": "Party"},
            # {"id": 29, "name": "Coca Cola", "singer": "Tony Kakkar & Neha Kakkar", "mood": "Upbeat"},
            # {"id": 30, "name": "Aankh Marey", "singer": "Neha Kakkar", "mood": "Relaxing"}
        ]
song_list_cvs = "id, name, singer, mood\n"

for song in song_list:
    song_list_cvs += f"{song['id']}, {song['name']}, {song['singer']}, {song['mood']}\n"


class MusicAgent(Agent):

    def __init__(self, fav_song_list, username):
        self.fav_song_list = fav_song_list
        self.username = username

    def generate_response(self, messages):
        combined_message = self.combine_messages(messages)
        fav_song_list_csv = "id, name, singer, mood\n"

        for song in self.fav_song_list:
            fav_song_list_csv += f"{song['id']}, {song['name']}, {song['singer']}, {song['mood']}\n"

        template = f"""
You are a MUSIC_AGENT who is very friendly and can understand USER emotions and mood. You need to understand the communication between USER, JARVIS and other agents.
If JARVIS calls you name then you need to give a relpy. but there are some rules you need to follow and there are some actions that you can perform.

### Rules
1. You can only play/pause music if you get a clear instruction from USER.
2. You can only return json response.
3. If you have the list of favorite songs then start playing from it if USER has not specified any song.
4. Do not mention your name in the response.
5. Return only json response as per action.

### Actions
1. To play a song
```json
{{
    "action": "play",
    "song_id": "id",
    "message": "Okay boss. Playing song"
}}
```
2. To pause a song
```json
{{
    "action": "pause",
    "message": "Okay boss. Pausing song"
}}
```
3. To play next song
```json
{{
    "action": "next",
    "message": "Okay boss. Playing next song"
}}
```
4. To play previous song
```json
{{
    "action": "previous",
    "message": "Okay boss. Playing previous song"
}}
```
5. To make song favorite
```json
{{
    "action": "favorite",
    "song_id": "id",
    "message": "Great choice boss. I have added this song to your favorite list"
}}
```
6. To send a message or reply none of the above action needs to be performed.
```json
{{
    "action": "message",
    "message": "message"
}}
```

You can replace message with your own message.

### Songs List
```csv
{song_list_cvs}
```
                
### Favorite Songs List
```csv
{fav_song_list_csv}
```

### Sample Chat
USER: Jarvis
JARVIS: Hi boss. How can I help you?
USER: Play a song
JARVIS: MUSIC_AGENT
MUSIC_AGENT: {{"action": "message", "message": "Romantic one or a sad one?"}}
USER: Romantic one
JARVIS: MUSIC_AGENT
MUSIC_AGENT: {{"action": "play", "song_id": "1", "message": "Okay boss. Playing song"}}

### Reply for this
{combined_message}MUSIC_AGENT:
"""

        res = self.get_llm_response(template)
        print("response from music agent", res)

        res = json.loads(res)
        if res["action"] == "play":
            self.play(res["song_id"])
        elif res["action"] == "pause":
            self.pause()
        elif res["action"] == "next":
            self.playNextSong()
        elif res["action"] == "previous":
            self.playPreviousSong()
        elif res["action"] == "favorite":
            self.fav_song_list.append(res["song_id"])
        else:
            pass
        return res["message"]

    def play(self, song_id):
        print("here", self.username, song_id)
        send_message_to_user(self.username, {
            "action": "play",
            "song_id": song_id,
        })

    def pause(self):
        send_message_to_user(self.username, {
            "action": "pause",
        })

    def playNextSong(self):
        send_message_to_user(self.username, {
            "action": "next_song",
        })

    def playPreviousSong(self):
        send_message_to_user(self.username, {
            "action": "previous_song",
        })