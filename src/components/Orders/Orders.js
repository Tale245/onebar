import React, { useEffect } from "react";

import "../Orders/Orders.css";
import Order from "../Order/Order";
const Orders = ({
  orders,
  updateDoneStatus,
  btnOrders,
  btnHistoryOrders,
  setBtnOrders,
  setBtnHistoryOrders,
  download,
  userInfo,
}) => {
  const selectOrdersBtn = () => {
    setBtnOrders(true);
    setBtnHistoryOrders(false);
  };
  const selectHistoryOrdersBtn = () => {
    setBtnOrders(false);
    setBtnHistoryOrders(true);
  };

  let ordersNew = [];

  let whatArray = btnOrders === true ? orders : ordersNew
  orders.forEach((element) => {
    ordersNew.push(element);
  });

  console.log("ordersOld:", orders);
  console.log("ordersNew:", ordersNew);

  return (
    <section className="orders">
      <div className="orders__container">
        <h1 className="orders__title">Заказы</h1>
        <div className="orders__btns">
          <button
            className={`orders__btn-food ${
              btnOrders && "orders__btn-food_active"
            }`}
            onClick={selectOrdersBtn}
          >
            Заказы
          </button>
          <button
            className={`orders__btn-food ${
              btnHistoryOrders && "orders__btn-food_active"
            }`}
            onClick={selectHistoryOrdersBtn}
          >
            История заказов
          </button>
        </div>
        <div className="orders__list">
          {whatArray.reverse().map((item) => (
            <Order
              nameWhoOrders={item.nameWhoOrders}
              price={item.price}
              foods={item.foods}
              key={item._id}
              _id={item._id}
              doneStatus={item.doneStatus}
              updateDoneStatus={updateDoneStatus}
              createsAt={item.createsAt}
              btnOrders={btnOrders}
              download={download}
              item={item}
              userInfo={userInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Orders;
