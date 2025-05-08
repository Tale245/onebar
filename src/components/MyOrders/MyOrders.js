import React from "react";

import "./MyOrders.css";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = ({ orders, userInfo, btnBar }) => {
  
  const array = [];

  orders.forEach((item) => {
    if (item.owner === userInfo._id) {
      array.push(item);
    }
  });

 
  return (
    <section className="myOrders">
      <h1 className={`myOrders__title ${btnBar === true && 'myOrders__title_bar-theme'}`}>Мои заказы</h1>
      <div className="myOrders__container">
        {array.reverse().map((item) => (
          <MyOrder
            itemFood={item.foods}
            price={item.price}
            status={item.doneStatus}
            date={item.createsAt}
            brnBar = {btnBar} 
          />
        ))}
      </div>
    </section>
  );
};
export default MyOrders;
