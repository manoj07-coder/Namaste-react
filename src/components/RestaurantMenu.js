import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

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
    <div className="">
      <div className="flex flex-col justify-center items-center px-10 py-5">
        <h1 className="text-4xl mb-2 font-bold">{name}</h1>
        <p className="text-[#777] font-semibold mb-4">
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>
      </div>
      <div>
        {categoryList.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showMenu={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
