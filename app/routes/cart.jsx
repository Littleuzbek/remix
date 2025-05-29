import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { json, redirect } from "@remix-run/node";
import Cart from "../components/Cart/Cart"

export const action = async ({ request }) => {
  const formData = await request.formData();

  try {
    const location = formData.get("location");
    const cart = JSON.parse(formData.get("cart"));
    const totalDiscount = parseFloat(formData.get("totalDiscount"));
    const user = JSON.parse(formData.get("user"));

    const sortedCartItems = cart.map((item) => ({
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.discount,
      totalPrice: item.discount * item.quantity,
      size: item.size || null,
      color: item.color || null,
      quantity: item.quantity,
    }));

    const orderRef = await addDoc(
      collection(db, "exko", "data", "users", auth.currentUser.uid, "orders"),
      {
        orderAdress: location,
        orderCondition: null,
        orderDate: serverTimestamp(),
        orderDeliveryDate: null,
        orderId: "123",
        orderOwner: { ...user ,uid: auth.currentUser.uid},
        orderTotalPrice: totalDiscount,
        nasiyaCondition: null,
        nasiya: {
          payment1: {
            date: serverTimestamp(),
            condition: true,
            sum: Math.round(totalDiscount / 3),
          },
          payment2: {
            date: serverTimestamp(),
            condition: false,
            sum: Math.round(totalDiscount / 3),
          },
          payment3: {
            date: serverTimestamp(),
            condition: false,
            sum: Math.round(totalDiscount / 3),
          },
        },
        orderItems: sortedCartItems,
      }
    );

    const orderDoc = await getDoc(
      doc(db, "exko", "data", "users", auth.currentUser.uid, "orders", orderRef.id)
    );

    const getDate = (unformatted, offset = 0) => {
      const date = new Date(unformatted?.nasiya?.payment1?.date.toDate());
      date.setMonth(date.getMonth() + offset);
      return `${date.getDate()}-${date.toLocaleString("en-US", {
        month: "short",
      })}`;
    };

    await updateDoc(
      doc(db, "exko", "data", "users", auth.currentUser.uid, "orders", orderRef.id),
      {
        nasiya: {
          payment1: {
            condition: true,
            date: getDate(orderDoc.data(), 0),
            sum: orderDoc.data()?.nasiya?.payment1?.sum,
          },
          payment2: {
            condition: false,
            date: getDate(orderDoc.data(), 1),
            sum: orderDoc.data()?.nasiya?.payment2?.sum,
          },
          payment3: {
            condition: false,
            date: getDate(orderDoc.data(), 2),
            sum: orderDoc.data()?.nasiya?.payment3?.sum,
          },
        },
        orderId: orderRef.id,
      }
    );

    return redirect("/");
  } catch (err) {
    console.error("Error processing order:", err);
    return json({ error: "Something went wrong!" }, { status: 500 });
  }
};

export default function CartPage() {
  return (
    <>
      <Cart />
    </>
  );
}
