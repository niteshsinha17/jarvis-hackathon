const SenderMessage = (props) => {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] text-sm text-white bg-[#444444] p-4 rounded-md w-fit">
        {props.children}
      </div>
    </div>
  );
};

export default SenderMessage;
