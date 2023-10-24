import React from "react";

import "../Main/Main.css";
import FoodList from "../FoodList/FoodList";
import NavLinks from "../NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import basketLogo from "../../images/basketLogo.svg";
import basketLogoBar from "../../images/basketLogo_bar.svg";

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
  deleteElementInMenu,
  openPopupAddItem,
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
  foodMenuBar,
  deleteElementInBarMenu,
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
        pizzaBtnValue={pizzaBtnValue}
        soupsBtnValue={soupsBtnValue}
        snacksBtnValue={snacksBtnValue}
        coldSnacksBtnValue={coldSnacksBtnValue}
        saladsBtnValue={saladsBtnValue}
        pastesBtnValue={pastesBtnValue}
        beerSnacksBtnValue={beerSnacksBtnValue}
        hotDishesBtnValue={hotDishesBtnValue}
        cigarettesBtnValue={cigarettesBtnValue}
        juiceBtnValue={juiceBtnValue}
        coffeesBtnValue={coffeesBtnValue}
        teaBtnValue={teaBtnValue}
        bottledBeerBtnValue={bottledBeerBtnValue}
        wineBtnValue={wineBtnValue}
        champagneBtnValue={champagneBtnValue}
        vermouthBtnValue={vermouthBtnValue}
        aperativesBtnValue={aperativesBtnValue}
        rumBtnValue={rumBtnValue}
        cognacBtnValue={cognacBtnValue}
        brandyBtnValue={brandyBtnValue}
        whiskeyBtnValue={whiskeyBtnValue}
        ginBtnValue={ginBtnValue}
        tequilaBtnValue={tequilaBtnValue}
        tincturesBtnValue={tincturesBtnValue}
        vodkaBtnValue={vodkaBtnValue}
        liqueursBtnValue={liqueursBtnValue}
        setCigarettesBtnValue={setCigarettesBtnValue}
        setJuiceBtnValue={setJuiceBtnValue}
        setCoffeeBtnValue={setCoffeeBtnValue}
        setTeaBtnValue={setTeaBtnValue}
        setBottledBeerBtnValue={setBottledBeerBtnValue}
        setWineBtnValue={setWineBtnValue}
        setChampagneBtnValue={setChampagneBtnValue}
        setVermouthBtnValue={setVermouthBtnValue}
        setAperativesBtnValue={setAperativesBtnValue}
        setRumBtnValue={setRumBtnValue}
        setCognacBtnValue={setCognacBtnValue}
        setBrandyBtnValue={setBrandyBtnValue}
        setWhiskeyBtnValue={setWhiskeyBtnValue}
        setGinBtnValue={setGinBtnValue}
        setTequilaBtnValue={setTequilaBtnValue}
        setTincturesBtnValue={setTincturesBtnValue}
        setVodkaBtnValue={setVodkaBtnValue}
        setLiqueursBtnValue={setLiqueursBtnValue}
        btnBar={btnBar}
        setBtnBar={setBtnBar}
        btnFood={btnFood}
        setBtnFood={setBtnFood}
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
        openPopupAddItem={openPopupAddItem}
        cigarettesBtnValue={cigarettesBtnValue}
        juiceBtnValue={juiceBtnValue}
        coffeesBtnValue={coffeesBtnValue}
        teaBtnValue={teaBtnValue}
        bottledBeerBtnValue={bottledBeerBtnValue}
        wineBtnValue={wineBtnValue}
        champagneBtnValue={champagneBtnValue}
        vermouthBtnValue={vermouthBtnValue}
        aperativesBtnValue={aperativesBtnValue}
        rumBtnValue={rumBtnValue}
        cognacBtnValue={cognacBtnValue}
        brandyBtnValue={brandyBtnValue}
        whiskeyBtnValue={whiskeyBtnValue}
        ginBtnValue={ginBtnValue}
        tequilaBtnValue={tequilaBtnValue}
        tincturesBtnValue={tincturesBtnValue}
        vodkaBtnValue={vodkaBtnValue}
        liqueursBtnValue={liqueursBtnValue}
        foodMenuBar={foodMenuBar}
        btnBar={btnBar}
        btnFood={btnFood}
        deleteElementInBarMenu={deleteElementInBarMenu }
      />
      {userInfo.admin === false && (
        <NavLink to="/basket">
          {" "}
          <div className="app__basket">
            <p className="app__basket-text">
              {cost}
              <span className="app__text-limit">/{userInfo.limit}</span>
            </p>
            <img className="app__basket-ico" src={btnBar === true ? basketLogoBar : basketLogo} />
          </div>
        </NavLink>
      )}
    </main>
  );
};
export default Main;
