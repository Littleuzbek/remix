import "./orderHistory.css";
import { useState } from "react";
import OrderShell from "./OrderShell";

export default function OrderHistory({orderData}) {
  const orders = orderData || false;
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
      {orders ? (
        orders
          ?.sort((a, b) => b?.orderDate?.seconds - a?.orderDate?.seconds)
          ?.map((item) =>
            category ? (
              <OrderShell order={item} key={item?.orderId} />
            ) : (
              ((item?.confirmed === null && item?.orderCondition === null) ||
                item?.nasiyaCondition === null) && (
                <OrderShell order={item} key={item?.orderId} />
              )
            )
          )
      ) : (
        <p style={{ textAlign: "center" }}>{orders === 0 ? "No orders yet" : "Loading..."}</p>
      )}
    </div>
  );
}
