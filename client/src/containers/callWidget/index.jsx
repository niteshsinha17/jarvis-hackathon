import { useContext } from "react";
import { jarvisContext } from "../../context/jarvis.context";

const CallWrapper = () => {
  const { state } = useContext(jarvisContext);

  if (!state.showCallingInformation) return null;

  return (
    <div className=" bg-[#313339]">
      <div className="text-center py-[80px] text-white">
        <div className="text-md font-thin">Calling to</div>
        <div>
          <span className="text-xl font-semibold">
            {state.callingTo.name} ({state.callingTo.number})
          </span>
        </div>
        {state.callNotReceived && (
          <div className="flex justify-center">
            <span className="inline-block p-2 rounded-lg bg-[#444444] mt-4">
              Call not received
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallWrapper;
