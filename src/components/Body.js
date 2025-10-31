import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                <button
                    onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((res) =>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredRestaurants.map((resturant) =>
                        <ResturantCard resData={resturant} key={resturant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;