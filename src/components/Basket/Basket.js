import React, { useEffect, useState } from "react";

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
  userList
}) => {

  const [selectedUserId, setSelectedUserId] = useState('68177fe4cf0d216bc5fdfb6e')


  const handleTableChange = (e) => {
    setSelectedUserId(e.target.value)
  }

  const filteredOrders = userList.filter((user) => {
    const name = user.name?.toLowerCase().trim() || '';
    const userName = userInfo.name.toLowerCase();
    const isSystemUser = name.includes('стол 1')

    const isNeonTable = name.includes('neon');

    if (isSystemUser) return true
    if (userName === 'admin' || userName === 'администратор') return true;

    if (userName === 'neon') return isNeonTable

    return !isNeonTable;
  });
  const selectedUser = filteredOrders.find(u => u._id === selectedUserId);
  
  const createNewOrder = () => {
    if (userInfo.foods.length === 0) {
      console.log("вы не можете сделать пустой заказ!");
    } else {
      if (userInfo.waiter === true) {
        if (selectedUser._id === userInfo._id) {
          changeLimit(selectedUser.limit - 0, selectedUser._id);
        } else {
          changeLimit(selectedUser.limit - cost, selectedUser._id);
        }
        createOrder(selectedUser.name, userInfo.foods, cost, false);
      } else {
        createOrder(userInfo.name, userInfo.foods, cost, false);
        changeLimit(userInfo.limit - cost, userInfo._id);

      }

      clearCart();
    }
  };


  return (
    <section className="basket">
      <h1 className={`basket__title ${btnBar === true && 'basket__title_barTheme'}`}>Корзина</h1>
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
      {userInfo.waiter === true && <div className="basket__container basket__container-select">
        <p className="basket__text basket__text-select">Счет списания:</p>
        <select className="basket__select" value={selectedUserId} onChange={handleTableChange}>
          {filteredOrders.sort((a, b) => (a._id === '68177fe4cf0d216bc5fdfb6e' ? -1 : b._id === '68177fe4cf0d216bc5fdfb6e' ? 1 : 0)).map(user => (
            <option className="basket__option" key={user._id} value={user._id}>{user.name} - {user.limit}р</option>
          )
          )}
        </select>

      </div>}
      <div className="basket__container">
        <NavLink to="/main" className="basket__link-back">
          Назад
        </NavLink>
        <p className="basket__price">
          {cost}р/<span className="basket__price-limit">{userInfo.waiter === true ? selectedUser.limit : userInfo.limit}р</span>
        </p>
        <button
          className={`basket__btn-order ${(userInfo.waiter === true ? (cost > selectedUser.limit || cost === 0) : (cost > userInfo.limit || cost === 0)) &&
            "basket__btn-order_disabled"
            } ${btnBar === true && "basket__btn-order_barTheme"}`}
          onClick={createNewOrder}
          disabled={userInfo.waiter === true ? (cost > selectedUser.limit || cost === 0) : (cost > userInfo.limit || cost === 0)}
        >
          Заказать
        </button>
      </div>
    </section>
  );
};

export default Basket;
