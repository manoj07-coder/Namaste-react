import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data =  await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9246566&lng=77.6102207&carousel=true&third_party_vendor=1");
    const json = await data.json();
    console.log(json);
    setListOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    

  }

  if (restaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {setListOfRestuarants(listOfRestuarants.filter((restaurants) => restaurants.info.avgRating > 4.3));     
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
