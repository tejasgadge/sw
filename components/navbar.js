import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import search_input_context from "../context/search_input_context";

const Navbar = () => {
  const [input, setinput] = useState("");

  return (
    <search_input_context.Provider value={
      {
        search_input:input,
      }
    }>
    <>
      <div className="navbar flex w-full items-center justify-between p-2 gap-2  bg-white shadow-lg  sticky top-0 z-50">
      
        <div>
          <a>
            <img
              className="logo-image h-14 w-14 rounded-full"
              src="https://previews.123rf.com/images/pikalvi/pikalvi2012/pikalvi201200135/161412779-food-signal-online-food-ordering-logo-design-order-food-on-internet-restaurant-cafe-meals-delivery-o.jpg"
              alt="logo"
            ></img>
          </a> 
        </div>
        <div className="leftnavbar flex justify-center gap-2 ">
          {/* <div className="flex gap-2 ">
            <input
              className="search-input flex p-1 border rounded"
              type={"text"}
              placeholder="search"
              value={input}
              onChange={(event) => {
                setinput(event.target.value);
              }}
            ></input>
            <button
              className="search-button bg-indigo-800 text-white px-2 rounded "
              onClick={() => {
                const data = filterdata(input, restaurant);
                setfilterrestaurant(data);
              }}
            >
              search
            </button>
          </div> */}
          <ul className="nav-list flex justify-center items-center gap-4">
            <Link to="/" className="Link">
              <li>Home</li>
            </Link>
            <Link to="/user/order" className="Link">
              <li>Order</li>
            </Link>
            <Link to="/user" className="Link">
              <li>Account</li>
            </Link>
            <Link to="/about" className="Link">
              <li>More</li>
            </Link>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
    </search_input_context.Provider>
  );
};
export default Navbar;
