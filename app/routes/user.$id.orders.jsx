import { useLoaderData } from "@remix-run/react";
import { getUserOrders } from "../firebase";
import OrderHistory from "../components/User/ordersHistory/OrderHistory"

export const loader = async () => {
  const orders = await getUserOrders();

  return orders;
}

export default function UserOrders() {
    const orders = useLoaderData();
  return (
    <OrderHistory orders={orders}/>
  )
}
