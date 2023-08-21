import axios from "axios";
import { createContext, useEffect, useState } from "react";
import JarvicSocket from "../websockets/jarvis";
import { BASE_URL } from "../constants/host";

export const jarvisContext = createContext(null);

function generateRandomUUID() {
  const digits = "0123456789";
  let uuid = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    uuid += digits[randomIndex];
  }

  return uuid;
}

const JarvisContextProvider = (props) => {
  const [state, setState] = useState({
    loading: false,
    playingSong: false,
    song: null,
    showCallingInformation: false,
    callingTo: null,
    callNotReceived: false,
    messages: [
      {
        role: "user",
        message: "hello",
      },
    ],
    serverMessages: [],
    callHistory: [],
    favSongs: [],
    username: generateRandomUUID(),
  });

  const getJarviseResponse = async (msg) => {
    setState({
      ...state,
      loading: true,
    });

    await axios
      .post(`${BASE_URL}/api/get-jarvis-response/`, {
        username: state.username,
        server_messages: state.serverMessages,
        message: msg,
        fav_songs: state.favSongs,
        call_history: state.callHistory,
      })
      .then((res) => {
        // console.log(res.data, "res");

        setState((prev) => ({
          ...prev,
          loading: false,
          serverMessages: res.data.server_messages,
          messages: [
            ...prev.messages,
            {
              role: "bot",
              message: res.data.reply,
            },
          ],
        }));
      })
      .catch((err) => {
        setState((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              role: "error",
              message: "Something went wrong",
            },
          ],
        }));
      });
  };

  const sendMessage = async (message) => {
    setState((prev) => ({
      ...prev,
      loading: true,
      messages: [
        ...prev.messages,
        {
          role: "user",
          message: message,
        },
      ],
    }));
    await axios
      .post(`${BASE_URL}/api/get-jarvis-response/`, {
        username: state.username,
        server_messages: state.serverMessages,
        message: message,
        fav_songs: state.favSongs,
        call_history: state.callHistory,
      })
      .then((res) => {
        // console.log(res.data, "res");

        setState((prev) => ({
          ...prev,
          loading: false,
          serverMessages: res.data.server_messages,
          messages: [
            ...prev.messages,
            {
              role: "bot",
              message: res.data.reply,
            },
          ],
        }));
      })
      .catch((err) => {
        setState((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              role: "error",
              message: "Something went wrong",
            },
          ],
        }));
      });
  };

  useEffect(() => {
    getJarviseResponse("hello");
  }, []);

  // console.log(state, "state");

  return (
    <jarvisContext.Provider value={{ state, sendMessage, setState }}>
      {props.children}
    </jarvisContext.Provider>
  );
};

export default JarvisContextProvider;
