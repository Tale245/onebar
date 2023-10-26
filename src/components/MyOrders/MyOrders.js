import React from "react";

import "./MyOrders.css";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = ({ orders, userInfo }) => {
  const array = [];

  orders.forEach((item) => {
    if (item.owner === userInfo._id) {
      array.push(item);
    }
  });

  console.log(array);
  return (
    <section className="myOrder">
      <div className="myOrder__container">
        {array.reverse().map((item) => (
          <MyOrder
            itemFood={item.foods}
            price={item.price}
            status={item.doneStatus}
            date={item.createsAt}
          />
        ))}
      </div>
    </section>
  );
};
export default MyOrders;
