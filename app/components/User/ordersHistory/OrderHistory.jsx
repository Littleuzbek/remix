import "./orderHistory.css";
import Order from "./Order";
import { useState } from "react";

export default function OrderHistory({orders}) {
  const [category, setCategory] = useState(false);

  return (
    <div className="order-history-container">
      <div className="order-category">
        <h3
          className={category ? "" : "order-active-category"}
          onClick={() => setCategory(false)}
        >
          Faol
        </h3>
        <h3
          className={category ? "order-active-category" : ""}
          onClick={() => setCategory(true)}
        >
          Barchasi
        </h3>
      </div>
      {orders?.length !== 0 ? (
        orders
          ?.sort((a, b) => b?.orderDate - a?.orderDate)
          ?.map((item) =>
            category ? (
              <Order order={item} key={item?.orderId} />
            ) : (
              (item?.orderCondition === null ||
                item?.nasiyaCondition === null) && (
                <Order order={item} key={item?.orderId} />
              )
            )
          )
      ) : (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
    </div>
  );
}
