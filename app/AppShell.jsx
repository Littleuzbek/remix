import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

import { cartAction } from "./store/CartSlice";
import { auth, db } from "./firebase";
// import { getUserData as getUserDataa } from "./utils";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartBtn from "./components/Cart/CartBtn";
import ScrollUp from "./components/extra/ScrollUp";

// export const action = async () => {
//    const formData = await request.formData();
//   const userId = formData.get("userid");
//   return true
// }

export default function AppShell({ children }) {
  const fetcher = useFetcher();
  const dispatch = useDispatch();
  const products = useLoaderData();

  const getUserData = (userId) => {
    const userData = onSnapshot(
      doc(db, "exko", "users", "users", userId),
      (document) => {
        dispatch(cartAction.setUser(document?.data()));
      }
    );

    return () => userData();
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(cartAction.setLogged(true));
        getUserData(user?.uid);
      } else {
        dispatch(cartAction.setLogged(false));
      }
    });
  }, []);

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
