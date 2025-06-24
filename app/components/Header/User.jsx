import { useLocation, useNavigate } from "@remix-run/react";
import { useSelector } from "react-redux";
import { LuUserRound } from "react-icons/lu";

export default function User() {
  const isLogged = useSelector((state) => state.cart.isLogged);
  const user = useSelector((state) => state.cart.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (user) {
      navigate(`/user/main`);
    }else{
      navigate("/authentication");
    }
  };


  return (
    <div
      role="button"
      className="navbar-user"
      style={
        pathname?.includes("/authentication")
          ? { backgroundColor: "var(--first-color)", color: "white" }
          : {}
      }
      onClick={()=>handleNavigation()}
    >
      <LuUserRound />
      {isLogged && user?.name ? user?.name : "Kirish"}
    </div>
  );
}
