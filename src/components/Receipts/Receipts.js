import React from "react";

import "./Receipts.css";
import Receipt from "../Receipt/Receipt";

const Receipts = ({ receipts, download, clearReceipt }) => {
  return (
    <section className="receipts">
      <h1 className="receipts__title">Распечатать чек</h1>
      {receipts &&
        receipts.map((item) => (
          <Receipt
            item={item}
            name={item.nameWhoOrders}
            foods={item.foods}
            price={item.price}
            download={download}
            _id={item._id}
            clearReceipt={clearReceipt}
          />
        ))}
    </section>
  );
};

export default Receipts;
