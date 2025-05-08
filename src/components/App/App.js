import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import Basket from "../Basket/Basket";
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

  const [id, setId] = useState("6568f0ce9925afaa13ad69c6");

  const navigate = useNavigate();

  const downloadedOrders = useRef(new Set()); // Храним ID уже скачанных заказов
  const [prevOrdersState, setPrevOrdersState] = useState([]); // Храним предыдущее состояние заказов

  const location = useLocation();

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.35, ease: 'easeInOut' }
  };

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

    // Скачиваем новый заказ
    downloadItem1(newOrder.foods, newOrder.nameWhoOrders, newOrder._id, 0, true);

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
      navigate("/main");
      setIsLoggedIn(true);
    } else {
      navigate("/signin");
    }
  }, []);

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      userApi.getUsers().then((data) => setUserList(data)).catch((e) => console.log(e))
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
        const nameToTableId = {
          "Стол 1": "68178006cf0d216bc5fdfc46",
          "Стол 2": "6568f19e9925afaa13ad69f3",
          "официант": "6819e9a6a22a69f5f5d48e83",
          "Neon": "681782cecf0d216bc5fe1aed",
          "admin": "6568f0ce9925afaa13ad69c6",
          "Стол 3": "6568f1a39925afaa13ad69f6",
          "Стол 4": "6568f1a69925afaa13ad69fc",
          "Стол 5": "6568f1a89925afaa13ad69ff",
          "Стол 6": "6568f1aa9925afaa13ad6a02",
          "Стол 7": "6568f1ac9925afaa13ad6a05",
          "Стол 8": "6568f1b29925afaa13ad6a0b",
          "Стол 9": "6568f1b49925afaa13ad6a0e",
          "Стол 10": "6568f1b69925afaa13ad6a11",
          "Стол 11": "6568f1b99925afaa13ad6a17"
        };

        const tableId = nameToTableId[data.name];
        if (tableId) {
          setId(tableId);
        }
      }).catch((e) => console.log(e))
      food.getFoods().then((data) => {
        setFoodMenu(data);
        setColdSnacksBtnValue(true);
      }).catch((e) => console.log(e))
      food.getFoodBar().then((data) => {
        setFoodMenuBar(data);
        setCigarettesBtnValue(true);
      }).catch((e) => console.log(e))
      orderApi.getOrders().then((data) => {
        setOrders(data);
      }).catch((e) => console.log(e))
      receiptApi.getReceipt().then((data) => {
        setReceipts(data);
      }).catch((e) => console.log(e))
    }
  }, [isLoggedIn]);

  // Получаем информацию о пользователе и карточки с позициями для меню
  useEffect(() => {
    if (isLoggedIn) {
      let IntervalID
      if (userInfo.admin === true) {
        IntervalID = window.setInterval(() => {
          orderApi.getOrders().then((data) => {
            setOrders(data);
          });
          userApi.getUsers().then((data) => setUserList(data));
          receiptApi.getReceipt().then((data) => {
            setReceipts(data);
          });
        }, 5000);
      } else if (userInfo.admin === false) {
        IntervalID = window.setInterval(() => {
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
      return () => clearInterval(IntervalID);
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
      .then(() => {
        setIsUserCartEmpty(false);
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data)).catch((e) => console.log(e))
        userApi.getMyInfo().then((data) => {
          setUserInfo(data);
        }).catch((e) => console.log(e))
      }).catch((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const deleteFromCart = (index) => {
    userApi
      .deleteFromCart(index)
      .then(() => {
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data)).catch((e) => console.log(e))
        userApi.getMyInfo().then((data) => {
          setUserInfo(data);
          if (userInfo.foods.length <= 1) {
            setCost(0);
            setIsUserCartEmpty(true);
          }
        }).catch((e) => console.log(e))
      })
      .catch((e) => console.log(e));
  };

  const download = (object, name, dateNow, whoDownLoad) => {
    orderApi.download(object, name, dateNow, whoDownLoad).then((data) => console.log(data)).catch((e) => console.log(e))
  };

  const downloadItem1 = (item, nameWhoOrders, _id, price, value) => {
    if (userInfo.name !== "admin") {
      console.log("Скачивание запрещено: аккаунт не админ.");
      if (userInfo.name.toLowerCase() === "neon") {
        if (nameWhoOrders?.toLowerCase().includes("neon")) {
          setIsPopupNewOrderOpen(value);
        } else {
          console.log("Заказ не для неона.");
        }
        return;
      }

      if (userInfo.name.toLowerCase() === "официант") {
        setIsPopupNewOrderOpen(value);
        return;
      }
      return;
    }

    let itemsArray = item.foods ? item.foods : item;

    // Объект для хранения количества одинаковых позиций
    let itemCount = {};

    itemsArray.forEach((item) => {
      if (itemCount[item.name]) {
        itemCount[item.name].count += 1;
      } else {
        itemCount[item.name] = { count: 1, price: item.price };
      }
    });

    let array = [];

    Object.entries(itemCount).forEach(([name, data]) => {
      if (data.count > 1) {
        array.push(`${data.count}x ${name}`);
      } else {
        array.push(`${name}`);
      }
    });

    array.unshift("  ");
    array.unshift("Кол-во:     Название:");
    array.unshift("  ");
    array.unshift(nameWhoOrders);
    array.unshift("  ");

    let date = new Date();
    let dateNow = date.toLocaleString("en-US", { timeZone: "Europe/Moscow" });
    array.push(" ");
    array.push(" ");
    array.push("    КУХОННЫЙ ЧЕК");
    array.push(" ");


    download(array, _id, dateNow, 'printer-kitchen');
  };
  const downloadItem = (item, nameWhoOrders, _id, price) => {
    let itemsArray = Array.isArray(item.foods) ? item.foods : item;
    let itemCount = {};

    // Подсчет количества каждого товара
    itemsArray.forEach(({ name, price }) => {
      if (itemCount[name]) {
        itemCount[name].count += 1;
      } else {
        itemCount[name] = { count: 1, price };
      }
    });

    let array = [];
    for (const [name, { count, price }] of Object.entries(itemCount)) {
      const itemText = count > 1 ? `${count}x "${name}"` : name;
      array.push(`${itemText} - ${price * count} рублей`);
    }

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

    download(array, _id, dateNow, 'printer-waiter');
  };
  const createOrder = (nameWhoOrder, foods, price, doneStatus) => {
    orderApi
      .createOrder(nameWhoOrder, foods, price, doneStatus)
      .then(() => {
        orderApi.getOrders().then((data) => {
          setOrders(data);
        }).catch((e) => console.log(e))
        setIsUserCreateOrder(true);
        setIsUserCartEmpty(false);
        setTimeout(() => {
          setIsUserCreateOrder(false);
          setIsUserCartEmpty(true);
        }, 5000);
        receiptApi.findMyReceipt(id).then((data) => setPriceReceipt(data)).catch((e) => console.log(e))
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
        .then(() => {
          receiptApi.changePrice(priceReceipt.price + price, id).then(() => {
            receiptApi.findMyReceipt(id).then((data) => {
              setPriceReceipt(data);
              receiptApi.getReceipt();
            }).catch((e) => console.log(e))
          });
        }).catch((e) => console.log(e))
    });
  };

  const updateDoneStatus = (doneStatus, id) => {
    orderApi
      .updateDoneStatus(doneStatus, id)
      .then(() => orderApi.getOrders())
      .then((orders) => setOrders(orders))
      .catch((e) => console.log("Ошибка при обновлении статуса заказа:", e));
  };
  const clearCart = () => {
    userApi
      .clearCart()
      .then(() => userApi.getMyInfo())
      .then((userData) => {
        setUserInfo(userData);
        setCost(0);
      })
      .catch((e) => console.log("Ошибка при очистке корзины:", e));
  };

  const addNewElementInMenu = (
    newItem,
    name,
    description,
    price,
    gram,
    linkImage
  ) => {
    let whatIsMenu = btnBar === true ? 'Bar' : 'Food'
    food
      .addNewElementInMenu(newItem, name, description, price, gram, linkImage, whatIsMenu)
      .then(() => food.getFoods())
      .then((foods) => setFoodMenu(foods))
      .catch((e) => console.log("Ошибка при добавлении нового элемента:", e));
  };

  const changeValueOfMenuElement = (
    nameOfCategory,
    categoryValue,
    newValue,
    objectId
  ) => {
    food
      .changeElementValueInMenu(nameOfCategory, categoryValue, newValue, objectId)
      .then(() => food.getFoods())
      .then((foods) => setFoodMenu(foods))
      .catch((e) => console.log("Ошибка при изменении элемента меню:", e));
  };
  const changeValueOfBarMenuElement = (
    nameOfCategory,
    categoryValue,
    newValue,
    objectId
  ) => {
    food
      .changeElementValueInBarMenu(nameOfCategory, categoryValue, newValue, objectId)
      .then(() => food.getFoodBar())
      .then((barMenu) => setFoodMenuBar(barMenu))
      .catch((e) => console.log("Ошибка при изменении элемента бара:", e));
  };
  const addNewElementInBarMenu = (
    newItem,
    name,
    description,
    price,
    gram,
    linkImage
  ) => {
    let whatIsMenu = btnBar === true ? 'Bar' : 'Food'
    food
      .addNewElementInMenu(newItem, name, description, price, gram, linkImage, whatIsMenu)
      .then(() => food.getFoodBar())
      .then((barMenu) => setFoodMenuBar(barMenu))
      .catch((e) => console.log("Ошибка при добавлении в барное меню:", e));
  };

  const deleteElementInMenu = (index, deleteItem) => {
    let whatIsMenu = btnBar === true ? 'Bar' : 'Food'

    food
      .deleteElementInMenu(index, deleteItem, whatIsMenu)
      .then(() => food.getFoods())
      .then((menu) => {
        setFoodMenu(menu);
        closePopups();
      })
      .catch((e) => console.log("Ошибка при удалении из меню:", e));
  };

  const deleteElementInBarMenu = (index, deleteItem) => {
    let whatIsMenu = btnBar === true ? 'Bar' : 'Food'
    food
      .deleteElementInMenu(index, deleteItem, whatIsMenu)
      .then(() => food.getFoodBar())
      .then((barMenu) => {
        setFoodMenuBar(barMenu);
        closePopups();
      })
      .catch((e) => console.log("Ошибка при удалении из барного меню:", e));
  };
  const signin = (email, password, codeWord) => {
    auth
      .signin(email, password, codeWord)
      .then(() => {
        navigate("/main");

        console.log("Успешная авторизация!");
        setIsLoggedIn(true);

        return userApi.getMyInfo(); // загружаем свежую инфу
      })
      .then((data) => {
        setUserInfo(data);
        if (data.admin === true) {
          navigate("/orders");
        } else {
          navigate("/main");
        }
      })
      .catch((e) => {
        console.log("Ошибка при авторизации:", e);
      });
  };
  const changeLimit = (limit, id) => {
    userApi
      .changeLimit(limit, id)
      .then(() => userApi.getUsers())
      .then((users) => setUserList(users))
      .catch((e) => console.log("Ошибка при изменении лимита:", e));
  };

  const openPopupConfirm = (thisCard, category) => {
    setDeleteCard({ thisCard, category });
    setIsPopupConfirmOpen(true);
  };

  const clearReceipt = (id, userId) => {
    receiptApi
      .clearReceipt(id)
      .then(() => receiptApi.changePrice(0, id))
      .then(() => receiptApi.getReceipt())
      .then((receipts) => {
        setReceipts(receipts);
        changeLimit(0, userId);
      })
      .catch((e) => console.log("Ошибка при очистке чека:", e));
  };
  return (
    <div className={`app ${userInfo.name === "Neon" ? 'app__neon' : 'app__elvis'}`}>
      <Header userInfo={userInfo} btnBar={btnBar} cost={cost} />
      <div className="app__container">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/basket"
            element={
              <motion.div initial={fade.initial}
                animate={fade.animate}
                exit={fade.exit}
                transition={fade.transition}
              >
                <Basket
                  userInfo={userInfo}
                  userList={userList}
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
                /></motion.div>
            }
          />
          <Route
            path="/main"
            element={
              <motion.div initial={fade.initial}
                animate={fade.animate}
                exit={fade.exit}
                transition={fade.transition}>
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
                /></motion.div>

            }
          />
          {(userInfo.admin === true || userInfo.waiter === true) && (
            <Route
              path="/orders"
              element={
                <motion.div initial={fade.initial}
                  animate={fade.animate}
                  exit={fade.exit}
                  transition={fade.transition}>
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
                    btnBar={btnBar}
                  /></motion.div>

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
                <motion.div initial={fade.initial}
                  animate={fade.animate}
                  exit={fade.exit}
                  transition={fade.transition}>
                  <UsersList userList={userList} userInfo={userInfo} changeLimit={changeLimit} btnBar={btnBar} />
                </motion.div>
              }
            />
          )}
          <Route
            path="/myOrders"
            element={<motion.div initial={fade.initial}
              animate={fade.animate}
              exit={fade.exit}
              transition={fade.transition}>
              <MyOrders orders={orders} userInfo={userInfo} btnBar={btnBar} />
            </motion.div>}
          />
          <Route
            path="/receipts"
            element={
              <motion.div initial={fade.initial}
                animate={fade.animate}
                exit={fade.exit}
                transition={fade.transition}>
                <Receipts
                  receipts={receipts}
                  download={download}
                  clearReceipt={clearReceipt}
                  setId={setId}
                  userInfo={userInfo}
                  btnBar={btnBar}
                /> </motion.div>
            }
          />
          <Route path="*" element={<motion.div initial={fade.initial}
            animate={fade.animate}
            exit={fade.exit}
            transition={fade.transition}>
            <PageNotFound />
          </motion.div>}>
          </Route>
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
          userInfo={userInfo}

        />
      </div>
    </div>
  );
}

export default App;
