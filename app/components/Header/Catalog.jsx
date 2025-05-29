import { useState } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import cpu from "../../assets/header_icons/cpu.png"
import book from "../../assets/header_icons/book.png"
import kids from "../../assets/header_icons/kids_clothes.png"
import women from "../../assets/header_icons/dress.png"
import men from "../../assets/header_icons/suit.png"
import shoe from "../../assets/header_icons/shoe.png"
import earbuds from "../../assets/header_icons/earbuds.png"
import cosmetics from "../../assets/header_icons/cosmetics.png"
import health from "../../assets/header_icons/health.png"
import laptop from "../../assets/header_icons/laptop.png"
import toys from "../../assets/header_icons/toys.png"
import watch from "../../assets/header_icons/watch.png"
import handshake from "../../assets/header_icons/handshake.png"

export default function Catalog() {
  const [toggle, setToggle] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const redirect = (link) => {
    navigate(link)
    setToggle(false)
  } 
  return (
    <>
      <div className="header-catalog-btn-container">
        <span></span>
        <div className="header-catalog-btn" onClick={() => setToggle(!toggle)}>
          <span className="header-catalog-icon">
            <div className={toggle ? "header-catalog-open" : ""}></div>
            <div style={toggle ? { display: "none" } : {}}></div>
            <div className={toggle ? "header-catalog-open" : ""}></div>
          </span>
          Katalog
        </div>
      </div>

      {toggle && <div className="header-catalog-container">
        <ul>
          <li onClick={() => redirect("/category/electronics")}><img src={cpu} alt="" /> Elektronika</li>
          <li onClick={() => redirect("/category/books")}><img src={book} alt="" />Kitoblar</li>
          <li onClick={() => redirect("/category/kidsClothes")}><img src={kids} alt="" /> Bolalar kiyimi</li>
          <li onClick={() => redirect("/category/womenClothes")}><img src={women} alt="" /> Ayollar Kiyimi</li>
          <li onClick={() => redirect("/category/menClothes")}><img src={men} alt="" /> Erkaklar kiyimi</li>
          <li onClick={() => redirect("/category/shoes")}><img src={shoe} alt="" /> Poyafzal</li>
          <li onClick={() => redirect("/category/accessuaries")}><img src={earbuds} alt="" /> Aksessuarlar</li>
          <li onClick={() => redirect("/category/cosmetics")}><img src={cosmetics} alt="" /> Kosmetika</li>
          <li onClick={() => redirect("/category/health")}><img src={health} alt="" /> Salomatlik</li>
          <li onClick={() => redirect("/category/laptops")}><img src={laptop} alt="" /> Kompyuterlar</li>
          <li onClick={() => redirect("/category/toys")}><img src={toys} alt="" /> O'yinchoq</li>
          <li onClick={() => redirect("/category/watches")}><img src={watch} alt="" /> Saotlar</li>
          <li onClick={() => redirect("/category/bu")}><img src={handshake} alt="" /> B/U</li>
          {pathname !== "/" && <li onClick={() => redirect("/")}><h1 style={{fontSize: "2rem"}}>EXKO </h1></li>}
        </ul>
      </div>}
    </>
  );
}
