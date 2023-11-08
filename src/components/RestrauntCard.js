import { cloudinary_img_url } from "../config";

const Restraunt_card=({restraunt})=>{
    // console.log("restraunt is", restraunt);
    const {name, cuisines, lastMileTravelString, cloudinaryImageId}=restraunt;
  
    return(
      <div className="card">
        <img src={ cloudinary_img_url + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
}

export default Restraunt_card;