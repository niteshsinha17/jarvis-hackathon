import { useState } from "react";

const GenericAccordion = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (open) {
      setOpen(false);
      props.onClose && props.onClose(props.id);
    } else {
      setOpen(true);
      props.onOpen && props.onOpen(props.id);
    }
  };

  return (
    <div className="overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-2 focus:outline-none bg-313339 bg-[#313339] outline-0 border-0 text-white"
        onClick={toggle}
      >
        <span className="font-medium text-sm">{props.title}</span>
        <svg
          className={`w-4 h-4 transform ${
            open ? "rotate-180" : ""
          } transition-transform`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
            fill="white"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          open ? "max-h-[500px] overflow-scroll" : "max-h-[0px]"
        }`}
      >
        <div className="p-2 bg-[#313339] text-white text-sm font-light">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default GenericAccordion;
