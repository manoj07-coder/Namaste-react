import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines,costForTwoMessage,} = resInfo?.data?.cards[2]?.card?.card?.info || {};
    
    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="px-10 py-5">
            <h1 className="text-4xl mb-2">{name}</h1>
            <p className="text-[#777]">{cuisines?.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul className="list-none">
                {itemCards.map((item)=> <li key={item?.card?.info?.id} 
                className="py-2 border-b border-[#eee]">
                    <span className="menu-price">{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span></li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;