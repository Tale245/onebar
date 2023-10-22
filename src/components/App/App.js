import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useEffect, useState } from "react";
import userApi from "../../utils/UserApi";
import food from "../../utils/FoodApi";
import orderApi from "../../utils/OrderApi";
import Orders from "../Orders/Orders";
import Signin from "../SignIn/SignIn";
import auth from "../../utils/Auth";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [foodMenu, setFoodMenu] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cost, setCost] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Кнопки меню
  const [pizzaBtnValue, setPizzaBtnValue] = useState(false);
  const [soupsBtnValue, setSoupsBtnValue] = useState(false);
  const [snacksBtnValue, setSnacksBtnValue] = useState(false);
  const [coldSnacksBtnValue, setColdSnacksBtnValue] = useState(false);
  const [saladsBtnValue, setSaladsBtnValue] = useState(false);
  const [pastesBtnValue, setPastesBtnValue] = useState(false);
  const [beerSnacksBtnValue, setBeerSnacksBtnValue] = useState(false);
  const [hotDishesBtnValue, setHotDishesBtnValue] = useState(false);

  // Попап добавления позиции в меню
  const [isPopupAddItemOpen, setIsPopupAddItemOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  });

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      userApi.getMyInfo().then((data) => {
        console.log(1)
        setUserInfo(data);
      });
      food.getFoods().then((data) => {
        console.log(2)
        setFoodMenu(data);
        setColdSnacksBtnValue(true);
      });
      // setInterval(() => {
   
      // }, 3000);
      orderApi.getOrders().then((data) => {
        setOrders(data)
      console.log(3)
      });
    }
  }, [isLoggedIn]);

  const openPopupAddItem = () => {
    setIsPopupAddItemOpen(true);
  };
  const closePopups = () => {
    setIsPopupAddItemOpen(false);
  };

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

  const createOrder = (nameWhoOrder, foods, price, doneStatus) => {
    orderApi
      .createOrder(nameWhoOrder, foods, price, doneStatus)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  const updateDoneStatus = (doneStatus, id) => {
    orderApi
      .updateDoneStatus(doneStatus, id)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  const clearCart = () => {
    userApi.clearCart().then((data) => {
      userApi.getMyInfo().then((data) => {
        setUserInfo(data);
        setCost(0);
      });
    });
  };

  const addNewElementInMenu = (
    newItem,
    name,
    description,
    price,
    cal,
    linkImage
  ) => {
    food
      .addNewElementInMenu(newItem, name, description, price, cal, linkImage)
      .then((data) => {
        console.log(data);
        food.getFoods().then((data) => {
          setFoodMenu(data);
          setColdSnacksBtnValue(true);
        });
      });
  };

  const deleteElementInMenu = (index, deleteItem) => {
    food.deleteElementInMenu(index, deleteItem).then((data) => {
      console.log(data);
      food.getFoods().then((data) => {
        setFoodMenu(data);
      });
    });
  };
  const signin = (email, password, codeWord) => {
    auth.signin(email, password, codeWord).then((data) => {
      console.log("Успешная авторизация!");
      setIsLoggedIn(true);
      console.log(userInfo);
      if (userInfo.admin === true) {
        debugger;
        navigate("/orders");
      } else {
        navigate("/main");
      }
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
                clearCart={clearCart}
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
                pizzaBtnValue={pizzaBtnValue}
                soupsBtnValue={soupsBtnValue}
                snacksBtnValue={snacksBtnValue}
                coldSnacksBtnValue={coldSnacksBtnValue}
                saladsBtnValue={saladsBtnValue}
                pastesBtnValue={pastesBtnValue}
                beerSnacksBtnValue={beerSnacksBtnValue}
                hotDishesBtnValue={hotDishesBtnValue}
                setPizzaBtnValue={setPizzaBtnValue}
                setSoupsBtnValue={setSoupsBtnValue}
                setSnacksBtnValue={setSnacksBtnValue}
                setColdSnacksBtnValue={setColdSnacksBtnValue}
                setSaladsBtnValue={setSaladsBtnValue}
                setPastesBtnValue={setPastesBtnValue}
                setBeerSnacksBtnValue={setBeerSnacksBtnValue}
                setHotDishesBtnValue={setHotDishesBtnValue}
                deleteElementInMenu={deleteElementInMenu}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                orders={orders}
                updateDoneStatus={updateDoneStatus}
                openPopupAddItem={openPopupAddItem}
                isPopupAddItemOpen={isPopupAddItemOpen}
                closePopups={closePopups}
                addNewElementInMenu={addNewElementInMenu}
              />
            }
          />
          <Route path="/signin" element={<Signin signin={signin} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
