import React from "react";

import "./PopupNewOrder.css";

const PopupNewOrder = ({ isPopupNewOrderOpen, closePopups }) => {
  return (
    <div className={`PopupNewOrder ${isPopupNewOrderOpen ? 'PopupNewOrder_open' : ''}`} onClick={closePopups}>
      {/* <div className="PopupNewOrder__overlay"></div> */}
      <div className="PopupNewOrder__container">
        <h1 className="PopupNewOrder__title">Пришел новый заказ!</h1>
      </div>
      <button className="PopupNewOrder__close-btn" onClick={closePopups}>
        Закрыть
      </button>
    </div>
  );
};

export default PopupNewOrder;
