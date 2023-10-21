import React from "react";

import "../Orders/Orders.css";
import Order from "../Order/Order";
const Orders = ({ orders, updateDoneStatus }) => {
  return (
    <section className="orders">
      <div className="orders__container">
        <h1 className="orders__title">Заказы</h1>
        <div className="orders__list">
          {orders.map((item) => (
            <Order
              nameWhoOrders={item.nameWhoOrders}
              price={item.price}
              foods={item.foods}
              key={item._id}
              _id={item._id}
              doneStatus={item.doneStatus}
              updateDoneStatus={updateDoneStatus}
              />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Orders;
