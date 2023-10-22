import React from "react";

import "./Basket.css";
import FoodList from "../FoodList/FoodList";
import { NavLink } from "react-router-dom";
import PopupAddItem from "../PopupAddItem/PopupAddItem";

const Basket = ({
  userInfo,
  deleteFromCart,
  cost,
  setCost,
  createOrder,
  clearCart,
  changeLimit
}) => {
  const createNewOrder = () => {
    console.log(userInfo.foods.length)
    if (userInfo.foods.length === 0) {
      console.log('вы не можете сделать пустой заказ!')
    } else {
      createOrder(userInfo.name, userInfo.foods, cost, false);
      changeLimit(userInfo.limit - cost, userInfo._id)
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
      <div className="basket__container">
        <NavLink to="/main" className="basket__link-back">
          Назад
        </NavLink>
        <p className="basket__price">{cost}р/{userInfo.limit}р</p>
        <button className={`basket__btn-order ${(cost > userInfo.limit || cost === 0) && 'basket__btn-order_disabled'}`} onClick={createNewOrder} disabled={(cost > userInfo.limit || cost === 0) && true}>
          Заказать
        </button>
        
      </div>
    </section>
  );
};

export default Basket;
