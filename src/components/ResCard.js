import { RES_URL } from "../utils/constants";   

const ResCard = (props) => {
  const { resData } = props;
  
  return (
    <div className="bg-white p-3 rounded-xl shadow-md hover:-translate-y-4" >
      <img
        alt="res-logo"
        className="w-100% h-40 object-cover rounded-lg mb-2.5"
        src={RES_URL+resData.info.cloudinaryImageId}
      />
      <h3 className="font-semibold text-lg mb-1">{resData.info.name}</h3>
      <h4 className="text-sm text-[#555]">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="text-sm text-[#555]">{resData.info.avgRating} stars</h4>
      <h4 className="text-sm text-[#555]">{resData.info.costForTwo}</h4>
      <h4 className="text-sm text-[#555]">{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export const WithPromotedLabel = (ResCard) => {
  return (props) =>{
    return (
      <div className="relative">
        <label className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">Promoted</label>
        <ResCard {...props} />
      </div>
    )
  }
}

export default ResCard;