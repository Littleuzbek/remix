import { useLocation, useNavigate } from "@remix-run/react";
import { CiHeart } from "react-icons/ci";

export default function Fav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className="navbar-fav-btn"
      style={
        pathname?.includes("/favourite")
          ? { backgroundColor: "var(--first-color)", color: "white" }
          : {}
      }
      onClick={() => navigate("/favourite")}
    >
      <CiHeart />
      Saralanganlar
    </div>
  );
}
