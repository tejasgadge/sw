import { useEffect, useState } from "react";
import Restaurants from "./restaurant";
import Shimmer from "./shimmer/shimmer";
import { useContext } from "react";
import search_input_context from "../context/search_input_context";
// import { Link } from "react-router-dom";
// import filterdata from "./filterdata";

const Restaurantlist = () => {

  const contextdata = useContext(search_input_context);
  {console.log(contextdata)}
  // const [restaurant, setrestaurant] = useState([]);
  // const [filterrestaurant, setfilterrestaurant] = useState(restaurant);

  // async function getdata() {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6297811&lng=73.7997094&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setrestaurant(data.data.cards);
  //   setfilterrestaurant(data.data.cards);
  // }

  // useEffect(() => {
  //   const temp = getdata();
  // }, []);

  return (
    <>
      <div>
        {console.log(contextdata)}
        {contextdata.filter_data.length == 0 ? (
          <Shimmer />
        ) : (
          <>
          <div className="restaurant-list flex flex-wrap justify-between align-center px-10 bg-gray-200">
            {contextdata.filter_data.map((restaurant) => {
              return <Restaurants {...restaurant.data.data} />;
            })}
          </div>
          </>
        )}
      </div>
    </>
  );
};
export default Restaurantlist;
