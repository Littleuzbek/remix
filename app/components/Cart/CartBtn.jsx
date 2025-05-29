import { useLocation, useNavigate } from "@remix-run/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

export default function CartNav() {
  const cart = useSelector((state) => state.cart.cart);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`cart-btn  ${pathname?.includes("/cart") && "no-cart-btn"}`}
      style={cart?.length === 0 ? {} : { padding: "1.2rem .8rem .4rem" }}
      onClick={() => {navigate("/cart")}}
    >
      <MdOutlineShoppingCart className="cart-btn-icon" />
      <span
        className="cart-length"
        style={cart?.length === 0 ? { display: "none" } : {}}
      >
        {cart?.length !== 0 ? cart?.length : ""}
      </span>
    </div>
  );
}
