import React from "react";

import "./Header.css";

import logo from "../../images/neonLogo.svg";
import profileAvatar from "../../images/profileAvatar.svg";
import { NavLink } from "react-router-dom";

const Header = ({ userInfo }) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <div className="header__container">
        <div className="header__admin-links">
          {userInfo.admin && (
            <NavLink to="/main" className="header__link">
              Меню
            </NavLink>
          )}
          {userInfo.admin && (
            <NavLink to="/userList" className="header__link">
              Установить лимит
            </NavLink>
          )}
          {userInfo.admin && (
            <NavLink to="/orders" className="header__link">
              Заказы
            </NavLink>
          )}
        </div>
        <img className="header__avatar" src={profileAvatar} alt="Аватарка" />
        <p className="header__account-name">
          {userInfo ? userInfo.name : "Загрузка..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
