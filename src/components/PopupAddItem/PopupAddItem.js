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

    // closePopups();

    // reset();
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
              <option сlassName="popup__item" value="coldSnacks">
                Холодные закуски
              </option>
              <option сlassName="popup__item" value="iceCream">
                Мороженое
              </option>
              <option className="popup__item" value="soups">
                Супы
              </option>
              <option className="popup__item" value="pizza">
                Пицца
              </option>
              <option className="popup__item" value="snacks">
                Снэки
              </option>
              <option className="popup__item" value="salads">
                Салаты
              </option>
              <option className="popup__item" value="pastes">
                Пасты
              </option>
              <option className="popup__item" value="beerSnacks">
                Закуски к пиву
              </option>
              <option className="popup__item" value="hotDishes">
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
              <option сlassName="popup__item " value="cigarettes">
                Выберите категорию
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="cigarettes"
              >
                Сигареты
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="hookahs"
              >
                Кальяны
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="juice"
              >
                Сок
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="coffee"
              >
                Кофе
              </option>
              <option className="popup__item popup__item_bar-theme" value="tea">
                Чай
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="bottledBeer"
              >
                Пиво Бутылочное
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="wine"
              >
                Вино
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="champagne"
              >
                Шампанское и игристые вина
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="vermouth"
              >
                Вермут
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="aperatives"
              >
                Аперативы
              </option>
              <option className="popup__item popup__item_bar-theme" value="rum">
                Ром
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="cognac"
              >
                Коньяк
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="brandy"
              >
                Бренди
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="whiskey"
              >
                Виски
              </option>
              <option className="popup__item popup__item_bar-theme" value="gin">
                Джин
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="tequila"
              >
                Текила
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="tinctures"
              >
                Настойки
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="vodka"
              >
                Водка
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="liqueurs"
              >
                Ликеры
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="cocktails"
              >
                Коктейли
              </option>
              <option
                className="popup__item popup__item_bar-theme"
                value="shots"
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
