import React, { useEffect } from "react";

import "./FoodCard.css";

const FoodCard = ({
  img,
  title,
  price,
  description,
  gram,
  addToCart,
  foodArray,
  cardId,
  cart,
  deleteFromCart,
  userInfo,
  setCost,
  deleteElementInMenu,
  pizzaBtnValue,
  soupsBtnValue,
  snacksBtnValue,
  coldSnacksBtnValue,
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
  btnBar,
  foodMenuBar,
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
  deleteElementInBarMenu,
}) => {
  console.log(description)
  let category;
  const whatIsCost = () => {
    let price = [];
    userInfo.foods?.forEach((item) => {
      price.push(item.price);
    });

    const sum = price.reduce((total, num) => total + num, 0);

    setCost(sum);
  };

  useEffect(() => {
    whatIsCost();
  });

  const onClickCard = () => {
    let thisCard;
    let thisArray = [];
    if (btnBar === false) {
      if (pizzaBtnValue === true) {
        thisArray = foodArray[0].pizza;
        category = "Pizza";
      } else if (soupsBtnValue === true) {
        thisArray = foodArray[0].soups;
        category = "Soups";
      } else if (snacksBtnValue === true) {
        thisArray = foodArray[0].snacks;
        category = "Snacks";
      } else if (coldSnacksBtnValue === true) {
        thisArray = foodArray[0].coldSnacks;
        category = "ColdSnacks";
      } else if (saladsBtnValue === true) {
        thisArray = foodArray[0].salads;
        category = "Salads";
      } else if (pastesBtnValue === true) {
        thisArray = foodArray[0].pastes;
        category = "Pastes";
      } else if (beerSnacksBtnValue === true) {
        thisArray = foodArray[0].beerSnacks;
        category = "BeerSnack";
      } else if (hotDishesBtnValue === true) {
        thisArray = foodArray[0].hotDishes;
        category = "HotDishes";
      }
    } else if (btnBar === true) {
      if (cigarettesBtnValue === true) {
        thisArray = foodMenuBar[0].cigarettes;
        category = "Cigarettes";
      } else if (juiceBtnValue === true) {
        thisArray = foodMenuBar[0].juice;
        category = "Juice";
      } else if (coffeesBtnValue === true) {
        thisArray = foodMenuBar[0].coffee;
        category = "Coffee";
      } else if (teaBtnValue === true) {
        thisArray = foodMenuBar[0].tea;
        category = "Tea";
      } else if (bottledBeerBtnValue === true) {
        thisArray = foodMenuBar[0].bottledBeer;
        category = "BottledBeer";
      } else if (wineBtnValue === true) {
        thisArray = foodMenuBar[0].wine;
        category = "Wine";
      } else if (champagneBtnValue === true) {
        thisArray = foodMenuBar[0].champagne;
        category = "Champagne";
      } else if (vermouthBtnValue === true) {
        thisArray = foodMenuBar[0].vermouth;
        category = "Vermouth";
      } else if (aperativesBtnValue === true) {
        thisArray = foodMenuBar[0].aperatives;
        category = "Aperatives";
      } else if (rumBtnValue === true) {
        thisArray = foodMenuBar[0].rum;
        category = "Rum";
      } else if (cognacBtnValue === true) {
        thisArray = foodMenuBar[0].cognac;
        category = "Cognac";
      } else if (brandyBtnValue === true) {
        thisArray = foodMenuBar[0].brandy;
        category = "Brandy";
      } else if (whiskeyBtnValue === true) {
        thisArray = foodMenuBar[0].whiskey;
        category = "Whiskey";
      } else if (ginBtnValue === true) {
        thisArray = foodMenuBar[0].gin;
        category = "Gin";
      } else if (tequilaBtnValue === true) {
        thisArray = foodMenuBar[0].tequila;
        category = "Tequila";
      } else if (tincturesBtnValue === true) {
        thisArray = foodMenuBar[0].tinctures;
        category = "Tinctures";
      } else if (vodkaBtnValue === true) {
        thisArray = foodMenuBar[0].vodka;
        category = "Vodka";
      } else if (liqueursBtnValue === true) {
        thisArray = foodMenuBar[0].liqueurs;
        category = "Liqueurs";
      }
    }
    thisArray.forEach((item) => {
      if (item._id === cardId) {
        thisCard = thisArray.indexOf(item);
      }
    });

    if (userInfo.admin === false) {
      let thisGram;
      if (gram === undefined) {
        thisGram = 0;
      } else {
        thisGram = gram;
      }
      addToCart(title, description, price, thisGram, img);
    } else {
      console.log("индекс этой карточки:", thisCard);
      if (btnBar === true) {
        deleteElementInBarMenu(thisCard, category);
      } else {
        deleteElementInMenu(thisCard, category);
      }
    }
  };

  const findIndex = () => {
    let thisCard;
    foodArray.forEach((item) => {
      if (item._id === cardId) {
        thisCard = foodArray.indexOf(item);
      }
    });

    deleteFromCart(thisCard);
  };
  return (
    <div className="foodCard" onClick={cart ? findIndex : onClickCard}>
      <img className="foodCard__image" src={img} alt={title} />
      <div className="foodCard__text-container">
        {" "}
        <h3 className="foodCard__title">{title}</h3>
        <h4 className="foodCard__price">{price}</h4>
      </div>
      <p className="foodCard__description">
        {btnBar ? "Страна:" : "Состав:"} {description}
      </p>
      {gram !== undefined && <p className="foodCard__gram">Грамм: {gram}</p>}
      <button
        className={`foodCard__btn-add ${
          (cart || userInfo.admin === true) && "foodCard__btn-trash"
        }`}
      ></button>
    </div>
  );
};

export default FoodCard;
