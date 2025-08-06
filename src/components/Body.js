import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => <ResCard key={restaurant.info.id} resData={restaurant} />)}

      </div>
    </div>
  );
};

export default Body;