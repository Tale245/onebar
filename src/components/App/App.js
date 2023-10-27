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
import UsersList from "../UsersList/UsersList";
import PopupAddItem from "../PopupAddItem/PopupAddItem";
import MyOrders from "../MyOrders/MyOrders";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [orders, setOrders] = useState([]);

  const [cost, setCost] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Кнопки меню
  const [foodMenu, setFoodMenu] = useState([]);

  const [pizzaBtnValue, setPizzaBtnValue] = useState(false);
  const [soupsBtnValue, setSoupsBtnValue] = useState(false);
  const [snacksBtnValue, setSnacksBtnValue] = useState(false);
  const [coldSnacksBtnValue, setColdSnacksBtnValue] = useState(false);
  const [saladsBtnValue, setSaladsBtnValue] = useState(false);
  const [pastesBtnValue, setPastesBtnValue] = useState(false);
  const [beerSnacksBtnValue, setBeerSnacksBtnValue] = useState(false);
  const [hotDishesBtnValue, setHotDishesBtnValue] = useState(false);

  // Кнопки бара меню
  const [foodMenuBar, setFoodMenuBar] = useState([]);

  const [cigarettesBtnValue, setCigarettesBtnValue] = useState(false);
  const [hookahsBtnValue, setHookahsBtnValue] = useState(false);
  const [juiceBtnValue, setJuiceBtnValue] = useState(false);
  const [coffeesBtnValue, setCoffeeBtnValue] = useState(false);
  const [teaBtnValue, setTeaBtnValue] = useState(false);
  const [bottledBeerBtnValue, setBottledBeerBtnValue] = useState(false);
  const [wineBtnValue, setWineBtnValue] = useState(false);
  const [champagneBtnValue, setChampagneBtnValue] = useState(false);
  const [vermouthBtnValue, setVermouthBtnValue] = useState(false);
  const [aperativesBtnValue, setAperativesBtnValue] = useState(false);
  const [rumBtnValue, setRumBtnValue] = useState(false);
  const [cognacBtnValue, setCognacBtnValue] = useState(false);
  const [brandyBtnValue, setBrandyBtnValue] = useState(false);
  const [whiskeyBtnValue, setWhiskeyBtnValue] = useState(false);
  const [ginBtnValue, setGinBtnValue] = useState(false);
  const [tequilaBtnValue, setTequilaBtnValue] = useState(false);
  const [tincturesBtnValue, setTincturesBtnValue] = useState(false);
  const [vodkaBtnValue, setVodkaBtnValue] = useState(false);
  const [liqueursBtnValue, setLiqueursBtnValue] = useState(false);

  const [isPopupAddItemOpen, setIsPopupAddItemOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);

  const [btnFood, setBtnFood] = useState(true);
  const [btnBar, setBtnBar] = useState(false);

  const [btnHistoryOrders, setBtnHistoryOrders] = useState(false);
  const [btnOrders, setBtnOrders] = useState(true);

  const [isUserCartEmpty, setIsUserCartEmpty] = useState(false);
  const [isUserCreateOrder, setIsUserCreateOrder] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      console.log(1);
      userApi.getUsers().then((data) => setUserList(data));
      userApi.getMyInfo().then((data) => {
        console.log(2);
        setDataLoad(true);
        setUserInfo(data);
        if (data.foods.length === 0) {
          setIsUserCartEmpty(true);
          setIsUserCreateOrder(false);
        } else {
          setIsUserCartEmpty(false);
          setIsUserCreateOrder(false);
        }
      });
      food.getFoods().then((data) => {
        setFoodMenu(data);
        console.log(3);
        setColdSnacksBtnValue(true);
      });
      food.getFoodBar().then((data) => {
        setFoodMenuBar(data);
        setCigarettesBtnValue(true);
      });
      console.log(4);
      orderApi.getOrders().then((data) => {
        setOrders(data);
      });
    }
  }, [isLoggedIn]);

  // Получаем информацию о пользователе и карточки с позициями для меню

  // useEffect(() => {
  //   console.log(isLoggedIn);
  //   if (isLoggedIn) {
  //     if (userInfo.admin === true) {
  //       window.setInterval(() => {
  //         console.log(2.2);
  //         orderApi.getOrders().then((data) => {
  //           setOrders(data);
  //         });
  //         userApi.getUsers().then((data) => setUserList(data));
  //       }, 10000);
  //     } else if (userInfo.admin === false) {
  //       window.setInterval(() => {
  //         console.log(1.1);
  //         userApi.getMyInfo().then((data) => {
  //           setUserInfo(data);
  //         });
  //         food.getFoods().then((data) => {
  //           setFoodMenu(data);
  //           console.log(3.3);
  //           // setColdSnacksBtnValue(true);
  //         });
  //         orderApi.getOrders().then((data) => {
  //           setOrders(data);
  //         });
  //       }, 10000);
  //     }
  //     setInterval(() => {
  //       window.location.reload();
  //     }, 604800000);
  //     return () => clearInterval();
  //   }
  // }, [dataLoad]);

  const openPopupAddItem = () => {
    setIsPopupAddItemOpen(true);
  };
  const closePopups = () => {
    setIsPopupAddItemOpen(false);
  };

  const addToCart = (name, description, price, gram, imageLink) => {
    userApi
      .addToCart(name, description, price, gram, imageLink)
      .then((data) => {
        console.log(data);
        setIsUserCartEmpty(false);
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
            setIsUserCartEmpty(true);
          }
        });
      })
      .catch((e) => console.log(e));
  };

  const createOrder = (nameWhoOrder, foods, price, doneStatus) => {
    orderApi
      .createOrder(nameWhoOrder, foods, price, doneStatus)
      .then((data) => {
        orderApi.getOrders().then((data) => {
          setOrders(data);
        });
        console.log(data);
        setIsUserCreateOrder(true);
        setIsUserCartEmpty(false);
        setTimeout(() => {
          setIsUserCreateOrder(false);
          setIsUserCartEmpty(true);
        }, 5000);
      })
      .catch((e) => console.log(e));
  };

  const updateDoneStatus = (doneStatus, id) => {
    orderApi
      .updateDoneStatus(doneStatus, id)
      .then((data) => {
        orderApi.getOrders().then((data) => setOrders(data));
      })
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
    gram,
    linkImage
  ) => {
    food
      .addNewElementInMenu(newItem, name, description, price, gram, linkImage)
      .then((data) => {
        console.log(data);
        food.getFoods().then((data) => {
          setFoodMenu(data);
        });
      });
  };
  const addNewElementInBarMenu = (
    newItem,
    name,
    description,
    price,
    gram,
    linkImage
  ) => {
    food
      .addNewElementInMenu(newItem, name, description, price, gram, linkImage)
      .then((data) => {
        console.log(data);
        food.getFoodBar().then((data) => {
          setFoodMenuBar(data);
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

  const deleteElementInBarMenu = (index, deleteItem) => {
    debugger
    food.deleteElementInMenu(index, deleteItem).then((data) => {
      console.log(data);
      food.getFoodBar().then((data) => setFoodMenuBar(data));
    });
  };
  const signin = (email, password, codeWord) => {
    auth.signin(email, password, codeWord).then((data) => {
      debugger;
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
  const changeLimit = (limit, id) => {
    userApi.changeLimit(limit, id).then((data) => {
      console.log(data);
      userApi.getUsers().then((data) => setUserList(data));
    });
  };
  const download = (object, name) => {
    orderApi.downLoad(object, name).then((data) => console.log(data));
  };
  return (
    <div className="app">
      <Header userInfo={userInfo} btnBar={btnBar} cost={cost}/>
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
                changeLimit={changeLimit}
                btnBar={btnBar}
                isUserCartEmpty={isUserCartEmpty}
                isUserCreateOrder={isUserCreateOrder}
                setIsUserCreateOrder={setIsUserCreateOrder}
                setIsUserCartEmpty={setIsUserCartEmpty}
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
                setCigarettesBtnValue={setCigarettesBtnValue}
                setJuiceBtnValue={setJuiceBtnValue}
                setHookahsBtnValue={setHookahsBtnValue}
                setCoffeeBtnValue={setCoffeeBtnValue}
                setTeaBtnValue={setTeaBtnValue}
                setBottledBeerBtnValue={setBottledBeerBtnValue}
                setWineBtnValue={setWineBtnValue}
                setChampagneBtnValue={setChampagneBtnValue}
                setVermouthBtnValue={setVermouthBtnValue}
                setAperativesBtnValue={setAperativesBtnValue}
                setRumBtnValue={setRumBtnValue}
                setCognacBtnValue={setCognacBtnValue}
                setBrandyBtnValue={setBrandyBtnValue}
                setWhiskeyBtnValue={setWhiskeyBtnValue}
                setGinBtnValue={setGinBtnValue}
                setTequilaBtnValue={setTequilaBtnValue}
                setTincturesBtnValue={setTincturesBtnValue}
                setVodkaBtnValue={setVodkaBtnValue}
                setLiqueursBtnValue={setLiqueursBtnValue}
                deleteElementInMenu={deleteElementInMenu}
                openPopupAddItem={openPopupAddItem}
                isPopupAddItemOpen={isPopupAddItemOpen}
                closePopups={closePopups}
                addNewElementInMenu={addNewElementInMenu}
                btnBar={btnBar}
                setBtnBar={setBtnBar}
                btnFood={btnFood}
                setBtnFood={setBtnFood}
                foodMenuBar={foodMenuBar}
                deleteElementInBarMenu={deleteElementInBarMenu}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                orders={orders}
                updateDoneStatus={updateDoneStatus}
                btnOrders={btnOrders}
                btnHistoryOrders={btnHistoryOrders}
                setBtnOrders={setBtnOrders}
                setBtnHistoryOrders={setBtnHistoryOrders}
                download={download}
                userInfo={userInfo}
              />
            }
          />
          <Route path="/signin" element={<Signin signin={signin} />} />
          <Route
            path="/userList"
            element={
              <UsersList userList={userList} changeLimit={changeLimit} />
            }
          />
          <Route
            path="/myOrders"
            element={<MyOrders orders={orders} userInfo={userInfo} />}
          />
        </Routes>
        <PopupAddItem
          isPopupAddItemOpen={isPopupAddItemOpen}
          closePopups={closePopups}
          addNewElementInMenu={addNewElementInMenu}
          addNewElementInBarMenu={addNewElementInBarMenu}
          btnBar={btnBar}
        />
      </div>
    </div>
  );
}

export default App;
