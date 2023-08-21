import GenericAccordion from "./containers/accordion ";
import CallWrapper from "./containers/callWidget";
import ChatView from "./containers/chatView";
import InputBox from "./containers/inputBox";
import MessageList from "./containers/msgList";
import JarvisContextProvider from "./context/jarvis.context";
import JarvicSocket from "./websockets/jarvis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Song1 from "./static/songs/1.mp3";
import Song2 from "./static/songs/2.mp3";
import Song3 from "./static/songs/3.mp3";
import Song4 from "./static/songs/4.mp3";
import Song5 from "./static/songs/5.mp3";
import Song6 from "./static/songs/6.mp3";
import Song7 from "./static/songs/7.mp3";
import Song8 from "./static/songs/8.mp3";
import Song9 from "./static/songs/9.mp3";
import Song10 from "./static/songs/10.mp3";
import SongWidget from "./containers/songWidget";

export const contacts = [
  {
    name: "Mom",
    number: "123-456-7890",
    place: "Home",
    relation: "Mother",
  },
  {
    name: "Dad",
    number: "987-654-3210",
    place: "Home",
    relation: "Father",
  },
  {
    name: "Brother",
    number: "555-123-4567",
    place: "City",
    relation: "Brother",
  },
  {
    name: "Alice Johnson",
    number: "555-555-1234",
    place: "Suburb",
    relation: "Friend",
  },
  {
    name: "John Smith",
    number: "555-789-1234",
    place: "City",
    relation: "Colleague",
  },
  {
    name: "Emily White",
    number: "555-987-6543",
    place: "Town",
    relation: "Friend",
  },
  {
    name: "Grandma",
    number: "555-222-3333",
    place: "Countryside",
    relation: "Grandmother",
  },
  {
    name: "Alex Davis",
    number: "555-444-5555",
    place: "City",
    relation: "Classmate",
  },
  {
    name: "Aunt Mary",
    number: "555-666-7777",
    place: "City",
    relation: "Aunt",
  },
  {
    name: "Best Pizza Place",
    number: "555-123-9876",
    place: "City",
    relation: "Restaurant",
  },
  {
    name: "Boss",
    number: "555-888-9999",
    place: "Office",
    relation: "Supervisor",
  },
  {
    name: "Janet Green",
    number: "555-789-4567",
    place: "City",
    relation: "Neighbor",
  },
  {
    name: "Doctor Smith",
    number: "555-111-2222",
    place: "Hospital",
    relation: "Medical",
  },
  {
    name: "Emergency Services",
    number: "911",
    place: "City",
    relation: "Urgent",
  },
  {
    name: "Best Coffee Shop",
    number: "555-222-4444",
    place: "City",
    relation: "Cafe",
  },
  {
    name: "Sarah Miller",
    number: "555-333-4444",
    place: "City",
    relation: "Friend",
  },
  {
    name: "Best Chinese Restaurant",
    number: "555-444-5555",
    place: "City",
    relation: "Restaurant",
  },
  {
    name: "Best Italian Restaurant",
    number: "555-555-6666",
    place: "City",
    relation: "Restaurant",
  },
  {
    name: "Best Mexican Restaurant",
    number: "555-666-7777",
    place: "City",
    relation: "Restaurant",
  },
  {
    name: "Best Sushi Restaurant",
    number: "555-777-8888",
    place: "City",
    relation: "Restaurant",
  },
  {
    name: "Best Thai Restaurant",
    number: "555-888-9999",
    place: "City",
    relation: "Restaurant",
  },
];

