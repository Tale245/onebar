import React from "react";

import "./Basket.css";
import FoodList from "../FoodList/FoodList";
import { NavLink } from "react-router-dom";

const Basket = ({ userInfo, deleteFromCart }) => {
  return (
    <section className="basket">
      <h1 className="basket__title">Корзина</h1>
      <FoodList
        foodArray={userInfo.foods}
        cart={true}
        deleteFromCart={deleteFromCart}
      />
      <div className="basket__container">
        <NavLink to="/main" className="basket__link-back">
          Назад
        </NavLink>
        <p className="basket__price">770р</p>
        <button className="basket__btn-order">Заказать</button>
      </div>
    </section>
  );
};

export default Basket;
