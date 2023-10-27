import React from "react";

import "./Header.css";

import logo from "../../images/neonLogo.png";
import { NavLink } from "react-router-dom";
import basketLogo from "../../images/basketLogo.svg";
import basketLogoBar from "../../images/basketLogo_bar.svg";
import profileAvatar from "../../images/profileAvatar.svg";
import profileAvatarBar from "../../images/profileAvatar_bar.svg";

const Header = ({ userInfo, btnBar, cost }) => {
  return (
    <header className="header">
      <NavLink to="/main">
        {" "}
        <img className="header__logo" src={logo} alt="логотип" />
      </NavLink>
      <div className="header__container">
        <div className="header__admin-links">
          {(userInfo.admin === false || userInfo.admin === true) && (
            <NavLink
              to="/main"
              className={`header__link ${
                userInfo.admin === false && "header__link_menu"
              } `}
            >
              Меню
            </NavLink>
          )}
          {userInfo.admin === false && (
            <NavLink to="/myOrders" className="app__text-orders">
              Мои заказы
            </NavLink>
          )}
          {userInfo.admin === false && (
            <p className="app__text-limit_text">
              БАЛАНС: <span className="app__text-limit">{userInfo.limit}р</span>{" "}
            </p>
          )}
          {userInfo.admin === false && (
            <NavLink to="/basket">
              {" "}
              <div className="header__basket">
                <p className="header__basket-text">{cost}р</p>
                <img
                  className="header__basket-ico"
                  src={btnBar === true ? basketLogoBar : basketLogo}
                />
              </div>
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
        <img
          className="header__avatar"
          src={btnBar ? profileAvatarBar : profileAvatar}
          alt="Аватарка"
        />
        <p
          className={`header__account-name ${
            btnBar === true && "header__account-name_bar"
          }`}
        >
          {userInfo ? userInfo.name : "Загрузка..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
