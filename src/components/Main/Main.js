import React from "react";

import "../Main/Main.css";
import FoodList from "../FoodList/FoodList";
import NavLinks from "../NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import basketLogo from "../../images/basketLogo.svg";

const Main = ({
  foodMenu,
  addToCart,
  userInfo,
  cost,
  setCost,
  pizzaBtnValue,
  soupsBtnValue,
  snacksBtnValue,
  coldSnacksBtnValue,
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
  setPizzaBtnValue,
  setSoupsBtnValue,
  setSnacksBtnValue,
  setColdSnacksBtnValue,
  setSaladsBtnValue,
  setPastesBtnValue,
  setBeerSnacksBtnValue,
  setHotDishesBtnValue,
  deleteElementInMenu
}) => {
  return (
    <main className="main">
      <NavLinks
        setPizzaBtnValue={setPizzaBtnValue}
        setSoupsBtnValue={setSoupsBtnValue}
        setColdSnacksBtnValue={setColdSnacksBtnValue}
        setSnacksBtnValue={setSnacksBtnValue}
        setSaladsBtnValue={setSaladsBtnValue}
        setPastesBtnValue={setPastesBtnValue}
        setBeerSnacksBtnValue={setBeerSnacksBtnValue}
        setHotDishesBtnValue={setHotDishesBtnValue}
      />
      <FoodList
        foodArray={foodMenu}
        addToCart={addToCart}
        cart={false}
        userInfo={userInfo}
        setCost={setCost}
        pizzaBtnValue={pizzaBtnValue}
        soupsBtnValue={soupsBtnValue}
        coldSnacksBtnValue={coldSnacksBtnValue}
        snacksBtnValue={snacksBtnValue}
        saladsBtnValue={saladsBtnValue}
        pastesBtnValue={pastesBtnValue}
        beerSnacksBtnValue={beerSnacksBtnValue}
        hotDishesBtnValue={hotDishesBtnValue}
        deleteElementInMenu={deleteElementInMenu}
      />
      <NavLink to="/basket">
        {" "}
        <div className="app__basket">
          <p className="app__basket-text">{cost}</p>
          <img className="app__basket-ico" src={basketLogo} />
        </div>
      </NavLink>
    </main>
  );
};
export default Main;
