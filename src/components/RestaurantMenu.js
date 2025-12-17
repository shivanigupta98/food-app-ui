import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
            "https://namastedev.com/api/v1/listRestaurantMenu/"+resId
        )}`);
        const json = await data.json();
        const jsonData = JSON.parse(json.contents);
        //console.log(jsonData.data.cards[2].card.card.info);
        setResInfo(jsonData.data);
    }
    if (!resInfo) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ") + " - " + costForTwoMessage}</h3>
            <h3>
                <ul>
                    {itemCards.map(item =>
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice}</li>)}
                </ul>
            </h3>
        </div>
    )
}

export default RestaurantMenu;