import "./orderHistory.css";
import Order from "./Order";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [category, setCategory] = useState(false);
  const user = auth?.currentUser;

  useEffect(() => {
    const getData = onSnapshot(
      collection(db, "exko", "data", "users", user?.uid, "orders"),
      (query) => {
        const allOrders = [];

        query?.forEach((item) => allOrders.push(item.data()));

        if (allOrders) {
          setOrders(allOrders);
        }
      }
    );

    return () => getData();
  }, []);

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
      {orders.length !== 0 ? (
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
