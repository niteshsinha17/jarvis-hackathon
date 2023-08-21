import { useContext, useState } from "react";
import { jarvisContext } from "../../context/jarvis.context";

const InputBox = () => {
  const { state, sendMessage } = useContext(jarvisContext);

  const [value, setValue] = useState("");

  return (
    <div className="w-full absolute bottom-0 left-0 p-2">
      <input
        type="text"
        className="w-full h-[50px] px-3 rounded-sm focus:outline-none bg-[#383a40] text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a message"
        disabled={state.loading}
        onKeyDown={(e) => {
          if (!e.ctrlKey && e.key === "Enter") {
            if (value.trim().length === 0) return;
            e.preventDefault();
            sendMessage(value);
            setValue("");
          }
        }}
      />
    </div>
  );
};

export default InputBox;
