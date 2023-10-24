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
  cigarettesBtnValue,
  juiceBtnValue,
  coffeesBtnValue,
  teaBtnValue,
  bottledBeerBtnValue,
  wineBtnValue,
  champagneBtnValue,
  vermouthBtnValue,
  aperativesBtnValue,
  rumBtnValue,
  cognacBtnValue,
  brandyBtnValue,
  whiskeyBtnValue,
  ginBtnValue,
  tequilaBtnValue,
  tincturesBtnValue,
  vodkaBtnValue,
  liqueursBtnValue,
  setCigarettesBtnValue,
  setJuiceBtnValue,
  setCoffeeBtnValue,
  setTeaBtnValue,
  setBottledBeerBtnValue,
  setWineBtnValue,
  setChampagneBtnValue,
  setVermouthBtnValue,
  setAperativesBtnValue,
  setRumBtnValue,
  setCognacBtnValue,
  setBrandyBtnValue,
  setWhiskeyBtnValue,
  setGinBtnValue,
  setTequilaBtnValue,
  setTincturesBtnValue,
  setVodkaBtnValue,
  setLiqueursBtnValue,
  btnBar,
  setBtnBar,
  btnFood,
  setBtnFood,
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

  const changeCigarettesValue = () => {
    setCigarettesBtnValue(true);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeJuiceValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(true);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeCoffeeValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(true);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeTeaValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(true);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeBottledBeerValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(true);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeWineValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(true);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeChampagneValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(true);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeVermouthValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(true);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeAperativesValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(true);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeRumValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(true);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeCognacValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(true);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeBrandyValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(true);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeWhiskeyValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(true);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeGinValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(true);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeTequilaValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(true);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeTincturesValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(true);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(false);
  };
  const changeVodkaValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(true);
    setLiqueursBtnValue(false);
  };
  const changeLiqueursValue = () => {
    setCigarettesBtnValue(false);
    setJuiceBtnValue(false);
    setCoffeeBtnValue(false);
    setTeaBtnValue(false);
    setBottledBeerBtnValue(false);
    setWineBtnValue(false);
    setChampagneBtnValue(false);
    setVermouthBtnValue(false);
    setAperativesBtnValue(false);
    setRumBtnValue(false);
    setCognacBtnValue(false);
    setBrandyBtnValue(false);
    setWhiskeyBtnValue(false);
    setGinBtnValue(false);
    setTequilaBtnValue(false);
    setTincturesBtnValue(false);
    setVodkaBtnValue(false);
    setLiqueursBtnValue(true);
  };

  const selectMenuBar = () => {
    setBtnBar(true);
    setBtnFood(false);
  };
  const selectMenuFood = () => {
    setBtnBar(false);
    setBtnFood(true);
  };
  return (
    <section className="navLinks">
      <div className="navLinks__btns">
        <button className={`navLinks__btn-food ${btnFood && 'navLinks__btn-food_active'}`} onClick={selectMenuFood}>
          Еда
        </button>
        <button className={`navLinks__btn-food ${btnBar && 'navLinks__btn-food_active'}`} onClick={selectMenuBar}>
          Напитки
        </button>
      </div>
      {btnFood === true && (
        <nav className="navLinks__container">
          <button
            className={`navLinks__btn ${
              coldSnacksBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeColdSnacksValue}
          >
            Холодные закуски
          </button>
          <button
            className={`navLinks__btn ${
              soupsBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeSoupsValue}
          >
            Супы
          </button>
          <button
            className={`navLinks__btn ${
              pizzaBtnValue && "navLinks__btn_active"
            }`}
            onClick={changePizzaValue}
          >
            Пицца
          </button>
          <button
            className={`navLinks__btn ${
              snacksBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeSnacksValue}
          >
            Снэки
          </button>
          <button
            className={`navLinks__btn ${
              saladsBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeSaladsValue}
          >
            Салаты
          </button>
          <button
            className={`navLinks__btn ${
              pastesBtnValue && "navLinks__btn_active"
            }`}
            onClick={changePastesValue}
          >
            Пасты
          </button>
          <button
            className={`navLinks__btn ${
              beerSnacksBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeBeerSnacksValue}
          >
            Закуски к пиву
          </button>
          <button
            className={`navLinks__btn ${
              hotDishesBtnValue && "navLinks__btn_active"
            }`}
            onClick={changeHotDishesValue}
          >
            Горячие блюда
          </button>
        </nav>
      )}
      {btnBar === true && (
        <nav className="navLinks__container">
          <button
            className={`navLinks__btn ${
              cigarettesBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeCigarettesValue}
          >
            Сигареты
          </button>
          <button
            className={`navLinks__btn ${
              juiceBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeJuiceValue}
          >
            Сок
          </button>
          <button
            className={`navLinks__btn ${
              coffeesBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeCoffeeValue}
          >
            Кофе
          </button>
          <button
            className={`navLinks__btn ${
              teaBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeTeaValue}
          >
            Чай
          </button>
          <button
            className={`navLinks__btn ${
              wineBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeWineValue}
          >
            Вино
          </button>
          <button
            className={`navLinks__btn ${
              bottledBeerBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeBottledBeerValue}
          >
            Пиво бутылочное
          </button>
          <button
            className={`navLinks__btn ${
              champagneBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeChampagneValue}
          >
            Шампанское
          </button>
          <button
            className={`navLinks__btn ${
              vermouthBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeVermouthValue}
          >
            Вермут
          </button>
          <button
            className={`navLinks__btn ${
              aperativesBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeAperativesValue}
          >
            Аперативы
          </button>
          <button
            className={`navLinks__btn ${
              rumBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeRumValue}
          >
            Ром
          </button>
          <button
            className={`navLinks__btn ${
              cognacBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeCognacValue}
          >
            Коньяк
          </button>
          <button
            className={`navLinks__btn ${
              brandyBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeBrandyValue}
          >
            Бренди
          </button>
          <button
            className={`navLinks__btn ${
              whiskeyBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeWhiskeyValue}
          >
            Виски
          </button>
          <button
            className={`navLinks__btn ${
              ginBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeGinValue}
          >
            Джин
          </button>
          <button
            className={`navLinks__btn ${
              tequilaBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeTequilaValue}
          >
            Текила
          </button>
          <button
            className={`navLinks__btn ${
              tincturesBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeTincturesValue}
          >
            Настойки
          </button>
          <button
            className={`navLinks__btn ${
              vodkaBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeVodkaValue}
          >
            Водка
          </button>
          <button
            className={`navLinks__btn ${
              liqueursBtnValue && "navLinks__btn_activeBar"
            }`}
            onClick={changeLiqueursValue}
          >
            Ликеры
          </button>
        </nav>
      )}
    </section>
  );
};

export default NavLinks;
