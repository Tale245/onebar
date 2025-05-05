import React from "react";

import "./Basket.css";
import FoodList from "../FoodList/FoodList";
import { NavLink } from "react-router-dom";

const Basket = ({
  userInfo,
  deleteFromCart,
  cost,
  setCost,
  createOrder,
  clearCart,
  changeLimit,
  btnBar,
  isUserCartEmpty,
  isUserCreateOrder,
}) => {
  debugger
  const createNewOrder = () => {
    if (userInfo.foods.length === 0) {
      console.log("вы не можете сделать пустой заказ!");
    } else {
      debugger
      createOrder(userInfo.name, userInfo.foods, cost, false);
      changeLimit(userInfo.limit - cost, userInfo._id);
      clearCart();
    }
  };

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
      {isUserCartEmpty === true && (
        <p className="basket__text"> Корзина пуста!</p>
      )}
      {isUserCreateOrder === true && (
        <p className="basket__text basket__text_order">
          {" "}
          МЫ УЖЕ НАЧАЛИ ГОТОВИТЬ ВАШ ЗАКАЗ!
        </p>
      )}
      <div className="basket__container">
        <NavLink to="/main" className="basket__link-back">
          Назад
        </NavLink>
        <p className="basket__price">
          {cost}р/<span className="basket__price-limit">{userInfo.limit}р</span>
        </p>
        <button
          className={`basket__btn-order ${
            (cost > userInfo.limit || cost === 0) &&
            "basket__btn-order_disabled"
          } ${btnBar === true && "basket__btn-order_barTheme"}`}
          onClick={createNewOrder}
          disabled={(cost > userInfo.limit || cost === 0) && true}
        >
          Заказать
        </button>
      </div>
    </section>
  );
};

export default Basket;
