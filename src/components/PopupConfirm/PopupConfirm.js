import React from "react";

import "./PopupConfirm.css";

const PopupConfirm = ({
  deleteCard,
  isPopupConfirmOpen,
  closePopups,
  deleteElementInMenu,
  deleteElementInBarMenu,
  btnBar,
}) => {
  const cardItem = () => {
    console.log(deleteCard);
    if (btnBar === true) {
      debugger
      deleteElementInBarMenu(deleteCard.thisCard, deleteCard.category);
    } else {
      debugger
      deleteElementInMenu(deleteCard.thisCard, deleteCard.category);
    }
  };
  return (
    <div
      className={`popupConfirm ${
        isPopupConfirmOpen === true && "popupConfirm_active"
      }`}
    >
      <div className="popupConfirm__overlay" onClick={closePopups}></div>
      <div className="popupConfirm__container">
        <h3 className="popupConfirm__confirm-title">
          Вы удаляете блюдо из меню
        </h3>
        <p className="popupConfirm__confirm-text">Вы уверены?</p>
        <div className="popupConfirm__btn-container">
          <button className="popupConfirm__btn-confirm" onClick={cardItem}>
            Удалить
          </button>
          <button className="popupConfirm__btn-confirm" onClick={closePopups}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirm;
