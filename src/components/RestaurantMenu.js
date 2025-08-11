import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const datalist =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categoryList = datalist.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //   console.log(
  //     resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  //   );

  return (
    <div className="flex justify-center items-center">
      <div className="px-10 py-5">
        <h1 className="text-4xl mb-2 font-bold">{name}</h1>
        <p className="text-[#777] font-semibold mb-4">
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>
        <div>
          {categoryList.map((category) => (
            <RestaurantCategory
              key={category.card.card.title}
              data={category?.card?.card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
