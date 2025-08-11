const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <h3>{item.card.info.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
