import { useContext, useEffect, useId, useRef } from "react";
import { jarvisContext } from "../context/jarvis.context";
import { contacts, slongList } from "../App";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/host";

const JarvicSocket = () => {
  const socket = useRef(null);
  const userId = useRef("nitesh");
  const songIndexRef = useRef(0);
  const callTimeoutId = useRef(null);

  const { state, setState } = useContext(jarvisContext);

  useEffect(() => {
    useId.current = Math.random().toString(36).substring(7);
    socket.current = new WebSocket(`${BASE_URL}/ws/jarvis/${userId.current}/`);
    socket.current.onopen = () => {
      console.log("websocket connected");
    };

    socket.current.onmessage = (e) => {
      const data = JSON.parse(e.data)["message"];
      console.log(data);

      switch (data.action) {
        case "call": {
          const number = data["number"];
          const contact = contacts.find((contact) => contact.number === number);
          const name = contact ? contact.name : "Unknown";
          setState((state) => ({
            ...state,
            showCallingInformation: true,
            callingTo: {
              name,
              number,
            },
            callNotReceived: false,
            callHistory: [
              {
                number: number,
                time: new Date().toISOString(),
                name: name,
              },
            ],
          }));
          callTimeoutId.current = setTimeout(() => {
            setState((state) => ({
              ...state,
              callNotReceived: true,
            }));
          }, 10000);
          break;
        }
        case "cut": {
          setState((state) => ({
            ...state,
            showCallingInformation: false,
            callingTo: null,
            callNotReceived: false,
          }));
          if (callTimeoutId.current) {
            toast.info("Call ended");
            clearTimeout(callTimeoutId.current);
          }
          break;
        }
        case "play": {
          const songId = +data["song_id"];
          const song = slongList.find((song, index) => {
            if (song.id === songId) {
              songIndexRef.current = index;
              return true;
            }
            return false;
          });
          setState((state) => ({
            ...state,
            playingSong: true,
            song: song,
          }));
          break;
        }
        case "pause": {
          setState((state) => ({
            ...state,
            playingSong: false,
          }));
          break;
        }
        case "next_song": {
          let song = null;

          if (songIndexRef.current === null) {
            song = slongList[0];
            songIndexRef.current = 0;
          } else if (songIndexRef.current === slongList.length - 1) {
            song = slongList[0];
            songIndexRef.current = 0;
          } else {
            song = slongList[songIndexRef.current + 1];
            songIndexRef.current += 1;
          }
          if (song) {
            songIndexRef.current += 1;
            setState((state) => ({
              ...state,
              song: song,
              playingSong: true,
            }));
          }
          break;
        }

        case "previous_song": {
          console.log("previous_song");
          let song = null;

          if (songIndexRef.current === null) {
            song = slongList[0];
            songIndexRef.current = 0;
          } else if (songIndexRef.current === 0) {
            song = slongList[slongList.length - 1];
            songIndexRef.current = slongList.length - 1;
          } else {
            song = slongList[songIndexRef.current - 1];
            songIndexRef.current -= 1;
          }
          if (song) {
            songIndexRef.current -= 1;
            setState((state) => ({
              ...state,
              song: song,
              playingSong: true,
            }));
          }
          break;
        }

        default:
          return;
      }
    };

    socket.current.onclose = () => {};
  }, []);

  return null;
};

export default JarvicSocket;
