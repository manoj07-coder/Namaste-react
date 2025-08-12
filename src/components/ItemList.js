import { RES_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div className="w-6/12 mx-auto mt-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start border-b pb-4 pt-4"
        >
          <div className="flex-1 pr-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium">{item.card.info.name}</h3>
              <span className="text-gray-600">
                ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative w-32 h-28 ">
            <img
              src={RES_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full rounded-lg shadow-md"
            />
            <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 px-3 text-sm font-semibold rounded shadow hover:bg-green-50 border ">
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
