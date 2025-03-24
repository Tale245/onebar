import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useEffect, useRef, useState } from "react";
import userApi from "../../utils/UserApi";
import food from "../../utils/FoodApi";
import orderApi from "../../utils/OrderApi";
import Orders from "../Orders/Orders";
import Signin from "../SignIn/SignIn";
import auth from "../../utils/Auth";
import UsersList from "../UsersList/UsersList";
import PopupAddItem from "../PopupAddItem/PopupAddItem";
import MyOrders from "../MyOrders/MyOrders";
import PageNotFound from "../PageNotFound/PageNotFound";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import receiptApi from "../../utils/ReceiptApi";
import Receipt from "../Receipt/Receipt";
import Receipts from "../Receipts/Receipts";
import PopupNewOrder from "../PopupNewOrder/PopupNewOrder";
import PopupChangeInfo from "../PopupChangeInfo/PopupChangeInfo";

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
  const [iceCreamBtnValue, setIceCreamBtnValue] = useState(false);
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
  const [cocktailsBtnValue, setCocktailsBtnValue] = useState(false);
  const [shotsBtnValue, setShotsBtnValue] = useState(false);

  const [isPopupAddItemOpen, setIsPopupAddItemOpen] = useState(false);
  const [isPopupConfirmOpen, setIsPopupConfirmOpen] = useState(false);
  const [isPopupNewOrderOpen, setIsPopupNewOrderOpen] = useState(false);
  const [isPopupChangeInfoOpen, setIsPopupChangeInfoOpen] = useState(false);
  const [cardId, setIsCardId] = useState("");
  const [isHideChangeInfo, setIsHideChangeInfo] = useState(false);
  const [userList, setUserList] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);

  const [btnFood, setBtnFood] = useState(true);
  const [btnBar, setBtnBar] = useState(false);

  const [btnHistoryOrders, setBtnHistoryOrders] = useState(false);
  const [btnOrders, setBtnOrders] = useState(true);

  const [isUserCartEmpty, setIsUserCartEmpty] = useState(false);
  const [isUserCreateOrder, setIsUserCreateOrder] = useState(false);

  const [deleteCard, setDeleteCard] = useState({});

  const [receipts, setReceipts] = useState([]);
  const [priceReceipt, setPriceReceipt] = useState(0);

  const [id, setId] = useState("6568ef019925afaa13ad69a2");

  const navigate = useNavigate();

  const downloadedOrders = useRef(new Set()); // Храним ID уже скачанных заказов
  const [prevOrdersState, setPrevOrdersState] = useState([]); // Храним предыдущее состояние заказов

  useEffect(() => {
    // Загружаем из localStorage уже скачанные заказы
    const savedDownloadedOrders =
      JSON.parse(localStorage.getItem("downloadedOrders")) || [];
    savedDownloadedOrders.forEach((orderId) =>
      downloadedOrders.current.add(orderId)
    );

    setPrevOrdersState(savedDownloadedOrders);
  }, []); // Выполняется только при загрузке компонента

  useEffect(() => {
    if (!orders || orders.length === 0) return; // Если заказов нет – выходим

    console.log("Проверка заказов:", orders);

    // Смотрим, изменилось ли содержимое заказов
    const newOrders = orders
      .map((order) => ({
        ...order,
        foods: order.foods.filter((food) => food.category !== "Напиток"), // Убираем напитки
      }))
      .filter((order) => order.foods.length > 0); // Исключаем заказы, где остались только напитки

    // Если новых заказов нет – выходим
    if (newOrders.length === 0) return;

    // Выбираем заказ, который ещё не скачан
    const newOrder = newOrders.find(
      (order) => !downloadedOrders.current.has(order._id)
    );

    if (!newOrder) return; // Если все заказы уже скачаны – выходим

    console.log("Скачиваю новый заказ:", newOrder);

    // Скачиваем новый заказ
    downloadItem(newOrder.foods, newOrder.nameWhoOrders, newOrder._id, 0, true);

    // Отмечаем заказ как скачанный
    downloadedOrders.current.add(newOrder._id);

    // Сохраняем ID скачанных заказов в localStorage
    localStorage.setItem(
      "downloadedOrders",
      JSON.stringify(Array.from(downloadedOrders.current))
    );

    // Обновляем состояние предыдущих заказов
    setPrevOrdersState(newOrders);
  }, [orders]); // Следим за изменением orders

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate("/signin");
    }
  }, []);

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      userApi.getUsers().then((data) => setUserList(data));
      userApi.getMyInfo().then((data) => {
        setDataLoad(true);
        setUserInfo(data);
        if (data.foods.length === 0) {
          setIsUserCartEmpty(true);
          setIsUserCreateOrder(false);
        } else {
          setIsUserCartEmpty(false);
          setIsUserCreateOrder(false);
        }
        console.log(data);
        if (data.name === "Стол 1") {
          setId("6568ef249925afaa13ad69a4");
        } else if (data.name === "Стол 2") {
          setId("6568f19e9925afaa13ad69f3");
        } else if (data.name === "admin") {
          setId("6568ee919925afaa13ad699f");
        } else if (data.name === "Стол 3") {
          setId("6568f1a39925afaa13ad69f6");
        } else if (data.name === "Стол 4") {
          setId("6568f1a69925afaa13ad69fc");
        } else if (data.name === "Стол 5") {
          setId("6568f1a89925afaa13ad69ff");
        } else if (data.name === "Стол 6") {
          setId("6568f1aa9925afaa13ad6a02");
        } else if (data.name === "Стол 7") {
          setId("6568f1ac9925afaa13ad6a05");
        } else if (data.name === "Стол 8") {
          setId("6568f1b29925afaa13ad6a0b");
        } else if (data.name === "Стол 9") {
          setId("6568f1b49925afaa13ad6a0e");
        } else if (data.name === "Стол 10") {
          setId("6568f1b69925afaa13ad6a11");
        } else if (data.name === "Стол 11") {
          setId("6568f1b99925afaa13ad6a17");
        }
      });
      food.getFoods().then((data) => {
        setFoodMenu(data);
        setColdSnacksBtnValue(true);
      });
      food.getFoodBar().then((data) => {
        setFoodMenuBar(data);
        setCigarettesBtnValue(true);
      });
      orderApi.getOrders().then((data) => {
        setOrders(data);
      });
      receiptApi.getReceipt().then((data) => {
        debugger
        setReceipts(data);
      });
      receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data));
    }
  }, [isLoggedIn]);

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      if (userInfo.admin === true) {
        window.setInterval(() => {
          orderApi.getOrders().then((data) => {
            setOrders(data);
          });
          userApi.getUsers().then((data) => setUserList(data));
          receiptApi.getReceipt().then((data) => {
            setReceipts(data);
          });
        }, 5000);
      } else if (userInfo.admin === false) {
        window.setInterval(() => {
          userApi.getMyInfo().then((data) => {
            setUserInfo(data);
          });
          food.getFoods().then((data) => {
            setFoodMenu(data);
          });
          food.getFoodBar().then((data) => {
            setFoodMenuBar(data);
          });
          orderApi.getOrders().then((data) => {
            setOrders(data);
          });
          receiptApi.getReceipt().then((data) => {
            setReceipts(data);
          });
          userApi.getUsers().then((data) => setUserList(data));
        }, 5000);
      }
      // setInterval(() => {
      //   window.location.reload();
      // }, 604800000);
      return () => clearInterval();
    }
  }, [dataLoad]);

  const openPopupAddItem = () => {
    setIsPopupAddItemOpen(true);
  };
  const openPopupChangeInfo = (cardId, value) => {
    setIsCardId(cardId);
    setIsHideChangeInfo(value);
    setIsPopupChangeInfoOpen(true);
  };

  const closePopups = () => {
    setIsPopupAddItemOpen(false);
    setIsPopupConfirmOpen(false);
    setIsPopupNewOrderOpen(false);
    setIsPopupChangeInfoOpen(false);
  };

  const addToCart = (name, description, price, gram, imageLink, category) => {
    userApi
      .addToCart(name, description, price, gram, imageLink, category)
      .then((data) => {
        console.log(data);
        setIsUserCartEmpty(false);
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data));
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
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data));
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

  const download = (object, name, dateNow) => {
    orderApi.download(object, name, dateNow).then((data) => console.log(data));
  };

  const downloadItem = (item, nameWhoOrders, _id, price, value) => {
    if (userInfo.name !== "admin") {
      console.log("Скачивание запрещено: аккаунт не админ.");
      if (userInfo.name === "официант") {
        setIsPopupNewOrderOpen(value);
      }
      return;
    }
    let itemsArray = [];
    if (item.foods) {
      itemsArray = item.foods;
    } else {
      itemsArray = item;
    }
    let array = [];
    itemsArray.forEach((item) => {
      array.push(`${item.name} - ${item.price} рублей`);
    });
    array.unshift("  ");
    array.unshift("Название:     Цена:");
    array.unshift("  ");
    array.unshift(nameWhoOrders);
    array.unshift("  ");

    let date = new Date();
    let dateNow = date.toLocaleString("en-US", { timeZone: "Europe/Moscow" });
    array.push(" ");
    array.push(`ИТОГ: ${price} рублей`);
    array.push(" ");
    array.push("Подпись официанта ____________");
    array.push(" ");

    array.push(dateNow);

    download(array, _id, dateNow);
  };
  const createOrder = (nameWhoOrder, foods, price, doneStatus) => {
    orderApi
      .createOrder(nameWhoOrder, foods, price, doneStatus)
      .then((data) => {
        orderApi.getOrders().then((data) => {
          setOrders(data);
        });
        setIsUserCreateOrder(true);
        setIsUserCartEmpty(false);
        setTimeout(() => {
          setIsUserCreateOrder(false);
          setIsUserCartEmpty(true);
        }, 5000);
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data));
      })
      .catch((e) => console.log(e));
    foods.forEach((item) => {
      receiptApi.addToReceipt(
        item.name,
        item.description,
        item.price,
        item.gram,
        item.imageLink,
        id
      )
      // .then((data) => {
      //   debugger;
      //   receiptApi.changePrice(priceReceipt.price + price, id).then(() => {
      //     receiptApi.findMyReceipt(id).then((data) => {
      //       setPriceReceipt(data);
      //       receiptApi.getReceipt();
      //     });
      //   });
      // });
    });
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
        food.getFoods().then((data) => {
          setFoodMenu(data);
        });
      });
  };

  const changeValueOfMenuElement = (
    nameOfCategory,
    categoryValue,
    newValue,
    objectId
  ) => {
    food
      .changeElementValueInMenu(
        nameOfCategory,
        categoryValue,
        newValue,
        objectId
      )
      .then((data) =>
        food.getFoods().then((data) => {
          setFoodMenu(data);
        })
      );
  };
  const changeValueOfBarMenuElement = (
    nameOfCategory,
    categoryValue,
    newValue,
    objectId
  ) => {
    food
      .changeElementValueInBarMenu(
        nameOfCategory,
        categoryValue,
        newValue,
        objectId
      )
      .then((data) =>
        food.getFoodBar().then((data) => {
          setFoodMenuBar(data);
        })
      );
  };
  const addNewElementInBarMenu = (
    newItem,
    name,
    description,
    price,
    gram,
    linkImage,
    category
  ) => {
    food
      .addNewElementInMenu(
        newItem,
        name,
        description,
        price,
        gram,
        linkImage,
        category
      )
      .then((data) => {
        food.getFoodBar().then((data) => {
          setFoodMenuBar(data);
        });
      });
  };

  const deleteElementInMenu = (index, deleteItem) => {
    food.deleteElementInMenu(index, deleteItem).then((data) => {
      food.getFoods().then((data) => {
        setFoodMenu(data);
        closePopups();
      });
    });
  };

  const deleteElementInBarMenu = (index, deleteItem) => {
    food.deleteElementInMenu(index, deleteItem).then((data) => {
      food.getFoodBar().then((data) => {
        setFoodMenuBar(data);
        closePopups();
      });
    });
  };
  const signin = (email, password, codeWord) => {
    auth.signin(email, password, codeWord).then((data) => {
      console.log("Успешная авторизация!");
      setIsLoggedIn(true);
      if (userInfo.admin === true) {
        navigate("/orders");
      } else {
        navigate("/main");
      }
    });
  };
  const changeLimit = (limit, id) => {
    userApi.changeLimit(limit, id).then((data) => {
      userApi.getUsers().then((data) => setUserList(data));
    });
  };
  // const download = (object, name) => {
  //   orderApi.downLoad(object, name).then((data) => console.log(data));
  // };

  const openPopupConfirm = (thisCard, category) => {
    setDeleteCard({ thisCard, category });
    setIsPopupConfirmOpen(true);
  };

  const clearReceipt = (id, userId) => {
    receiptApi.clearReceipt(id).then((data) => {
      receiptApi.changePrice(0, id).then((data) => {
        receiptApi.getReceipt().then((data) => {
          setReceipts(data);
          changeLimit(0, userId);
        });
      });
    });
  };
  return (
    <div className="app">
      <Header userInfo={userInfo} btnBar={btnBar} cost={cost} />
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
                downloadItem={downloadItem}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                openPopupConfirm={openPopupConfirm}
                userInfo={userInfo}
                foodMenu={foodMenu}
                addToCart={addToCart}
                cost={cost}
                setCost={setCost}
                pizzaBtnValue={pizzaBtnValue}
                soupsBtnValue={soupsBtnValue}
                snacksBtnValue={snacksBtnValue}
                coldSnacksBtnValue={coldSnacksBtnValue}
                iceCreamBtnValue={iceCreamBtnValue}
                saladsBtnValue={saladsBtnValue}
                pastesBtnValue={pastesBtnValue}
                beerSnacksBtnValue={beerSnacksBtnValue}
                hotDishesBtnValue={hotDishesBtnValue}
                setPizzaBtnValue={setPizzaBtnValue}
                setSoupsBtnValue={setSoupsBtnValue}
                setSnacksBtnValue={setSnacksBtnValue}
                setColdSnacksBtnValue={setColdSnacksBtnValue}
                setIceCreamBtnValue={setIceCreamBtnValue}
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
                cocktailsBtnValue={cocktailsBtnValue}
                shotsBtnValue={shotsBtnValue}
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
                setCocktailsBtnValue={setCocktailsBtnValue}
                setShotsBtnValue={setShotsBtnValue}
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
                deleteFromCart={deleteFromCart}
                openPopupChangeInfo={openPopupChangeInfo}
              />
            }
          />
          {(userInfo.admin === true || userInfo.waiter === true) && (
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
                  downloadItem={downloadItem}
                />
              }
            />
          )}
          {isLoggedIn === false && (
            <Route path="/signin" element={<Signin signin={signin} />} />
          )}
          {(userInfo.admin === true || userInfo.waiter === true) && (
            <Route
              path="/userList"
              element={
                <UsersList userList={userList} changeLimit={changeLimit} />
              }
            />
          )}
          <Route
            path="/myOrders"
            element={<MyOrders orders={orders} userInfo={userInfo} />}
          />
          <Route
            path="/receipts"
            element={
              <Receipts
                receipts={receipts}
                download={download}
                clearReceipt={clearReceipt}
                setId={setId}
              />
            }
          />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <PopupAddItem
          isPopupAddItemOpen={isPopupAddItemOpen}
          closePopups={closePopups}
          addNewElementInMenu={addNewElementInMenu}
          addNewElementInBarMenu={addNewElementInBarMenu}
          btnBar={btnBar}
        />
        <PopupConfirm
          deleteCard={deleteCard}
          isPopupConfirmOpen={isPopupConfirmOpen}
          closePopups={closePopups}
          deleteElementInMenu={deleteElementInMenu}
          deleteElementInBarMenu={deleteElementInBarMenu}
          btnBar={btnBar}
        />
        <PopupNewOrder
          isPopupNewOrderOpen={isPopupNewOrderOpen}
          closePopups={closePopups}
        />

        <PopupChangeInfo
          isPopupChangeInfoOpen={isPopupChangeInfoOpen}
          closePopups={closePopups}
          changeValueOfBarMenuElement={changeValueOfBarMenuElement}
          changeValueOfMenuElement={changeValueOfMenuElement}
          cardId={cardId}
          isHideChangeInfo={isHideChangeInfo}
          btnBar={btnBar}
          btnFood={btnFood}
          pizzaBtnValue={pizzaBtnValue}
          soupsBtnValue={soupsBtnValue}
          snacksBtnValue={snacksBtnValue}
          coldSnacksBtnValue={coldSnacksBtnValue}
          iceCreamBtnValue={iceCreamBtnValue}
          saladsBtnValue={saladsBtnValue}
          pastesBtnValue={pastesBtnValue}
          beerSnacksBtnValue={beerSnacksBtnValue}
          hotDishesBtnValue={hotDishesBtnValue}
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
          cocktailsBtnValue={cocktailsBtnValue}
          shotsBtnValue={shotsBtnValue}
        />
      </div>
    </div>
  );
}

export default App;
