const Buttons = () => {
  const handleFixClick = () => console.log("Fijar");
  const handleDeleteClick = () => console.log("Borrar");

  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-16 space-y-2 sm:space-y-0 sm:space-x-6 m-5">
      <button
        onClick={handleFixClick}
        className="bg-white px-10 py-2 rounded-md hover:bg-gray-100 transition-all ease-in-out duration-300 w-full sm:w-auto text-center"
      >
        Fijar
      </button>
      <button
        onClick={handleDeleteClick}
        className="bg-white px-10 py-2 rounded-md hover:bg-gray-100 transition-all ease-in-out duration-300 w-full sm:w-auto text-center"
      >
        Borrar
      </button>
    </div>
  );
};

export default Buttons;
