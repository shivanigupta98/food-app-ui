import { CDN_URL } from "../utils/constants";

const ResturantCard = ({resData}) => {
    const {name,cuisines,avgRating , costForTwo,sla } = resData.info;
    return (
    <div className="m-4 p-4 w-52 bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-lg" alt="res-logo"
         src={CDN_URL+resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default ResturantCard;