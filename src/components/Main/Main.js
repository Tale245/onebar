import React from "react";

import "../Main/Main.css";
import FoodList from "../FoodList/FoodList";
import NavLinks from "../NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import basketLogo from "../../images/basketLogo.svg";

const Main = ({ foodMenu, addToCart }) => {
  return (
    <main className="main">
      <NavLinks />
      <FoodList foodArray={foodMenu} title="вся еда" addToCart={addToCart} cart={false}/>
      <NavLink to="/basket">
        {" "}
        <div className="app__basket">
          <p className="app__basket-text">1770р</p>
          <img className="app__basket-ico" src={basketLogo} />
        </div>
      </NavLink>
    </main>
  );
};
export default Main;
