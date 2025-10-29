import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            <div className="res-container">
                {
                    listOfRestaurants.map((resturant) => <ResturantCard resData={resturant} key={resturant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;