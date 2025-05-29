import { Link, useLocation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { translateText } from "../../helpers/translation";

import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Notification() {
  const [notific, setNotific] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const newItem = useSelector((state) => state.cart.notificationItem);
  const ref = useRef();
  const {pathname} = useLocation()
 
  useEffect(() => {
    if (cart.length !== 0) {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setNotific(false);

      setTimeout(() => {
        setNotific(true);
      }, 50);

      ref.current = setTimeout(() => {
        setNotific(false);
      }, 1500);
    }
  }, [cart]);

  return (
    <>
      {!pathname?.includes("/cart") && notific && (
        <div className="notificationContainer">
          <div className="notification">
            <img src={newItem?.image || ""} alt="" />
            <div>
              <div>
                <p>{translateText().addedToCart}.</p>
                <IoCloseOutline onClick={() => setNotific(false)} />
              </div>
              <div>
                <p>{newItem?.name}</p>
                <Link to="/cart" className="go-cartBtn">{translateText().goCart}</Link>
                <Link to="/cart" className="mobile-go-cartBtn"><MdOutlineShoppingCart /></Link> 
              </div>
            </div>
          </div>
          <p className="smallNotification">{translateText().addedToCart}</p>
        </div>
      )}
    </>
  );
}
