import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "../assets/imgs/Arrow.png";

const Views = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/equipamiento`;

  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Hubo un problema", err);
      });
  }, [URL]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-between px-5 bg-white">
      <div className="py-5">
        {selectedCategory ? (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            <img src={Arrow} className="h-3 my-auto" />
            <button className="text-sm text-gray-500 font-semibold">
              {selectedCategory.name}
            </button>
          </div>
        ) : null}
        <h1 className="text-primary font-semibold text-2xl mb-5">
          Equipamiento
        </h1>
        {selectedCategory ? (
          <div className="grid grid-cols-3 gap-4">
            {selectedCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center p-2 border border-gray-300 rounded-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-2"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        ) : data ? (
          data.map((d) => (
            <div
              key={d.name}
              className="flex justify-between bg-white rounded-md w-64 p-2 my-5 font-light cursor-pointer"
              onClick={() => handleCategoryClick(d)}
            >
              <p>{d.name}</p>
              <img src={Arrow} className="w-5 rotate-180" />
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Views;
