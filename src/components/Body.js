import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

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

  return (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={()=>{
            console.log(searchText);
            const filterList = listOfRestuarants.filter((res)=>{
             return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });

            setFilteredRestaurants(filterList);
            
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
