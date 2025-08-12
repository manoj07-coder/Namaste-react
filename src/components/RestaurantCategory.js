import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showMenu, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
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
