import React from "react";

import "../Orders/Orders.css";
import Order from "../Order/Order";
import PopupAddItem from "../PopupAddItem/PopupAddItem";
import { NavLink } from "react-router-dom";
const Orders = ({
  orders,
  updateDoneStatus,
  openPopupAddItem,
  isPopupAddItemOpen,
  closePopups,
  addNewElementInMenu,
}) => {
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
      <button
        className="orders__popup-open"
        onClick={openPopupAddItem}
      ></button>
      <PopupAddItem
        isPopupAddItemOpen={isPopupAddItemOpen}
        closePopups={closePopups}
        addNewElementInMenu={addNewElementInMenu}
      />
      <NavLink to="/main" className="basket__link-back">
        В меню
      </NavLink>
    </section>
  );
};
export default Orders;
