import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100001).toString();
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          {basket.map(({ id, title, image, price, rating }) => {
            return (
              <CheckoutProduct
                key={id + getRandomValue()}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            );
          })}
        </div>
      </div>

      <div className="checkout__left">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
