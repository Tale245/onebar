import React from "react";

import "./NavLinks.css";

const NavLinks = ({
  setPizzaBtnValue,
  setSoupsBtnValue,
  setSnacksBtnValue,
  setColdSnacksBtnValue,
  setSaladsBtnValue,
  setPastesBtnValue,
  setBeerSnacksBtnValue,
  setHotDishesBtnValue,
  pizzaBtnValue,
  soupsBtnValue,
  snacksBtnValue,
  coldSnacksBtnValue,
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
}) => {
  const changePizzaValue = () => {
    setPizzaBtnValue(true);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changeSoupsValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(true);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changeSnacksValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(true);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changeColdSnacksValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(true);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changeSaladsValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(true);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changePastesValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(true);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(false);
  };
  const changeBeerSnacksValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(true);
    setHotDishesBtnValue(false);
  };
  const changeHotDishesValue = () => {
    setPizzaBtnValue(false);
    setSoupsBtnValue(false);
    setSnacksBtnValue(false);
    setColdSnacksBtnValue(false);
    setSaladsBtnValue(false);
    setPastesBtnValue(false);
    setBeerSnacksBtnValue(false);
    setHotDishesBtnValue(true);
  };
  return (
    <section className="navLinks">
      <nav className="navLinks__container">
        <button className={`navLinks__btn ${coldSnacksBtnValue && 'navLinks__btn_active'}`} onClick={changeColdSnacksValue}>
          Холодные закуски
        </button>
        <button className={`navLinks__btn ${soupsBtnValue && 'navLinks__btn_active'}`} onClick={changeSoupsValue}>
          Супы
        </button>
        <button className={`navLinks__btn ${pizzaBtnValue && 'navLinks__btn_active'}`} onClick={changePizzaValue}>
          Пицца
        </button>
        <button className={`navLinks__btn ${snacksBtnValue && 'navLinks__btn_active'}`} onClick={changeSnacksValue}>
          Снэки
        </button>
        <button className={`navLinks__btn ${saladsBtnValue && 'navLinks__btn_active'}`} onClick={changeSaladsValue}>
          Салаты
        </button>
        <button className={`navLinks__btn ${pastesBtnValue && 'navLinks__btn_active'}`} onClick={changePastesValue}>
          Пасты
        </button>
        <button className={`navLinks__btn ${beerSnacksBtnValue && 'navLinks__btn_active'}`} onClick={changeBeerSnacksValue}>
          Закуски к пиву
        </button>
        <button className={`navLinks__btn ${hotDishesBtnValue && 'navLinks__btn_active'}`} onClick={changeHotDishesValue}>
          Горячие блюда
        </button>
      </nav>
    </section>
  );
};

export default NavLinks;
