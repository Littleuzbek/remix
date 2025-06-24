import {
  collection,
  deleteField,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Order from "./Order";
import { db } from "../../../firebase";

export default function OrderShell({ order }) {
  
  const CancelOrder = async (nasiya) => {
    try {
      const updateVal = nasiya
        ? {
            nasiyaCondition: false,
          }
        : {};

      const generalOrders = query(
        collection(db, "exko", "data", "orders"),
        where("orderId", "==", order?.orderId)
      );

      const generalQuerySnapshot = await getDocs(generalOrders);
      generalQuerySnapshot.forEach(async (document) => {
        // cancel order in general
        updateDoc(doc(db, document.ref.path), {
          confirmed: deleteField(),
          orderCondition: false,
          ...updateVal,
        });
      });

      const userOrders = query(
        collection(
          db,
          "exko",
          "users",
          "users",
          order?.orderOwner?.uid,
          "orders"
        ),
        where("orderId", "==", order?.orderId)
      );

      const userQuerySnapshot = await getDocs(userOrders);
      userQuerySnapshot.forEach(async (document) => {
        // cancel order in user
        updateDoc(doc(db, document.ref.path), {
          confirmed: deleteField(),
          orderCondition: false,
          ...updateVal,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return <Order order={order} onCancel={CancelOrder} />;
}
