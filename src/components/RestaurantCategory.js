import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center w-6/12 mx-auto py-3 px-4 bg-gray-200 rounded-lg shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-lg font-semibold">
          {title} ({itemCards.length})
        </h2>
        <span className="text-xl">{showMenu ? "⬆️" : "⬇️"}</span>
      </div>
      {showMenu && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
