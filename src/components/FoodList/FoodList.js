import React, { useEffect } from "react";

import "./FoodList.css";
import FoodCard from "../FoodCard/FoodCard";
import PopupAddItem from "../PopupAddItem/PopupAddItem";

const FoodList = ({
  foodArray,
  addToCart,
  cart,
  deleteFromCart,
  userInfo,
  setCost,
  pizzaBtnValue,
  soupsBtnValue,
  snacksBtnValue,
  coldSnacksBtnValue,
  iceCreamBtnValue,
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
  deleteElementInMenu,
  openPopupAddItem,
  cigarettesBtnValue,
  hookahsBtnValue,
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
  cocktailsBtnValue,
  shotsBtnValue,
  foodMenuBar,
  btnBar,
  btnFood,
  deleteElementInBarMenu,
  openPopupConfirm,
  openPopupChangeInfo
}) => {

  let valueArray = foodArray;
  let title = "";

  const foodMap = {
    pizzaBtnValue: "pizza",
    soupsBtnValue: "soups",
    snacksBtnValue: "snacks",
    coldSnacksBtnValue: "coldSnacks",
    iceCreamBtnValue: "iceCream",
    saladsBtnValue: "salads",
    pastesBtnValue: "pastes",
    beerSnacksBtnValue: "beerSnacks",
    hotDishesBtnValue: "hotDishes",
  };

  const barMap = {
    cigarettesBtnValue: "cigarettes",
    juiceBtnValue: "juice",
    hookahsBtnValue: "hookahs",
    coffeesBtnValue: "coffee",
    teaBtnValue: "tea",
    bottledBeerBtnValue: "bottledBeer",
    wineBtnValue: "wine",
    champagneBtnValue: "champagne",
    vermouthBtnValue: "vermouth",
    aperativesBtnValue: "aperatives",
    rumBtnValue: "rum",
    cognacBtnValue: "cognac",
    brandyBtnValue: "brandy",
    whiskeyBtnValue: "whiskey",
    ginBtnValue: "gin",
    tequilaBtnValue: "tequila",
    tincturesBtnValue: "tinctures",
    vodkaBtnValue: "vodka",
    liqueursBtnValue: "liqueurs",
    cocktailsBtnValue: "cocktails",
    shotsBtnValue: "shots",
  };

  const whatValue = () => {
    const buttonStates = {
      pizzaBtnValue,
      soupsBtnValue,
      snacksBtnValue,
      coldSnacksBtnValue,
      iceCreamBtnValue,
      saladsBtnValue,
      pastesBtnValue,
      beerSnacksBtnValue,
      hotDishesBtnValue,
      cigarettesBtnValue,
      juiceBtnValue,
      hookahsBtnValue,
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
      cocktailsBtnValue,
      shotsBtnValue,
    };

    const map = btnFood ? foodMap : btnBar ? barMap : null;
    const source = btnFood ? foodArray[0] : btnBar ? foodMenuBar[0] : null;

    if (map && source) {
      for (const [btnKey, key] of Object.entries(map)) {
        if (buttonStates[btnKey]) {
          valueArray = source[key];
          title = source[`${key}Title`];
          break;
        }
      }
    }
  };

  whatValue();

  return (
    <div className="foodList">
      <h1 className={`foodList__title ${btnBar === true && 'foodList__title_bar'}`}>{title}</h1>
      <div className="foodList__container">
        {valueArray &&
          valueArray.map((item) => (
            <FoodCard
              item={item}
              itemHide={item.hide}
              openPopupConfirm={openPopupConfirm}
              title={item.name}
              priceRelax={item.priceRelax ? item.priceRelax : undefined}
              img={item.linkImage ? item.linkImage : item.imageLink}
              price={item.price}
              description={item.description}
              gram={item.gram}
              key={item._id}
              foodCategory={item.category}
              addToCart={addToCart}
              foodArray={foodArray}
              foodMenuBar={foodMenuBar}
              cardId={item._id}
              cart={cart}
              deleteFromCart={deleteFromCart}
              userInfo={userInfo}
              setCost={setCost}
              deleteElementInMenu={deleteElementInMenu}
              pizzaBtnValue={pizzaBtnValue}
              soupsBtnValue={soupsBtnValue}
              coldSnacksBtnValue={coldSnacksBtnValue}
              iceCreamBtnValue={iceCreamBtnValue}
              snacksBtnValue={snacksBtnValue}
              saladsBtnValue={saladsBtnValue}
              pastesBtnValue={pastesBtnValue}
              beerSnacksBtnValue={beerSnacksBtnValue}
              hotDishesBtnValue={hotDishesBtnValue}
              btnBar={btnBar}
              cigarettesBtnValue={cigarettesBtnValue}
              hookahsBtnValue={hookahsBtnValue}
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
              cocktailsBtnValue={cocktailsBtnValue}
              shotsBtnValue={shotsBtnValue}
              deleteElementInBarMenu={deleteElementInBarMenu}
              openPopupChangeInfo={openPopupChangeInfo}
            />
          ))}
      </div>
      {(userInfo.admin === true) && (
        <button
          className="foodList__popup-open"
          onClick={openPopupAddItem}
        ></button>
      )}
    </div>
  );
};

export default FoodList;
