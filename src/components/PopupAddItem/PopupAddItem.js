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
    console.log(data);
    if(btnBar === false){
      addNewElementInMenu(
        data.category,
        data.name,
        data.description,
        data.price,
        data.gram,
        data.imageLink
      );
    } else {
      addNewElementInBarMenu(
        data.category,
        data.name,
        data.description,
        data.price,
        data.gram,
        data.imageLink
      );
    }

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
            placeholder="Цена"
          />
          <input
            {...register("gram", {
              required: false,
            })}
            className="popup__input"
            placeholder={btnBar ? "Грамм(Пропусти, если нет)" : "Грамм"}
          />
          <input
            {...register("imageLink", {
              required: true,
              pattern: {
                value:
                  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
              },
            })}
            className="popup__input"
            placeholder="Ссылка ни изображение"
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
              <option
                сlassName="popup__item "
                value="Cigarettes"
              >
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
