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
}) => {
  const whatIsCost = () => {
    let price = [];
    userInfo.foods?.forEach((item) => {
      price.push(item.price);
    })

    const sum = price.reduce((total, num) => total + num, 0);

    setCost(sum);
  };

  useEffect(() => {
    whatIsCost();
  });

  const onClickCard = () => {
    addToCart(title, description, price, cal, img);
  };

  const findIndex = () => {
    let thisCard;
    foodArray.forEach((item) => {
      if (item._id === cardId) {
        thisCard = foodArray.indexOf(item);
      }
    });
    console.log("индекс этой карточки:", thisCard);

    deleteFromCart(thisCard);
  };

  return (
    <div className="foodCard" onClick={cart ? findIndex : onClickCard}>
      <img className="foodCard__image" src={img} />
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
