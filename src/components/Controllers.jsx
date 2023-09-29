import PlusIcon from "../assets/imgs/Plus.png";
import MinusIcon from "../assets/imgs/Minus.png";
import Arrow from "../assets/imgs/Flecha.png";

const Controllers = () => {
  const handlePlusClick = () => console.log("Plus");
  const handleMinusClick = () => console.log("Minus");
  const handleArrowUpClick = () => console.log("Arrow Up");
  const handleArrowLeftClick = () => console.log("Arrow Left");
  const handleArrowRightClick = () => console.log("Arrow Right");
  const handleArrowDownClick = () => console.log("Arrow Down");

  return (
    <div className="flex fixed bottom-4 right-4 space-x-4">
      <div className="flex justify-center flex-col bg-white p-2 rounded-md space-y-6">
        <button onClick={handlePlusClick}>
          <img className="w-5 cursor-pointer" src={PlusIcon} alt="Plus Icon" />
        </button>
        <button onClick={handleMinusClick}>
          <img
            className="w-5 cursor-pointer"
            src={MinusIcon}
            alt="Minus Icon"
          />
        </button>
      </div>
      <div className="flex flex-col w-24 items-center bg-white p-2 rounded-md space-y-2">
        <button onClick={handleArrowUpClick}>
          <img className="w-5 cursor-pointer" src={Arrow} alt="Arrow Up" />
        </button>
        <div className="flex space-x-5">
          <button onClick={handleArrowLeftClick}>
            <img
              className="w-5 transform -rotate-90 cursor-pointer"
              src={Arrow}
              alt="Arrow Left"
            />
          </button>
          <button onClick={handleArrowRightClick}>
            <img
              className="w-5 transform rotate-90 cursor-pointer"
              src={Arrow}
              alt="Arrow Right"
            />
          </button>
        </div>
        <button onClick={handleArrowDownClick}>
          <img
            className="w-5 transform rotate-180 cursor-pointer"
            src={Arrow}
            alt="Arrow Down"
          />
        </button>
      </div>
    </div>
  );
};

export default Controllers;
