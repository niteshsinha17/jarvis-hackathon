import { useContext } from "react";
import { jarvisContext } from "../../context/jarvis.context";
import RecevierMessage from "../receiverMessage";
import SenderMessage from "../senderMessage";

const MessageList = () => {
  const { state } = useContext(jarvisContext);
  return (
    <>
      {state.messages.map((message, index) => {
        if (index === 0) return null;
        switch (message.role) {
          case "bot":
            return (
              <RecevierMessage key={index}>{message.message}</RecevierMessage>
            );
          case "user":
            return <SenderMessage key={index}>{message.message}</SenderMessage>;
          default:
            return (
              <RecevierMessage key={index}>{message.message}</RecevierMessage>
            );
        }
      })}
      {state.loading && <RecevierMessage>Typing...</RecevierMessage>}
    </>
  );
};

export default MessageList;
