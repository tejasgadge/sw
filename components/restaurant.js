const Restaurants=({name,cloudinaryImageId,cuisines,avgRating})=> {
    return (
      <div className="restaurant flex flex-col p-2 ">
          <div>
                <img className="restaurant-image rounded-md ... h-[200px] w-[300px]" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="food_image"></img>
          </div>
          <div className="restro-description w-[300px]">
            <div >{name}</div>
            <div className="cusisines w-[300px]"><p>{cuisines.join(", ")}</p></div>
            <div className="rating">{avgRating}</div>
          </div>
      </div>
    )
}
export default Restaurants;
  