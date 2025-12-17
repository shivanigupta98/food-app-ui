import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
                "https://namastedev.com/api/v1/listRestaurants"
            )}`
        );
        const json = await data.json();
        const jsonData = JSON.parse(json.contents);
        console.log(jsonData?.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(jsonData?.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(jsonData?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                       <Link to={"/restaurants/"+resturant.info.id} key={resturant.info.id}> <ResturantCard resData={resturant} /> </Link>)
                }
            </div>
        </div>
    )
}

export default Body;