export const slongList = [
  {
    id: 1,
    name: "Tum Hi Ho",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song1,
  },
  {
    id: 2,
    name: "Shayad",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song2,
  },
  {
    id: 3,
    name: "Raabta",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song3,
  },
  {
    id: 4,
    name: "Tera Ban Jaunga",
    singer: "Akhil Sachdeva & Tulsi Kumar",
    mood: "Love",
    song: Song4,
  },
  {
    id: 5,
    name: "Tu Hi Yaar Mera",
    singer: "Neha Kakkar & Arijit Singh",
    mood: "Feel-Good",
    song: Song5,
  },
  {
    id: 6,
    name: "Tu Hi Hai",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song6,
  },
  {
    id: 7,
    name: "Hawayein",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song7,
  },
  {
    id: 8,
    name: "Tu Jo Mila",
    singer: "Arijit Singh",
    mood: "Hopeful",
    song: Song8,
  },
  {
    id: 9,
    name: "Tum Mile",
    singer: "Arijit Singh",
    mood: "Romantic",
    song: Song9,
  },
  {
    id: 10,
    name: "Main Tera Boyfriend",
    singer: "Arijit Singh & Neha Kakkar",
    mood: "Upbeat",
    song: Song10,
  },
  // {
  //   id: 11,
  //   name: "Tu Hi Hai Aashiqui",
  //   singer: "Arijit Singh & Palak Muchhal",
  //   mood: "Romantic",
  // },
  // { id: 12, name: "Jab Tak", singer: "Arijit Singh", mood: "Romantic" },
  // {
  //   id: 13,
  //   name: "Pal Pal Dil Ke Paas",
  //   singer: "Arijit Singh & Parampara Thakur",
  //   mood: "Romantic",
  // },
  // {
  //   id: 14,
  //   name: "Agar Tum Saath Ho",
  //   singer: "Arijit Singh & Alka Yagnik",
  //   mood: "Sentimental",
  // },
  // { id: 15, name: "Channa Mereya", singer: "Arijit Singh", mood: "Emotional" },
  // { id: 16, name: "Tu Chahiye", singer: "Atif Aslam", mood: "Romantic" },
  // {
  //   id: 17,
  //   name: "Nehu Da Vyah",
  //   singer: "Neha Kakkar & Rohanpreet Singh",
  //   mood: "Celebratory",
  // },
  // {
  //   id: 18,
  //   name: "Tera Hone Laga Hoon",
  //   singer: "Atif Aslam & Alisha Chinai",
  //   mood: "Romantic",
  // },
  // {
  //   id: 19,
  //   name: "Jinke Liye",
  //   singer: "Neha Kakkar & Jaani",
  //   mood: "Heartbreak",
  // },
  // {
  //   id: 20,
  //   name: "Phir Bhi Tumko Chaahunga",
  //   singer: "Arijit Singh",
  //   mood: "Romantic",
  // },
  // { id: 21, name: "Bekhayali", singer: "Sachet Tandon", mood: "Intense" },
  // { id: 22, name: "Tera Ghata", singer: "Gajendra Verma", mood: "Heartbreak" },
  // { id: 23, name: "Tera Zikr", singer: "Darshan Raval", mood: "Romantic" },
  // {
  //   id: 24,
  //   name: "Kya Banogi Meri GF",
  //   singer: "Darshan Raval",
  //   mood: "Playful",
  // },
  // {
  //   id: 25,
  //   name: "Kheech Meri Photo",
  //   singer: "Darshan Raval & Neeti Mohan",
  //   mood: "Flirty",
  // },
  // {
  //   id: 26,
  //   name: "Bhula Dunga",
  //   singer: "Darshan Raval & Sidharth Shukla",
  //   mood: "Heartbreak",
  // },
  // {
  //   id: 27,
  //   name: "Mere Rashke Qamar",
  //   singer: "Nusrat Fateh Ali Khan & Neha Kakkar",
  //   mood: "Sensual",
  // },
  // {
  //   id: 28,
  //   name: "Manali Trance",
  //   singer: "Neha Kakkar & Yo Yo Honey Singh",
  //   mood: "Party",
  // },
  // {
  //   id: 29,
  //   name: "Coca Cola",
  //   singer: "Tony Kakkar & Neha Kakkar",
  //   mood: "Upbeat",
  // },
  // { id: 30, name: "Aankh Marey", singer: "Neha Kakkar", mood: "Relaxing" },
];

