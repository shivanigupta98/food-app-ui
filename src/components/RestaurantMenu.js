import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

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
                            {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice}</li>)}
                </ul>
            </h3>
        </div>
    )
}

export default RestaurantMenu;