import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useEffect, useState } from "react";
import userApi from "../../utils/UserApi";
import food from "../../utils/FoodApi";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [foodMenu, setFoodMenu] = useState([]);

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    userApi.getMyInfo().then((data) => {
      console.log(data);
      setUserInfo(data);
    });
    food.getFoods().then((data) => {
      setFoodMenu(data);
      console.log(data);
    });
  }, []);

  const addToCart = (name, description, price, cal, imageLink) => {
    userApi
      .addToCart(name, description, price, cal, imageLink)
      .then((data) => {
        console.log(data);
        userApi.getMyInfo().then((data) => {
          console.log(data);
          setUserInfo(data);
        });
      })
      .catch((e) => console.log(e));
  };
  const deleteFromCart = (index) => {
    userApi
      .deleteFromCart(index)
      .then((data) => {
        console.log(data);
        userApi.getMyInfo().then((data) => {
          console.log(data);
          setUserInfo(data);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="app">
      <Header userInfo={userInfo} />
      <div className="app__container">
        <Routes>
          <Route
            path="/basket"
            element={
              <Basket
                userInfo={userInfo}
                foodMenu={foodMenu}
                deleteFromCart={deleteFromCart}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                userInfo={userInfo}
                foodMenu={foodMenu}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
