import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9246566&lng=77.6102207&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus === false)
    return (
      <Offline />
    );
  

  return (
    <div  className="px-10 py-5">
      <div className="flex gap-5 mb-6 flex-wrap">
        <div className="flex gap-2.5">
          <input
            type="text"
            className="px-3 py-2 border border-[#ccc] rounded-lg"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-[#ff6b35] text-white border-0 px-3.5 py-2 rounded-lg cursor-pointer transition 0.2s ease-in-out hover:bg-[#e85b2d]" onClick={()=>{
            console.log(searchText);
            const filterList = listOfRestuarants.filter((res)=>{
             return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });

            setFilteredRestaurants(filterList);
            
          }}>Search</button>
        </div>
        <button
          className="bg-[#ff6b35] text-white border-0 px-3.5 py-2 rounded-lg cursor-pointer transition 0.2s ease-in-out hover:bg-[#e85b2d]"
          onClick={() => {
            setFilteredRestaurants(
              filteredRestaurants.filter(
                (restaurants) => restaurants.info.avgRating > 4.3
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><ResCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
