const Buttons = () => {
  return (
    <div className="flex h-16 gap-6 m-5">
      <button
        onClick={() => console.log("Fijar")}
        className="bg-white px-10 rounded-md"
      >
        Fijar
      </button>
      <button
        onClick={() => console.log("Borrar")}
        className="bg-white px-10 rounded-md"
      >
        Borrar
      </button>
    </div>
  );
};

export default Buttons;
