import "./user.css";
import "./dashboard.css";

import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { auth } from "../../firebase";
import avatar1 from "../../assets/avatar/avatar1.png";

export default function User() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="user-page">
      <div className="username">
        <img src={avatar1} alt="" />
        <h1>{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : "..."}</h1>
      </div>

      <div className="user-dashboard">
        <div className="user-dashboard-navbar">
          <span
            className="nav-item"
            onClick={() => {
              navigate(`/user/${auth?.currentUser?.uid}/orders`);
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
              navigate(`/user/${auth?.currentUser?.uid}/main`);
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
