import React from "react";

import "./Receipt.css";

const Receipt = ({ name, foods, price, item, download, _id, clearReceipt }) => {
  const downloadItem = () => {
    let array = [];
    item.foods.forEach((item) => {
      array.push(`${item.name} - ${item.price} рублей`);
    });
    console.log(array);
    array.unshift("  ");
    array.unshift("Название:     Цена:");
    array.unshift("  ");
    array.unshift(name);
    array.unshift("  ");
    array.unshift("     РЦ НЕОН");

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
  return (
    <div className="receipt">
      <h1 className="receipt__client">{name}</h1>
      {foods.map((item) => (
        <p className="receipt__food-name">
          {item.name} - {item.price}руб
        </p>
      ))}
      <h4 className="receipt__price">Общая цена: {price}</h4>
      <div className="receipt__btn-container">
        <button className="receipt__print-receipt" onClick={downloadItem}>
          Напечатать чек
        </button>
        <button className="receipt__clear-receipt" onClick={clearReceipt}>
          Очистить чек
        </button>
      </div>
    </div>
  );
};

export default Receipt;
