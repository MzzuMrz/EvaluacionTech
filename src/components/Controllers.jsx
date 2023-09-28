import PlusIcon from "../assets/imgs/Plus.png";
import MinusIcon from "../assets/imgs/Minus.png";
import Arrow from "../assets/imgs/Flecha.png";

const Controllers = () => {
  return (
    <div className="flex fixed bottom-4 right-4 gap-4">
      <div className="flex justify-center flex-col bg-white p-2 rounded-md gap-6">
        <img
          className="w-5 cursor-pointer"
          src={PlusIcon}
          alt="Plus Icon"
          onClick={() => console.log("Plus")}
        />
        <img
          className="w-5 cursor-pointer"
          src={MinusIcon}
          alt="Minus Icon"
          onClick={() => console.log("Minus")}
        />
      </div>
      <div className="flex flex-col w-24 items-center bg-white p-2 rounded-md gap-2">
        <img
          className="w-5 cursor-pointer"
          src={Arrow}
          alt="Arrow Up"
          onClick={() => console.log("Arrow Up")}
        />
        <div className="flex">
          <img
            className="w-5 mr-5 transform -rotate-90 cursor-pointer"
            src={Arrow}
            alt="Arrow Left"
            onClick={() => console.log("Arrow Left")}
          />
          <img
            className="w-5 ml-5 transform rotate-90 cursor-pointer"
            src={Arrow}
            alt="Arrow Right"
            onClick={() => console.log("Arrow Right")}
          />
        </div>
        <img
          className="w-5 transform rotate-180 cursor-pointer"
          src={Arrow}
          alt="Arrow Down"
          onClick={() => console.log("Arrow Down")}
        />
      </div>
    </div>
  );
};

export default Controllers;
