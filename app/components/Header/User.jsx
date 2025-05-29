import { Link, useLocation, useNavigate } from "@remix-run/react";
import { useSelector } from "react-redux";
import { LuUserRound } from "react-icons/lu";

export default function User() {
  const isLogged = useSelector((state) => state.cart.isLogged);
  const user = useSelector((state) => state.cart.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const handleNavigation = () => {
  //   if(user?.isAdmin){
  //     navigate("/taxtxona")
  //   }

  //   if(user?.isAdmin === false){
  //     navigate("/user")
  //   }

  //   if(!user){
  //     navigate("/authentication")
  //   }
  // }

  return (
    <Link
      className="navbar-user"
      style={
        pathname?.includes("/authentication")
          ? { backgroundColor: "var(--first-color)", color: "white" }
          : {}
      }
      to="/authentication"
    >
      <LuUserRound />
      {isLogged && user?.name ? user?.name : "Kirish"}
    </Link>
  );
}
