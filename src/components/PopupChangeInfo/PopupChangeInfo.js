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
    formState: { errors, isValid },
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

  const onSubmit = (data) => {
    let categories = "";
    if (btnFood) {
      if (pizzaBtnValue) {
        categories = "pizza";
      }
      if (soupsBtnValue) {
        categories = "soups";
      }
      if (snacksBtnValue) {
        categories = "snacks";
      }
      if (coldSnacksBtnValue) {
        categories = "coldSnacks";
      }
      if (iceCreamBtnValue) {
        categories = "iceCream";
      }
      if (saladsBtnValue) {
        categories = "salads";
      }
      if (pastesBtnValue) {
        categories = "pastes";
      }
      if (beerSnacksBtnValue) {
        categories = "beerSnacks";
      }
      if (hotDishesBtnValue) {
        categories = "hotDishes";
      }
      if (isHideChangeInfo) {
        if (isHideChangeInfo && data.hide !== "Не выбрано") {
          changeValueOfMenuElement(
            categories ? categories : "",
            "hide",
            isFileInput ? data.newValue[0].name : data.hide,
            cardId
          );
          closePopups()
          reset()
        } else {
          console.log("Выберите значение!");
        }

        return;
      }

      if (!isHideChangeInfo) {
        changeValueOfMenuElement(
          categories ? categories : "",
          data.type,
          isFileInput ? data.newValue[0].name : data.newValue,
          cardId
        );
      }
    } else if (btnBar) {
      if (cigarettesBtnValue) {
        categories = "cigarettes";
      }
      if (hookahsBtnValue) {
        categories = "hookahs";
      }
      if (juiceBtnValue) {
        categories = "juice";
      }
      if (coffeesBtnValue) {
        categories = "coffee";
      }
      if (teaBtnValue) {
        categories = "tea";
      }
      if (bottledBeerBtnValue) {
        categories = "bottledBeer";
      }
      if (wineBtnValue) {
        categories = "wine";
      }
      if (champagneBtnValue) {
        categories = "champagne";
      }
      if (vermouthBtnValue) {
        categories = "vermouth";
      }
      if (aperativesBtnValue) {
        categories = "aperatives";
      }
      if (rumBtnValue) {
        categories = "rum";
      }
      if (cognacBtnValue) {
        categories = "cognac";
      }
      if (brandyBtnValue) {
        categories = "brandy";
      }
      if (whiskeyBtnValue) {
        categories = "whiskey";
      }
      if (ginBtnValue) {
        categories = "gin";
      }
      if (tequilaBtnValue) {
        categories = "tequila";
      }
      if (tincturesBtnValue) {
        categories = "tinctures";
      }
      if (vodkaBtnValue) {
        categories = "vodka";
      }
      if (liqueursBtnValue) {
        categories = "liqueurs";
      }
      if (cocktailsBtnValue) {
        categories = "cocktails";
      }
      if (shotsBtnValue) {
        categories = "shots";
      }
      if (isHideChangeInfo) {
        if (isHideChangeInfo && data.hide !== "Не выбрано") {
          changeValueOfBarMenuElement(
            categories ? categories : "",
            "hide",
            isFileInput ? data.newValue[0].name : data.hide,
            cardId
          );
          closePopups()
          reset()
        } else {
          console.log("Выберите значение!");
        }

        return;
      }

      if (!isHideChangeInfo) {
        changeValueOfBarMenuElement(
          categories ? categories : "",
          data.type,
          isFileInput ? data.newValue[0].name : data.newValue,
          cardId
        );
      }
    }
    setIsFileInput(false);
    reset();
  };

  return (
    <div
      className={`popupChangeInfo ${
        isPopupChangeInfoOpen ? "popupChangeInfo_active" : ""
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
  );
};

export default PopupChangeInfo;
