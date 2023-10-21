import React from "react";

import "./PopupAddItem.css";
import { useForm } from "react-hook-form";

const PopupAddItem = ({
  isPopupAddItemOpen,
  closePopups,
  addNewElementInMenu,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    addNewElementInMenu(
      data.category,
      data.name,
      data.description,
      data.price,
      data.cal,
      data.imageLink
    );
  };

  return (
    <div
      className={`popup popupAddItem ${isPopupAddItemOpen && "popup_active"}`}
    >
      <div className="popup__overlay" onClick={closePopups}></div>
      <div className="popup__container">
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
            placeholder="Описание"
          />
          <input
            {...register("price", {
              required: true,
            })}
            className="popup__input"
            placeholder="Цена"
          />
          <input
            {...register("cal", {
              required: true,
            })}
            className="popup__input"
            placeholder="Каллории"
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
          <button className="popup__submit-btn">Добавить</button>
        </form>
      </div>
    </div>
  );
};
export default PopupAddItem;
