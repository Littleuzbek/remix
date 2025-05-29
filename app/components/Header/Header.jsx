import { Link, useLocation, useNavigate } from "@remix-run/react";
import Catalog from "./Catalog";
import Search from "./Search";
import Fav from "./Fav";
import User from "./User";
import Notification from "./Notification";
import SearchResult from "./SearchResult";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header">
      <header className="navbar">
        <h1 onClick={() => navigate("/")}>EXKO</h1>
        <Catalog />
        <Search />
        <Fav />
        <User />
      </header>

      <ul className="navbar2">
        <li
          className={
            pathname?.includes("/electronics") ? "active-category" : ""
          }
        >
          <Link to={"/category/electronics"}>Elektronika</Link>
        </li>
        <li className={pathname?.includes("/books") ? "active-category" : ""}>
          <Link to={"/category/books"}>Kitoblar</Link>
        </li>
        <li className={pathname?.includes("/clothes") ? "active-category" : ""}>
          <Link to={"/category/clothes"}>Kiyimlar</Link>
        </li>
        <li className={pathname?.includes("/shoes") ? "active-category" : ""}>
          <Link to={"/category/shoes"}>Poyafzal</Link>
        </li>
        <li
          className={
            pathname?.includes("/accessuaries") ? "active-category" : ""
          }
        >
          <Link to={"/category/accessuaries"}>Aksessuarlar</Link>
        </li>
        <li
          className={pathname?.includes("/cosmetics") ? "active-category" : ""}
        >
          <Link to={"/category/cosmetics"}>Kosmetika</Link>
        </li>
        <li className={pathname?.includes("/health") ? "active-category" : ""}>
          <Link to={"/category/health"}>Salomatlik</Link>
        </li>
        <li className={pathname?.includes("/laptops") ? "active-category" : ""}>
          <Link to={"/category/laptops"}>Kompyuterlar</Link>
        </li>
        <li className={pathname?.includes("/toys") ? "active-category" : ""}>
          <Link to={"/category/toys"}>O'yinchoqlar</Link>
        </li>
        <li className={pathname?.includes("/watches") ? "active-category" : ""}>
          <Link to={"/category/watches"}>Saotlar</Link>
        </li>
        <li className={pathname?.includes("/bu ") ? "active-category" : ""}>
          <Link to={"/category/bu"}>B/U</Link>
        </li>
      </ul>

      <MobileHeader />

      <SearchResult />
      <Notification />
    </div>
  );
}