const trainList = [
  {
    train_number: "12345",
    train_name: "Delhi Express",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-08-20",
    time: "08:00 AM",
    status: "on_time",
    seats_available: 120,
  },
  {
    train_number: "23456",
    train_name: "Mumbai Superfast",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-08-20",
    time: "09:30 AM",
    status: "delayed",
    seats_available: 90,
  },
  {
    train_number: "34567",
    train_name: "Rajdhani Express",
    from: "Delhi",
    to: "Kolkata",
    date: "2023-08-21",
    time: "10:00 AM",
    status: "on_time",
    seats_available: 150,
  },
  {
    train_number: "45678",
    train_name: "Jaipur Intercity",
    from: "Delhi",
    to: "Jaipur",
    date: "2023-08-21",
    time: "10:30 AM",
    status: "on_time",
    seats_available: 80,
  },
  {
    train_number: "56789",
    train_name: "Chennai Express",
    from: "Delhi",
    to: "Chennai",
    date: "2023-08-22",
    time: "11:00 AM",
    status: "delayed",
    seats_available: 100,
  },
  {
    train_number: "67890",
    train_name: "Lucknow Shatabdi",
    from: "Delhi",
    to: "Lucknow",
    date: "2023-08-22",
    time: "12:00 PM",
    status: "on_time",
    seats_available: 110,
  },
  {
    train_number: "78901",
    train_name: "Bangalore Express",
    from: "Delhi",
    to: "Bangalore",
    date: "2023-08-23",
    time: "01:00 PM",
    status: "on_time",
    seats_available: 130,
  },
  {
    train_number: "89012",
    train_name: "Kolkata Mail",
    from: "Delhi",
    to: "Kolkata",
    date: "2023-08-23",
    time: "02:30 PM",
    status: "on_time",
    seats_available: 160,
  },
  {
    train_number: "90123",
    train_name: "Mumbai Rajdhani",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-08-24",
    time: "03:00 PM",
    status: "on_time",
    seats_available: 140,
  },
  {
    train_number: "01234",
    train_name: "Varanasi Express",
    from: "Delhi",
    to: "Varanasi",
    date: "2023-08-24",
    time: "04:30 PM",
    status: "delayed",
    seats_available: 120,
  },
  {
    train_number: "34567",
    train_name: "Ahmedabad Superfast",
    from: "Delhi",
    to: "Ahmedabad",
    date: "2023-08-25",
    time: "05:00 PM",
    status: "on_time",
    seats_available: 100,
  },
  {
    train_number: "45678",
    train_name: "Pune Intercity",
    from: "Delhi",
    to: "Pune",
    date: "2023-08-25",
    time: "06:00 PM",
    status: "on_time",
    seats_available: 110,
  },
  {
    train_number: "56789",
    train_name: "Chandigarh Express",
    from: "Delhi",
    to: "Chandigarh",
    date: "2023-08-26",
    time: "07:00 PM",
    status: "delayed",
    seats_available: 90,
  },
  {
    train_number: "67890",
    train_name: "Jaipur Shatabdi",
    from: "Delhi",
    to: "Jaipur",
    date: "2023-08-26",
    time: "08:30 PM",
    status: "on_time",
    seats_available: 80,
  },
  {
    train_number: "78901",
    train_name: "Bangalore Express",
    from: "Delhi",
    to: "Bangalore",
    date: "2023-08-27",
    time: "09:00 PM",
    status: "on_time",
    seats_available: 130,
  },
  {
    train_number: "89012",
    train_name: "Kolkata Mail",
    from: "Delhi",
    to: "Kolkata",
    date: "2023-08-27",
    time: "10:30 PM",
    status: "on_time",
    seats_available: 160,
  },
  {
    train_number: "90123",
    train_name: "Mumbai Rajdhani",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-08-28",
    time: "11:00 PM",
    status: "on_time",
    seats_available: 140,
  },
  {
    train_number: "01234",
    train_name: "Varanasi Express",
    from: "Delhi",
    to: "Varanasi",
    date: "2023-08-28",
    time: "12:30 AM",
    status: "delayed",
    seats_available: 120,
  },
  {
    train_number: "34567",
    train_name: "Ahmedabad Superfast",
    from: "Delhi",
    to: "Ahmedabad",
    date: "2023-08-29",
    time: "01:00 AM",
    status: "on_time",
    seats_available: 100,
  },
  {
    train_number: "45678",
    train_name: "Pune Intercity",
    from: "Delhi",
    to: "Pune",
    date: "2023-08-29",
    time: "02:30 AM",
    status: "on_time",
    seats_available: 110,
  },
  {
    train_number: "56789",
    train_name: "Chandigarh Express",
    from: "Delhi",
    to: "Chandigarh",
    date: "2023-08-30",
    time: "03:00 AM",
    status: "delayed",
    seats_available: 90,
  },
  {
    train_number: "67890",
    train_name: "Jaipur Shatabdi",
    from: "Delhi",
    to: "Jaipur",
    date: "2023-08-30",
    time: "04:30 AM",
    status: "on_time",
    seats_available: 80,
  },
  {
    train_number: "78901",
    train_name: "Bangalore Express",
    from: "Delhi",
    to: "Bangalore",
    date: "2023-08-31",
    time: "05:00 AM",
    status: "on_time",
    seats_available: 130,
  },
  {
    train_number: "89012",
    train_name: "Kolkata Mail",
    from: "Delhi",
    to: "Kolkata",
    date: "2023-08-31",
    time: "06:30 AM",
    status: "on_time",
    seats_available: 160,
  },
  {
    train_number: "90123",
    train_name: "Mumbai Rajdhani",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-09-01",
    time: "07:00 AM",
    status: "on_time",
    seats_available: 140,
  },
  {
    train_number: "01234",
    train_name: "Varanasi Express",
    from: "Delhi",
    to: "Varanasi",
    date: "2023-09-01",
    time: "08:30 AM",
    status: "delayed",
    seats_available: 120,
  },
  {
    train_number: "34567",
    train_name: "Ahmedabad Superfast",
    from: "Delhi",
    to: "Ahmedabad",
    date: "2023-09-02",
    time: "09:00 AM",
    status: "on_time",
    seats_available: 100,
  },
  {
    train_number: "45678",
    train_name: "Pune Intercity",
    from: "Delhi",
    to: "Pune",
    date: "2023-09-02",
    time: "10:30 AM",
    status: "on_time",
    seats_available: 110,
  },
  {
    train_number: "56789",
    train_name: "Chandigarh Express",
    from: "Delhi",
    to: "Chandigarh",
    date: "2023-09-03",
    time: "11:00 AM",
    status: "delayed",
    seats_available: 90,
  },
  {
    train_number: "67890",
    train_name: "Jaipur Shatabdi",
    from: "Delhi",
    to: "Jaipur",
    date: "2023-09-03",
    time: "12:00 PM",
    status: "on_time",
    seats_available: 80,
  },
  {
    train_number: "78901",
    train_name: "Bangalore Express",
    from: "Delhi",
    to: "Bangalore",
    date: "2023-09-04",
    time: "01:00 PM",
    status: "on_time",
    seats_available: 130,
  },
  {
    train_number: "89012",
    train_name: "Kolkata Mail",
    from: "Delhi",
    to: "Kolkata",
    date: "2023-09-04",
    time: "02:30 PM",
    status: "on_time",
    seats_available: 160,
  },
  {
    train_number: "90123",
    train_name: "Mumbai Rajdhani",
    from: "Delhi",
    to: "Mumbai",
    date: "2023-09-05",
    time: "03:00 PM",
    status: "on_time",
    seats_available: 140,
  },
];

