import reactDom from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Restaurantlist  from "./components/restaurantlist";
import Restaurnatid from "./components/restaurnatid";
import About from "./components/about";
import Order from "./components/order";
import Account from "./components/account";
import Homepage from "./components/homepage"
// const heading = react.createElement(
//   "h2",
//   { id: "heading", className: "heading" },
//   "Here is content from React"
// );

const main = document.querySelector("body");
const root = reactDom.createRoot(main);

// jsx
// html element
// const head=(
//   <div>
//    <h1 key="h1tag" >Hello from jsx inside head</h1>
//    <ul key="unorderlist">
//     <li>list element</li>
//    </ul>
//    <h2 key="h2tag">head ending</h2>
//    </div>

// )

//functional component

// const Abc=()=>{
//   return  (
//     <div>
//           {console.log("hello , im js from jsx")}
//           <h1>Hello i am 1st Fcomponent</h1>
//     </div>
//   )
// }

// body comp

// const Bodycomponent= ()=>{
//   return (
//     <>

//         {/* <offers/>
//         <footer/> */}
//     </>
//   )
// }

const approuter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/restaurant:id",
        element: <Restaurnatid />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <Account />,
      },
      {
        path: "/user/order",
        element: <Order/>,
      },
    ],
  }
]);

root.render(<RouterProvider router={approuter} />);
