import React, { useState } from "react";

import "../Order/Order.css";
const Order = ({
  nameWhoOrders,
  price,
  foods,
  doneStatus,
  _id,
  updateDoneStatus,
  createsAt,
  btnOrders,
  item,
  download,
  userInfo,
}) => {
  const [hide, setHide] = useState(false);

  const hideOrder = () => {
    updateDoneStatus(true, _id);
    setHide(true);
  };

  const downloadItem = () => {
    let array = [];
    item.foods.forEach((item) => {
      array.push(`${item.name} - ${item.price} рублей`);
    });
    console.log(array);
    array.unshift("  ");
    array.unshift("Название:     Цена:");
    array.unshift("  ");
    array.unshift(nameWhoOrders);
    array.unshift("  ");
    array.unshift("     РЦ НЕОН");

    let date = new Date();
    let dateNow = date.toLocaleString("en-US", { timeZone: "Europe/Moscow" });
    array.push(" ");
    array.push(`ИТОГ: ${price} рублей`)
    array.push(" ");
    array.push("Подпись официанта ____________");
    array.push(" ");

    array.push(dateNow);

    download(array, _id);
  };
  return (
    <div
      className={
        btnOrders === true
          ? `order ${(hide || doneStatus) && "order_hide"}`
          : `order`
      }
    >
      <div className="order__container">
        {btnOrders === false && (
          <div className="order__container-text">
            <p className="order__author">{nameWhoOrders}</p>
            <p
              className={`order__order-status ${
                doneStatus === false && "order__order-status_not-ready"
              }`}
            >
              {doneStatus === true ? "Завершён" : "Готовится"}
            </p>
          </div>
        )}
        {btnOrders === true && <p className="order__author">{nameWhoOrders}</p>}
        {foods.map((item) => (
          <p className="order__name">
            {item.name} - {item.price}руб
          </p>
        ))}
        {btnOrders === false && (
          <div className="order__container-text">
            <p className="order__price order__price_history">{price}р</p>
            {btnOrders === false && (
              <p className="order__createAt">
                {createsAt.slice(0, 10)} - {createsAt.slice(11, 19)}
              </p>
            )}
          </div>
        )}
        {btnOrders === true && (
          <div className="order__container-text">
            <p className="order__price order__price_history">{price}р</p>
          </div>
        )}
        {btnOrders === true && (
          <button className="order__done-btn" onClick={hideOrder}></button>
        )}
        <button className="order__print-receipt" onClick={downloadItem}>
          Напечатать чек
        </button>
      </div>
    </div>
  );
};
export default Order;
