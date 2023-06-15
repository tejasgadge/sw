import Navbar from "./navbar";
import { useState } from "react";

const Ans = () => {
  return (
    <div>
      Sed eleifend suscipit faucibus. Curabitur et leo augue. Mauris a risus
      pharetra diam ornare ultrices. Sed dignissim ipsum sed euismod interdum.
      Phasellus euismod sit amet turpis non tristique. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Duis sed libero tincidunt, laoreet
      sapien elementum, pharetra ante. Nam in volutpat sapien.
    </div>
  );
};
const About = () => {
  const [isvisible, setisvisible] = useState(0);

  return (
    <>
      <Navbar />
      <h2>About section</h2>
      <section className="p-4 ">
        <div className="mb-5 border p-2  border-blue-800 rounded-md">
          <button
            onClick={() => {
              {isvisible==1?setisvisible(0): setisvisible(1)}
            }}
          >
            How do I place an order on the website?
          </button>
          {isvisible == 1 ? (
            <>
              <p className="mt-2">
              ⏩To place an order, simply browse the available menu items, select the desired dishes, and add them to your cart. Proceed to the checkout page, provide the necessary details such as delivery address and payment information, and confirm your order.
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-5 border p-2  border-blue-800 rounded-md">
          <div>
            <button
              onClick={() => {
                {isvisible==2?setisvisible(0): setisvisible(2)}
              }}
            >
              What payment methods are accepted on the website?
            </button>
            {isvisible == 2 ? (
              <>
                <p className="mt-2">
                ⏩We accept various payment methods, including credit cards, debit cards, and popular digital wallets such as PayPal or Apple Pay. You can choose your preferred payment method during the checkout process.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mb-5 border p-2  border-blue-800 rounded-md">
          <div>
            <button
              onClick={() => {
                {isvisible==3?setisvisible(0): setisvisible(3)}
              }}
            >
              Can I customize my food order?
            </button>
            {isvisible == 3 ? (
              <>
                 <p className="mt-2">
                 ⏩Yes, most of our menu items allow customization. You can add specific instructions or preferences for each dish, such as extra toppings, dietary restrictions, or any special requests. Just make sure to mention them in the designated field before adding the item to your cart.
                 </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
