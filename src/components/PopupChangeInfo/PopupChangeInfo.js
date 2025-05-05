import React, { useState } from "react";

import "./PopupChangeInfo.css";

import { useForm } from "react-hook-form";

const PopupChangeInfo = ({
  isPopupChangeInfoOpen,
  closePopups,
  changeValueOfBarMenuElement,
  changeValueOfMenuElement,
  cardId,
  btnBar,
  btnFood,
  pizzaBtnValue,
  soupsBtnValue,
  snacksBtnValue,
  coldSnacksBtnValue,
  iceCreamBtnValue,
  saladsBtnValue,
  pastesBtnValue,
  beerSnacksBtnValue,
  hotDishesBtnValue,
  cigarettesBtnValue,
  hookahsBtnValue,
  juiceBtnValue,
  coffeesBtnValue,
  teaBtnValue,
  bottledBeerBtnValue,
  wineBtnValue,
  champagneBtnValue,
  vermouthBtnValue,
  aperativesBtnValue,
  rumBtnValue,
  cognacBtnValue,
  brandyBtnValue,
  whiskeyBtnValue,
  ginBtnValue,
  tequilaBtnValue,
  tincturesBtnValue,
  vodkaBtnValue,
  liqueursBtnValue,
  cocktailsBtnValue,
  shotsBtnValue,
  isHideChangeInfo,
}) => {
  const {
    watch,
    register,
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const [isFileInput, setIsFileInput] = useState(false);

  const selectOption = watch("type");

  const handleSelectChange = (event) => {
    setIsFileInput(event.target.value === "linkImage");
  };

  const closePopup = () => {
    closePopups();
    reset();
  };

  const foodCategories = {
    pizzaBtnValue: "pizza",
    soupsBtnValue: "soups",
    snacksBtnValue: "snacks",
    coldSnacksBtnValue: "coldSnacks",
    iceCreamBtnValue: "iceCream",
    saladsBtnValue: "salads",
    pastesBtnValue: "pastes",
    beerSnacksBtnValue: "beerSnacks",
    hotDishesBtnValue: "hotDishes",
  };

  const barCategories = {
    cigarettesBtnValue: "cigarettes",
    hookahsBtnValue: "hookahs",
    juiceBtnValue: "juice",
    coffeesBtnValue: "coffee",
    teaBtnValue: "tea",
    bottledBeerBtnValue: "bottledBeer",
    wineBtnValue: "wine",
    champagneBtnValue: "champagne",
    vermouthBtnValue: "vermouth",
    aperativesBtnValue: "aperatives",
    rumBtnValue: "rum",
    cognacBtnValue: "cognac",
    brandyBtnValue: "brandy",
    whiskeyBtnValue: "whiskey",
    ginBtnValue: "gin",
    tequilaBtnValue: "tequila",
    tincturesBtnValue: "tinctures",
    vodkaBtnValue: "vodka",
    liqueursBtnValue: "liqueurs",
    cocktailsBtnValue: "cocktails",
    shotsBtnValue: "shots",
  };

  const findCategory = (map) =>
    Object.entries(map).find(([key, _]) => eval(key))?.[1] || "";

  const onSubmit = (data) => {
    const categories = btnFood
      ? findCategory(foodCategories)
      : btnBar
        ? findCategory(barCategories)
        : "";

    const value = isFileInput ? data.newValue[0].name : isHideChangeInfo ? data.hide : data.newValue;
    const handler = btnFood ? changeValueOfMenuElement : changeValueOfBarMenuElement;

    if (isHideChangeInfo) {
      if (data.hide !== "Не выбрано") {
        handler(categories, "hide", value, cardId);
        closePopups();
        reset();
      } else {
        console.log("Выберите значение!");
      }
      return;
    }

    handler(categories, data.type, value, cardId);
    setIsFileInput(false);
    reset();
  };

  return (
    <>
      <div className={`popupChangeInfo__overlay ${isPopupChangeInfoOpen ? "popupChangeInfo__overlay_active" : ""
        }`} onClick={closePopup}></div>
      <div
        className={`popupChangeInfo ${isPopupChangeInfoOpen ? "popupChangeInfo_active" : ""
          }`}
      >
        <button
          className="popupChangeInfo__btn-close"
          onClick={closePopup}
        ></button>
        <form className="popupChangeInfo__form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="popupChangeInfo__title">Изменить данные</h3>
          <div className="popupChangeInfo__container">
            {!isHideChangeInfo && (
              <select
                {...register("type", { required: true })}
                onChange={handleSelectChange}
                className="popupChangeInfo__select"
              >
                <option className="popupChangeInfo__select-status" value="name">
                  Название
                </option>
                <option
                  className="popupChangeInfo__select-status"
                  value="description"
                >
                  {`${btnBar ? "Страна" : "Описание"}`}
                </option>
                <option className="popupChangeInfo__select-status" value="price">
                  Цена
                </option>
                <option className="popupChangeInfo__select-status" value="gram">
                  Вес
                </option>
                <option
                  className="popupChangeInfo__select-status"
                  value="linkImage"
                >
                  Изображение
                </option>
              </select>
            )}
            {!isHideChangeInfo && <p className="popupChangeInfo__text">-</p>}
            {!isHideChangeInfo && (
              <div className="popupChangeInfo__div">
                {" "}
                {isFileInput ? (
                  <input
                    type="file"
                    {...register("newValue", { required: true })}
                    className="popupChangeInfo__input"
                  />
                ) : (
                  <input
                    {...register("newValue", { required: true })}
                    className="popupChangeInfo__input"
                  />
                )}
              </div>
            )}
          </div>
          {isHideChangeInfo && (
            <div className="popupChangeInfo__container">
              {" "}
              <p className="popupChangeInfo__text">Скрыть / вернуть</p>
              <select
                {...register("hide")}
                onChange={handleSelectChange}
                className="popupChangeInfo__select"
              >
                <option className="popupChangeInfo__option" value="Не выбрано">
                  Не выбрано
                </option>
                <option className="popupChangeInfo__option" value="true">
                  Скрыть
                </option>
                <option className="popupChangeInfo__option" value="false">
                  Вернуть
                </option>
              </select>
            </div>
          )}

          <button className="popupChangeInfo__submit-btn">Сохранить</button>
        </form>
      </div>
    </>
  );
};

export default PopupChangeInfo;