function App() {
  return (
    <JarvisContextProvider>
      <div className="h-full flex bg-[#1e1f22]">
        <div className="w-4/12 overflow-auto p-1">
          <div className="mb-2 p-4 px-4 bg-[#383a40] font-medium text-lg text-white drop-shadow-sm">
            Dataset Used
          </div>
          <GenericAccordion title="Contact List">
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div className="" key={index}>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        {contact.name}
                      </div>
                      <div className="text-xs flex gap-2 font-light text-gray-400 flex-wrap">
                        <span>Relation: {contact.relation}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Place: {contact.place}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Number: {contact.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GenericAccordion>

          <GenericAccordion title="Song List">
            <div className="space-y-3">
              {slongList.map((song, index) => (
                <div className="" key={index}>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        {song.name}
                      </div>
                      <div className="text-xs flex gap-2 font-light text-gray-400 flex-wrap">
                        <span>Singer: {song.singer}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Mood: {song.mood}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Id: {song.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GenericAccordion>
          {/* <GenericAccordion title="Train Data">
            <div className="space-y-3">
              {trainList.map((train, index) => (
                <div className="" key={index}>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        {train.train_name}
                      </div>
                      <div className="text-xs flex gap-2 font-light text-gray-400 flex-wrap">
                        <span>From: {train.from}</span>
                        <span>To: {train.to}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Train Number: {train.to}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Seats Av.: {train.seats_available}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Train Number: {train.train_number}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Time: {train.time}</span>
                        <span className="inline-block w-[2px] bg-[#1e1f22]"></span>
                        <span>Date: {train.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GenericAccordion> */}
        </div>
        <div className="w-6/12 bg-[#313339]">
          <div className="flex h-full flex-col">
            <div className="p-4 px-4 bg-[#383a40] font-medium text-lg text-white drop-shadow-sm">
              Jarvis
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatView>
                <InputBox />
                <MessageList />
              </ChatView>
            </div>
          </div>
        </div>
        <div className="w-4/12 p-4">
          <CallWrapper />
          <SongWidget />
        </div>
      </div>
      <ToastContainer />
      <JarvicSocket />
    </JarvisContextProvider>
  );
}

export default App;
