import React, { useEffect } from "react";

import "./FoodCard.css";

const FoodCard = ({
  img,
  title,
  price,
  description,
  cal,
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
}) => {
  let category
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
    if (pizzaBtnValue === true) {
      thisArray = foodArray[0].pizza;
      category = 'Pizza'
    } else if (soupsBtnValue === true) {
      thisArray = foodArray[0].soups;
      category = 'Soups'
    } else if (snacksBtnValue === true) {
      thisArray = foodArray[0].snacks;
      category = 'Snacks'
    } else if (coldSnacksBtnValue === true) {
      thisArray = foodArray[0].coldSnacks;
      category = 'ColdSnacks'
    } else if (saladsBtnValue === true) {
      thisArray = foodArray[0].salads;
      category = "Salads"
    } else if (pastesBtnValue === true) {
      thisArray = foodArray[0].pastes;
      category = "Pastes"
    } else if (beerSnacksBtnValue === true) {
      thisArray = foodArray[0].beerSnacks;
      category = 'BeerSnack'
    } else if (hotDishesBtnValue === true) {
      thisArray = foodArray[0].hotDishes;
      category = 'HotDishes'
    }
    thisArray.forEach((item) => {
      if (item._id === cardId) {
        thisCard = thisArray.indexOf(item);
      }
    });

    if(userInfo.admin === false){
      addToCart(title, description, price, cal, img);
    } else {
      console.log('индекс этой карточки:', thisCard)
      deleteElementInMenu(thisCard, category)
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
      <p className="foodCard__description">{description}</p>
      <p className="foodCard__cal">Коллорийность: {cal}</p>
      <button className="foodCard__btn-add"></button>
    </div>
  );
};

export default FoodCard;
