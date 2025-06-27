import { useLocation, useNavigate } from "@remix-run/react";
import { useSelector } from "react-redux";
import { LuUserRound } from "react-icons/lu";
import { auth } from "../../firebase";

export default function User() {
  const isLogged = useSelector((state) => state.cart.isLogged);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (auth.currentUser) {
      navigate(`/user/${auth.currentUser.uid}/main`);
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
      {isLogged && auth.currentUser.displayName ? auth.currentUser.displayName : "Kirish"}
    </div>
  );
}
