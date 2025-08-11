import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;
  return (
    <div>
      <h2>
        {title} ({itemCards.length})
      </h2>
      <ItemList items={itemCards} />
    </div>
  );
};

export default RestaurantCategory;
