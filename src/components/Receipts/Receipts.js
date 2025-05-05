import React from "react";

import "./Receipts.css";
import Receipt from "../Receipt/Receipt";

const Receipts = ({ receipts, download, clearReceipt, setId, userInfo }) => {

  const filteredOrders = receipts.filter((order) => {
    const name = order.nameWhoOrders?.toLowerCase().trim() || '';
    const user = userInfo.name.toLowerCase();

    const isNeonTable = name.includes('neon');

    if (user === 'admin') return true;
    if (user === 'neon') return isNeonTable;
    return !isNeonTable;
  });

  return (
    <section className="receipts">
      <h1 className="receipts__title">Распечатать чек</h1>
      {receipts &&
        filteredOrders.map((item) => (
          <Receipt
            item={item}
            name={item.nameWhoOrders}
            foods={item.foods}
            price={item.price}
            download={download}
            _id={item._id}
            clearReceipt={clearReceipt}
            nameWhoOrder={item.nameWhoOrders}
            setId={setId}
            owner={item.owner}
          />
        ))}
    </section>
  );
};

export default Receipts;
