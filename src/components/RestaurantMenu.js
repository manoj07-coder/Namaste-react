import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);

    const {resId} = useParams();
    console.log(resId);
    

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json  = await data.json();

        console.log(json);
        setResInfo(json);
        setResMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    const {name, cuisines,costForTwoMessage,} = resInfo?.data?.cards[2]?.card?.card?.info || {};

    if (resMenu === 0 ) return <Shimmer />

    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {resMenu.map((item)=> <li key={item?.card?.info?.id}><span className="menu-price">{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span></li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;