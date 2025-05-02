import React, { useEffect, useState } from "react";

import "./Receipt.css";

const Receipt = ({ name, foods, price, item, download, _id, clearReceipt, nameWhoOrder, owner }) => {

  const [groupedFoods, setGroupedFoods] = useState([]);

  useEffect(() => {
    const groupFoods = (foods) => {
      let itemCount = {};

      // Подсчет одинаковых позиций
      foods.forEach((item) => {
        if (itemCount[item.name]) {
          itemCount[item.name].count += 1;
        } else {
          itemCount[item.name] = { count: 1 };
        }
      });

      // Формируем новый массив
      return Object.entries(itemCount).map(([name, data]) => 
        data.count > 1 ? `${data.count}x ${name} `: name
      );
    };

    setGroupedFoods(groupFoods(foods));
  }, [foods]); // Вызываем эффект при изменении

  const whatId = () => {
    if (nameWhoOrder === 'Стол 1') {
      clearReceipt('6568f0ce9925afaa13ad69c6', '6568ef249925afaa13ad69a4')
    } else if (nameWhoOrder === 'Стол 2') {
      clearReceipt('6568f19e9925afaa13ad69f3', '6568ef3a9925afaa13ad69a6')
    } else if (nameWhoOrder === 'Официант') {
      clearReceipt('67e69a9235870b4f2fb85c84', '6568ef019925afaa13ad69a2')
    } else if (nameWhoOrder === 'admin') {
      clearReceipt('6568f1a39925afaa13ad69f6', '6568ee919925afaa13ad699f')
    } else if (nameWhoOrder === 'Стол 3') {
      clearReceipt('6568f1a39925afaa13ad69f6', '6568ef469925afaa13ad69a8')
    } else if (nameWhoOrder === 'Стол 4') {
      clearReceipt('6568f1a69925afaa13ad69fc', '6568ef569925afaa13ad69aa')
    } else if (nameWhoOrder === 'Стол 5') {
      clearReceipt('6568f1a89925afaa13ad69ff', '6568ef6a9925afaa13ad69ac')
    } else if (nameWhoOrder === 'Стол 6') {
      clearReceipt('6568f1aa9925afaa13ad6a02', '6568ef789925afaa13ad69ae')
    } else if (nameWhoOrder === 'Стол 7') {
      clearReceipt('6568f1ac9925afaa13ad6a05', '6568ef879925afaa13ad69b0')
    } else if (nameWhoOrder === 'Стол 8') {
      clearReceipt('6568f1b29925afaa13ad6a0b', '6568ef959925afaa13ad69b2')
    } else if (nameWhoOrder === 'Стол 9') {
      clearReceipt('6568f1b49925afaa13ad6a0e', '6568efa49925afaa13ad69b4')
    } else if (nameWhoOrder === 'Стол 10') {
      clearReceipt('6568f1b69925afaa13ad6a11', '6568efd19925afaa13ad69b8')
    } else if (nameWhoOrder === 'Стол 11') {
      clearReceipt('6568f1b99925afaa13ad6a17', '6568efe29925afaa13ad69ba')
    }
  }
  const downloadItem = () => {
    let array = [];
    let itemCount = {};

    // Подсчитываем количество одинаковых позиций
    item.foods.forEach((item) => {
        if (itemCount[item.name]) {
            itemCount[item.name].count += 1;
        } else {
            itemCount[item.name] = { count: 1, price: item.price };
        }
    });

    // Формируем чек с учетом количества позиций
    Object.entries(itemCount).forEach(([name, data]) => {
        if (data.count > 1) {
            array.push(`${data.count}x ${name} - ${data.price * data.count} рублей`);
        } else {
            array.push(`${name} - ${data.price} рублей`);
        }
    });

    array.unshift("  ");
    array.unshift("Название:     Цена:");
    array.unshift("  ");
    array.unshift(name);
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
  return (
    <div className="receipt">
      <h1 className="receipt__client">{name}</h1>
      {groupedFoods.map((item) => (
        <p className="receipt__food-name">
          {item}
        </p>
      ))}
      <h4 className="receipt__price">Общая цена: {price}</h4>
      <div className="receipt__btn-container">
        <button className="receipt__print-receipt" onClick={downloadItem}>
          Напечатать чек
        </button>
        <button className="receipt__clear-receipt" onClick={whatId}>
          Очистить чек
        </button>
      </div>
    </div>
  );
};

export default Receipt;
