import "./user.css";
import "./dashboard.css";

import avatar1 from "../../assets/avatar/avatar1.png";
import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { signOut } from "firebase/auth";
import { cartAction } from "../../store/CartSlice";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
  const user = useSelector(state => state.cart.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="user-page">
      <div className="username">
        <img src={avatar1} alt="" />
        <h1>{user?.name ? user?.name : "..."}</h1>
      </div>

      <div className="user-dashboard">
        <div className="user-dashboard-navbar">
          <span
            className="nav-item"
            onClick={() => {
              navigate(`/user/orders`);
            }}
            style={
              pathname.includes("orders")
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            Buyurtmalar
          </span>
          <span
            className="nav-item"
            onClick={() => {
              navigate(`/user/main`);
            }}
            style={
              pathname.includes("main")
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            Ma'lumotlarim
          </span>
          <span
            className="nav-item"
            // onClick={() => setSection("nasiya")}
            style={
              pathname.includes("support")
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            EXKO support
          </span>
          <span
            className="nav-item"
            onClick={() => {
              signOut(auth);
              dispatch(cartAction?.setUser(false));
              dispatch(cartAction?.manageWish(false));
              dispatch(cartAction?.setLogged(false));
              dispatch(cartAction?.setClearCart(false));
              navigate("/authentication");
            }}
          >
            Tizimdan chiqish
          </span>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
