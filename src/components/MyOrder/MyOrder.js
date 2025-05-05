import React from "react";

import "./MyOrder.css";

const MyOrder = ({ itemFood, price, status, date }) => {
  return (
    <div className="myOrder">
      <div className="myOrder__container">
        <div className="myOrder__text-container">
          <h4 className="myOrder__title">Ваш заказ</h4>
          <h5 className="myOrder__text myOrder__text_date">{date.slice(0, 10)} - {date.slice(11, 19)}</h5>
        </div>
        {itemFood.map((item) => (
          <p className="myOrder__text-name">{item.name}</p>
        ))}
        <div className="myOrder__text-container">
          <p className="myOrder__text">{price}р</p>
          <p
            className={`myOrder__text  ${status ? "myOrder__text_done" : "myOrder__text_not-done"
              }`}
          >
            {status ? "Готов" : "Готовится"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MyOrder;
