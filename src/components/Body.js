import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

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

    if (!onlineStatus) return (
        <>
            <h1>You are offline!! Please check your internet connection;</h1>
        </>
    )

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
            <div className="search m-4 p-2">
                <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                <button className="ml-2 px-4 py-2 bg-green-100 rounded-lg"
                    onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((res) =>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
            </div>
            <div className="search m-4 p-2 flex items-center">
                <button className="px-4 py-2 bg-gray-100"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
</div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((resturant) =>
                        <Link to={"/restaurants/" + resturant.info.id} key={resturant.info.id}> <ResturantCard resData={resturant} /> </Link>)
                }
            </div>
        </div>
    )
}

export default Body;