import { useState } from "react";
import Views from "./Views";

import Terminaciones from "../assets/imgs/Terminaciones.png";
import Aberturas from "../assets/imgs/Aberturas.png";
import Equipamiento from "../assets/imgs/Equipamiento.png";

import Buttons from "./Buttons";
import Toggle from "./Toggle";

const SideBar = () => {
  const [showView, setShowView] = useState(false);
  const [category, setCategory] = useState("");

  const items = [
    { name: "Aberturas", src: Aberturas },
    { name: "Equipamiento", src: Equipamiento },
    { name: "Terminaciones", src: Terminaciones },
  ];

  const handleItemClick = (name) => {
    setShowView((prev) => name !== category || !prev);
    setCategory(name);
  };

  return (
    <div className="flex w-screen">
      <aside className="bg-white w-32 flex flex-col items-center justify-center gap-12">
        {items.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className="flex flex-col items-center justify-center w-full cursor-pointer"
          >
            <img src={item.src} className="w-10" alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </aside>
      {showView && (
        <div className="flex flex-grow relative">
          <div className="flex flex-grow relative justify-between">
            <div className="flex content-center ">
              <Views category={category} />
              <Toggle className="" onClick={() => setShowView(false)} />
            </div>
            <Buttons />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
