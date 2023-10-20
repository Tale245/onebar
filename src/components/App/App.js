import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import { Routes, Route} from "react-router-dom";
import Basket from "../Basket/Basket";
import { useEffect, useState } from "react";
import userApi from "../../utils/UserApi";
import food from "../../utils/FoodApi";
import order from "../../utils/OrderApi";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [foodMenu, setFoodMenu] = useState([]);

  const [cost, setCost] = useState(0);

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
          if (userInfo.foods.length <= 1) {
            setCost(0);
          }
        });
      })
      .catch((e) => console.log(e));
  };

  const createOrder = (nameWhoOrder, foods, price) => {
    order.createOrder(nameWhoOrder, foods, price).then((data) => {
      console.log(data);
    });
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
                cost={cost}
                setCost={setCost}
                createOrder={createOrder}
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
                cost={cost}
                setCost={setCost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
