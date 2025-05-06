import React from "react";

import "./Header.css";

// import logo from "../../images/neonLogo.png";
import logo from "../../images/elvisLogo.png";
import neonLogo from "../../images/neonLogo.png";
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
        <img className="header__logo" src={userInfo.name === "Neon" ? neonLogo : logo} alt="логотип" />
      </NavLink>
      <div className="header__container">

        <div className={`header__links  ${(userInfo.waiter === true || userInfo.admin) && 'header__admin-links'}`}>
          {(userInfo.admin === false || userInfo.admin === true) && (
            <NavLink
              to="/main"
              className={`header__link ${`${btnBar === true && 'header__links_bar'}`} ${userInfo.admin === false && "header__link_menu"
                } ${userInfo.waiter === true && 'header__link_menu_waiter'}`}
            >
              Меню
            </NavLink>
          )}
          {userInfo.waiter === false && userInfo.admin === false && (
            <NavLink to="/myOrders" className={`app__text-orders header__link ${`${btnBar === true && 'header__links_bar'}`}`}>
              Мои заказы
            </NavLink>
          )}
          {userInfo.waiter === false && userInfo.admin === false && (
            <p className="app__text-limit_text">
              БАЛАНС: <span className="app__text-limit">{userInfo.limit}р</span>{" "}
            </p>
          )}


          {(userInfo.waiter === true || userInfo.admin) && (
            <NavLink to="/userList" className={`header__link  ${`${btnBar === true && 'header__links_bar'}`}`}>
              Установить лимит
            </NavLink>
          )}
          {(userInfo.waiter === true || userInfo.admin) && (
            <NavLink to="/orders" className={`header__link  ${`${btnBar === true && 'header__links_bar'}`}`}>
              Заказы
            </NavLink>
          )}
          {(userInfo.waiter === true || userInfo.admin) && (
            <NavLink to="/receipts" className={`header__link  ${`${btnBar === true && 'header__links_bar'}`}`}>
              Напечатать чек
            </NavLink>
          )}
          {userInfo.admin === false && (
            <NavLink to="/basket">
              {" "}
              <div className={`header__basket  ${userInfo.waiter === true && 'header__basket_waiter'}`}>
                <p className="header__basket-text">{cost}р</p>
                <img
                  className={`header__basket-ico ${btnBar === true && 'header__basket-ico_bar'}`}
                  src={btnBar === true ? basketLogoBar : basketLogo}
                  alt="ico" />
              </div>
            </NavLink>
          )}
        </div>
        <img
          className={`header__avatar ${btnBar === true && 'header__avatar_bar'}`}
          src={btnBar ? profileAvatarBar : profileAvatar}
          alt="Аватарка"
        />
        <p
          className={`header__account-name ${btnBar === true && "header__account-name_bar"
            }`}
        >
          {userInfo ? userInfo.name : "Загрузка..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
