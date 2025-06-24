import "./orderHistory.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import OrderShell from "./OrderShell";

export default function OrderHistory() {
  const [orders, setOrders] = useState(false);
  const [category, setCategory] = useState(false);
  const user = auth?.currentUser?.uid;

  useEffect(() => {
    if (user) {
      const getData = onSnapshot(
        collection(db, "exko", "users", "users", user, "orders"),
        (query) => {
          const allOrders = [];

          query?.forEach((item) => allOrders.push(item.data()));

          if (allOrders?.length !== 0) {
            setOrders(allOrders);
            console.log(allOrders);
          }

          if(allOrders?.length === 0){
            setOrders(0)
          }
        }
      );

      return () => getData();
    }
  }, [user]);

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
