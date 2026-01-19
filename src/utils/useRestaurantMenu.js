import { RES_MENU_URL } from './constants';
import { useState, useEffect } from 'react';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
            RES_MENU_URL + resId
        )}`);
        const json = await data.json();
        const jsonData = JSON.parse(json.contents);
        setResInfo(jsonData.data);
    }

    return resInfo;
}

export default useRestaurantMenu;