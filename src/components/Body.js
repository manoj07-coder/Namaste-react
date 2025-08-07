import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);

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
