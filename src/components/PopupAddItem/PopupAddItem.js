import React from "react";

import "./PopupAddItem.css";
import { useForm } from "react-hook-form";

const PopupAddItem = ({
  isPopupAddItemOpen,
  closePopups,
  addNewElementInMenu,
  addNewElementInBarMenu,
  btnBar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data.imageLink[0].name);
    if (btnBar === false) {
      addNewElementInMenu(
        data.category,
        data.name,
        data.description,
        data.price,
        data.gram,
        data.imageLink[0].name
      );
    } else {
      addNewElementInBarMenu(
        data.category,
        data.name,
        data.description,
        data.price,
        data.gram,
        data.imageLink[0].name
      );
    }

    closePopups();

    reset();
  };

  return (
    <div
      className={`popup popupAddItem ${isPopupAddItemOpen && "popup_active"}`}
    >
      <div className="popup__overlay" onClick={closePopups}></div>
      <div
        className={`popup__container ${
          btnBar === true && "popup__container_bar-theme"
        }`}
      >
        <h1 className="popup__title">Добавить позицию в заказ</h1>
        <form className="popup__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: true,
            })}
            className="popup__input"
            placeholder="Название"
          />
          <input
            {...register("description", {
              required: true,
            })}
            className="popup__input"
            placeholder={btnBar ? "Страна" : "Описание"}
          />
          <input
            {...register("price", {
              required: true,
            })}
            className="popup__input"
            placeholder="Цена(цифрами)"
          />
          <input
            {...register("gram", {
              required: false,
            })}
            className="popup__input"
            placeholder={
              btnBar ? "Грамм(Пропусти, если нет)" : "Грамм(цифрами)"
            }
          />
          <input
            type="file"
            {...register("imageLink", {
              required: true,
            })}
            className="popup__input"
            placeholder="Путь до изображения"
          />

          {btnBar === false && (
            <select
              className="popup__category"
              {...register("category", {
                required: true,
              })}
            >
              <option сlassName="popup__item" value="ColdSnacks">
                Холодные закуски
              </option>
              <option сlassName="popup__item" value="IceCream">
                Мороженое
              </option>
              <option className="popup__item" value="Soups">
                Супы
              </option>
              <option className="popup__item" value="Pizza">
                Пицца
              </option>
              <option className="popup__item" value="Snacks">
                Снэки
              </option>
              <option className="popup__item" value="Salads">
                Салаты
              </option>
              <option className="popup__item" value="Pastes">
                Пасты
              </option>
              <option className="popup__item" value="BeerSnack">
                Закуски к пиву
              </option>
              <option className="popup__item" value="HotDishes">
                Горячие блюда
              </option>
            </select>
          )}

          {btnBar === true && (
            <select
              className="popup__category "
              {...register("category", {
                required: true,
              })}
              size={4}
            >
              <option сlassName="popup__item " value="Cigarettes">
                Выберите категорию
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Cigarettes"
              >
                Сигареты
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Hookahs"
              >
                Кальяны
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Juice"
              >
                Сок
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Coffee"
              >
                Кофе
              </option>
              <option className="popup__item popup__item_bar-theme" value="Tea">
                Чай
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="BottledBeer"
              >
                Пиво Бутылочное
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Wine"
              >
                Вино
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Champagne"
              >
                Шампанское и игристые вина
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Vermouth"
              >
                Вермут
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Aperatives"
              >
                Аперативы
              </option>
              <option className="popup__item popup__item_bar-theme" value="Rum">
                Ром
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Cognac"
              >
                Коньяк
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Brandy"
              >
                Бренди
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Whiskey"
              >
                Виски
              </option>
              <option className="popup__item popup__item_bar-theme" value="Gin">
                Джин
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Tequila"
              >
                Текила
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Tinctures"
              >
                Настойки
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Vodka"
              >
                Водка
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Liqueurs"
              >
                Ликеры
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Cocktails"
              >
                Коктейли
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="Shots"
              >
                Шоты
              </option>
            </select>
          )}
          <button
            className={`popup__submit-btn ${
              btnBar === true && "popup__submit-btn_bar-theme"
            }`}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};
export default PopupAddItem;
