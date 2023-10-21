import React, { useEffect } from "react";

import "./FoodList.css";
import FoodCard from "../FoodCard/FoodCard";

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
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
}) => {
  console.log(
    pizzaBtnValue,
    soupsBtnValue,
    snacksBtnValue,
    saladsBtnValue,
    pastesBtnValue,
    beerSnacksBtnValue,
    hotDishesBtnValue
  );

  let valueArray = foodArray;
  let title = "";
  let allFalse = false;
  console.log(foodArray);
  const whatValue = () => {
    if (pizzaBtnValue === true) {
      valueArray = foodArray[0].pizza;
      title = foodArray[0].pizzaTitle;
    } else if (soupsBtnValue === true) {
      valueArray = foodArray[0].soups;
      title = foodArray[0].soupsTitle;
    } else if (snacksBtnValue === true) {
      valueArray = foodArray[0].snacks;
      title = foodArray[0].snackTitle;
    } else if (coldSnacksBtnValue === true) {
      valueArray = foodArray[0].snacks;
      title = foodArray[0].coldSnacksTitle;
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
    } else {
      allFalse = true;
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
              img="https://images.unsplash.com/photo-1696802537968-6c5b792f40cf?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title={item.name}
              price={item.price}
              description={item.description}
              cal={item.ccal}
              key={item._id}
              addToCart={addToCart}
              foodArray={foodArray}
              cardId={item._id}
              cart={cart}
              deleteFromCart={deleteFromCart}
              userInfo={userInfo}
              setCost={setCost}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodList;
