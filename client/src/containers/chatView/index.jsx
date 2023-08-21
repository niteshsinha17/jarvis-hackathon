import { useContext, useEffect, useRef } from "react";
import { jarvisContext } from "../../context/jarvis.context";

const ChatView = (props) => {
  const container = useRef(null);
  const { state } = useContext(jarvisContext);

  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  }, [state.messages.length]);

  return (
    <div className="h-full pb-[100px] pt-2 relative">
      <div ref={container} className="space-y-2 p-4 h-full overflow-scroll">
        {props.children}
      </div>
    </div>
  );
};

export default ChatView;
