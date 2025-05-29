import { useNavigate } from "react-router";
import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const redirectHandler = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="footer">
      <div>
        <h1 onClick={() => navigate("/")} style={{ textAlign: "center" }}>
          EXKO
        </h1>
        <div>
          <span
            className="footer-icon"
            onClick={() =>
              redirectHandler(
                "https://www.instagram.com/koreakosmetika_uzb?igsh=MTVjbnU3a3hsczVsdA=="
              )
            }
          >
            <a className="instagram-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            INSTAGRAM
          </span>
          <span
            className="footer-icon"
            onClick={() => redirectHandler("https://t.me/Korea_cosmetics_exko")}
          >
            <a className="telegram-icon" aria-label="Telegram">
              <i className="fab fa-telegram-plane"></i>
            </a>
            TELEGRAM
          </span>
        </div>
        <p>
          Hamkorlik uchun 👉{" "}
          <span
            onClick={() => redirectHandler("https://t.me/MarufRasul")}
            style={{ cursor: "pointer" }}
          >
            @MarufRasul
          </span>{" "}
        </p>
        <p>© Crypticalcoder. All rigths reserved</p>
      </div>
    </div>
  );
}
