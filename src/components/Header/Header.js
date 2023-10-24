import React from "react";

import "./Header.css";

import logo from "../../images/neonLogo.svg";
import logoBar from "../../images/neonLogo_bar.svg";
import profileAvatar from "../../images/profileAvatar.svg";
import profileAvatarBar from "../../images/profileAvatar_bar.svg";
import { NavLink } from "react-router-dom";

const Header = ({ userInfo, btnBar }) => {
  return (
    <header className="header">
      <img className="header__logo" src={btnBar ? logoBar : logo} alt="логотип" />
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
        <img className="header__avatar" src={btnBar ? profileAvatarBar : profileAvatar} alt="Аватарка" />
        <p className={`header__account-name ${btnBar === true && 'header__account-name_bar'}`}>
          {userInfo ? userInfo.name : "Загрузка..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
