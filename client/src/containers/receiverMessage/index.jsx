const RecevierMessage = (props) => {
  return (
    <div>
      <div className="max-w-[80%] text-sm text-white bg-[#383a40] p-4 rounded-md w-fit">
        {props.children}
      </div>
    </div>
  );
};

export default RecevierMessage;
