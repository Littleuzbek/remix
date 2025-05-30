import "./user.css";

import avatar1 from "../../assets/avatar/avatar1.png";
import { Outlet, useLocation, useNavigate } from "@remix-run/react";

export default function User({ user }) {
  const {pathname} = useLocation();
  const navigate = useNavigate();
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
            onClick={() => {navigate(`/user/${user.uid}/orders`)}}
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
            onClick={() => {navigate(`/user/${user.uid}/main`)}}
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
        </div>

        <Outlet />
      </div>
    </div>
  );
}
