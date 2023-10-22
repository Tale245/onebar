import React, { useState } from "react";

import "../Order/Order.css";
const Order = ({
  nameWhoOrders,
  price,
  foods,
  doneStatus,
  _id,
  updateDoneStatus,
}) => {
  const [hide, setHide] = useState(false);

  const hideOrder = () => {
    updateDoneStatus(true, _id);
    setHide(true);
  };

  return (
    <div className={`order ${(hide || doneStatus) && "order_hide"}`}>
      <div className="order__item">
        <p className="order__author">{nameWhoOrders}</p>
        {foods.map((item) => (
          <p className="order__name">{item.name}</p>
        ))}
        <p className="order__price">{price}р</p>
        <button className="order__done-btn" onClick={hideOrder}></button>
      </div>
    </div>
  );
};
export default Order;
