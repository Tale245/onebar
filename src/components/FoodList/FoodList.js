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

  console.log('foodArrayInFoodList', foodArray)
  let valueArray = foodArray;
  let title = "";
  const whatValue = () => {
    if (btnFood === true) {
      if (pizzaBtnValue === true) {
        valueArray = foodArray[0].pizza;
        title = foodArray[0].pizzaTitle;
      } else if (soupsBtnValue === true) {
        valueArray = foodArray[0].soups;
        title = foodArray[0].soupsTitle;
      } else if (snacksBtnValue === true) {
        valueArray = foodArray[0].snacks;
        title = foodArray[0].snacksTitle;
      } else if (coldSnacksBtnValue === true) {
        valueArray = foodArray[0].coldSnacks;
        title = foodArray[0].coldSnacksTitle;
      } else if (iceCreamBtnValue === true) {
        valueArray = foodArray[0].iceCream;
        title = foodArray[0].iceCreamTitle;
      } else if (saladsBtnValue === true) {
        valueArray = foodArray[0].salads;
        title = foodArray[0].saladsTitle;
      } else if (pastesBtnValue === true) {
        valueArray = foodArray[0].pastes;
        title = foodArray[0].pastesTitle;
      } else if (beerSnacksBtnValue === true) {
        valueArray = foodArray[0].beerSnacks;
        title = foodArray[0].beerSnacksTitle;
      } else if (hotDishesBtnValue === true) {
        valueArray = foodArray[0].hotDishes;
        title = foodArray[0].hotDishesTitle;
      }
    } else if (btnBar === true) {
      if (cigarettesBtnValue === true) {
        valueArray = foodMenuBar[0].cigarettes;
        title = foodMenuBar[0].cigarettesTitle;
      } else if (juiceBtnValue === true) {
        valueArray = foodMenuBar[0].juice;
        title = foodMenuBar[0].juiceTitle;
      } else if (juiceBtnValue === true) {
        valueArray = foodMenuBar[0].juice;
        title = foodMenuBar[0].juiceTitle;
      } else if (hookahsBtnValue === true) {
        valueArray = foodMenuBar[0].hookahs;
        title = foodMenuBar[0].hookahsTitle;
      } else if (coffeesBtnValue === true) {
        valueArray = foodMenuBar[0].coffee;
        title = foodMenuBar[0].coffeeTitle;
      } else if (teaBtnValue === true) {
        valueArray = foodMenuBar[0].tea;
        title = foodMenuBar[0].teaTitle;
      } else if (bottledBeerBtnValue === true) {
        valueArray = foodMenuBar[0].bottledBeer;
        title = foodMenuBar[0].bottledBeerTitle;
      } else if (wineBtnValue === true) {
        valueArray = foodMenuBar[0].wine;
        title = foodMenuBar[0].wineTitle;
      } else if (champagneBtnValue === true) {
        valueArray = foodMenuBar[0].champagne;
        title = foodMenuBar[0].champagneTitle;
      } else if (vermouthBtnValue === true) {
        valueArray = foodMenuBar[0].vermouth;
        title = foodMenuBar[0].vermouthTitle;
      } else if (aperativesBtnValue === true) {
        valueArray = foodMenuBar[0].aperatives;
        title = foodMenuBar[0].aperativesTitle;
      } else if (rumBtnValue === true) {
        valueArray = foodMenuBar[0].rum;
        title = foodMenuBar[0].rumTitle;
      } else if (cognacBtnValue === true) {
        valueArray = foodMenuBar[0].cognac;
        title = foodMenuBar[0].cognacTitle;
      } else if (brandyBtnValue === true) {
        valueArray = foodMenuBar[0].brandy;
        title = foodMenuBar[0].brandyTitle;
      } else if (whiskeyBtnValue === true) {
        valueArray = foodMenuBar[0].whiskey;
        title = foodMenuBar[0].whiskeyTitle;
      } else if (ginBtnValue === true) {
        valueArray = foodMenuBar[0].gin;
        title = foodMenuBar[0].ginTitle;
      } else if (tequilaBtnValue === true) {
        valueArray = foodMenuBar[0].tequila;
        title = foodMenuBar[0].tequilaTitle;
      } else if (tincturesBtnValue === true) {
        valueArray = foodMenuBar[0].tinctures;
        title = foodMenuBar[0].tincturesTitle;
      } else if (vodkaBtnValue === true) {
        valueArray = foodMenuBar[0].vodka;
        title = foodMenuBar[0].vodkaTitle;
      } else if (liqueursBtnValue === true) {
        valueArray = foodMenuBar[0].liqueurs;
        title = foodMenuBar[0].liqueursTitle;
      } else if (cocktailsBtnValue === true) {
        valueArray = foodMenuBar[0].cocktails;
        title = foodMenuBar[0].cocktailsTitle;
      } else if (shotsBtnValue === true) {
        valueArray = foodMenuBar[0].shots;
        title = foodMenuBar[0].shotsTitle;
      }
    }
  };

  whatValue();

  return (
    <div className="foodList">
      <h1 className="foodList__title">{title}</h1>
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
      {userInfo.admin && userInfo.waiter === false && (
        <button
          className="foodList__popup-open"
          onClick={openPopupAddItem}
        ></button>
      )}
    </div>
  );
};

export default FoodList;
