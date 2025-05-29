import "./user.css";
import { useState } from "react";

import avatar1 from "../../assets/avatar/avatar1.png";
import UserInformation from "./userInfo/UserInformation";
import OrderHistory from "./ordersHistory/OrderHistory";

export default function User({user}) {
  const [section, setSection] = useState("user-info");
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
            onClick={() => setSection("user-info")}
            style={
              section === "user-info"
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            Ma'lumotlarim
          </span>
          <span
            className="nav-item"
            onClick={() => setSection("order-history")}
            style={
              section === "order-history"
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            Buyurtmalar
          </span>
          <span
            className="nav-item"
            // onClick={() => setSection("nasiya")}
            style={
              section === "nasiya"
                ? { backgroundColor: "var(--first-color)", color: "white" }
                : {}
            }
          >
            EXKO support
          </span>
        </div>

        {section === "user-info" && <UserInformation />}
        {section === "order-history" && <OrderHistory />}
      </div>
    </div>
  );
}
