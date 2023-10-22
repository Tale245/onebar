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
  deleteElementInMenu,
}) => {
  let valueArray = foodArray;
  let title = "";
  console.log(foodArray)
  const whatValue = () => {
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
  };

  whatValue();

  return (
    <div className="foodList">
      <h1 className="foodList__title">{title}</h1>
      <div className="foodList__container">
        {valueArray &&
          valueArray.map((item) => (
            <FoodCard
              title={item.name}
              img={item.linkImage ? item.linkImage : item.imageLink}
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
              deleteElementInMenu={deleteElementInMenu}
              pizzaBtnValue={pizzaBtnValue}
              soupsBtnValue={soupsBtnValue}
              coldSnacksBtnValue={coldSnacksBtnValue}
              snacksBtnValue={snacksBtnValue}
              saladsBtnValue={saladsBtnValue}
              pastesBtnValue={pastesBtnValue}
              beerSnacksBtnValue={beerSnacksBtnValue}
              hotDishesBtnValue={hotDishesBtnValue}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodList;
