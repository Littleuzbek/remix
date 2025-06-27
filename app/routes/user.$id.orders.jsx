import {
  collection,
  deleteField,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import OrderHistory from "../components/User/ordersHistory/OrderHistory";
import { db } from "../firebase";
import { getUserOrders } from "../utils"
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  const { id } = params;

  return await getUserOrders(id)
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  const orderType = JSON.parse(formData.get("typ"));
  const order = JSON.parse(formData.get("ord"));

  try {
    const updateVal = orderType
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

  return " ";
};

export default function UserOrders() {
  const orderData = useLoaderData();
  return <OrderHistory orderData={orderData}/>;
}
