const Buttons = () => {
  const handleFixClick = () => console.log("Fijar");
  const handleDeleteClick = () => console.log("Borrar");

  return (
    <div className="flex h-16 space-x-6 m-5">
      <button
        onClick={handleFixClick}
        className="bg-white px-10 py-2 rounded-md hover:bg-gray-100 transition-all ease-in-out duration-300"
      >
        Fijar
      </button>
      <button
        onClick={handleDeleteClick}
        className="bg-white px-10 py-2 rounded-md hover:bg-gray-100 transition-all ease-in-out duration-300"
      >
        Borrar
      </button>
    </div>
  );
};

export default Buttons;
