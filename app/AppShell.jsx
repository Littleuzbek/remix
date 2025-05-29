import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "./store/CartSlice";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartBtn from "./components/Cart/CartBtn";
import ScrollUp from "./components/extra/ScrollUp";

export default function AppShell({children}) {
  const dispatch = useDispatch();
  const products = useLoaderData();

  useEffect(() => {
    dispatch(cartAction.setProducts(products));
  }, [products]);

  return (
    <div className="exko">
      <Header />
      {children}
      <Footer />
      <ScrollUp />
      <CartBtn />
    </div>
  );
}
