import React from "react";

import "./Receipts.css";
import Receipt from "../Receipt/Receipt";

const Receipts = ({ receipts, download, clearReceipt, setId }) => {
  console.log(receipts)
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
            nameWhoOrder={item.nameWhoOrders}
            setId={setId}
            owner={item.owner}
          />
        ))}
    </section>
  );
};

export default Receipts;
