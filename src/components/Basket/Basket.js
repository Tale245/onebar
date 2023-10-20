import React from "react";

import "./Basket.css";
import FoodList from "../FoodList/FoodList";
import { NavLink } from "react-router-dom";

const Basket = ({ userInfo, deleteFromCart, cost, setCost, createOrder }) => {
  console.log(cost);

  const createNewOrder = () => {
    createOrder(userInfo.name, userInfo.foods, cost)
  }
  return (
    <section className="basket">
      <h1 className="basket__title">Корзина</h1>
      <FoodList
        foodArray={userInfo.foods}
        userInfo={userInfo}
        cart={true}
        deleteFromCart={deleteFromCart}
        setCost={setCost}
      />
      <div className="basket__container">
        <NavLink to="/main" className="basket__link-back">
          Назад
        </NavLink>
        <p className="basket__price">{cost}</p>
        <button className="basket__btn-order" onClick={createNewOrder}>Заказать</button>
      </div>
    </section>
  );
};

export default Basket;
