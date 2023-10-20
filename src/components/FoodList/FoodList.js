import React from "react";

import "./FoodList.css";
import FoodCard from "../FoodCard/FoodCard";

const FoodList = ({ foodArray, title, addToCart, cart, deleteFromCart }) => {
  return (
    <div className="foodList">
      <h1 className="foodList__title">{title}</h1>
      <div className="foodList__container">
        {foodArray &&
          foodArray.map((item) => (
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
            />
          ))}
      </div>
    </div>
  );
};

export default FoodList;
