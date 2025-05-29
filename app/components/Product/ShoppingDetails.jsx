import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translateText} from "../../helpers/translation";
// import {
//   CashIcon,
//   HumoCartIcon,
//   MasterCartIcon,
//   UzCardIcon,
//   UzumBankIcon,
//   UzumNasiyaIcon,
//   VisaCartIcon,
// } from "./icons";
import classes from "./ShoppingDetails.module.css";
import { cartAction } from "../../store/CartSlice";
import ProductInfo from "./ProductInfo";
import AmountHandler from "./shoppingDetails/AmountHandler";
import Options from "./shoppingDetails/Options";
// import { BsCartCheck } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "@remix-run/react";
import { PriceFormatter } from "../extra/PriceFormatter"

export default function ShoppingDetails({ productDetails }) {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const cart = useSelector((state) => state.cart.cart);
  const inCart =
    cart?.filter((product) => product.id === productDetails.id)?.length === 0;
  const quantityForMobile =
    cart?.filter((product) => product?.id === productDetails?.id)[0]?.quantity;;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const amountHandler = (action) => {
    if (action === "-") {
      return quantity === 1 ? "" : setQuantity((prevN) => prevN - 1);
    }

    if (action === "+") {
      setQuantity((prevN) => prevN + 1);
    }
  };

  const addToCart = () => {
    const addingItem = {
      discount: productDetails.discount || productDetails.price,
      id: productDetails.id,
      name: productDetails.name || productDetails.title,
      image: productDetails.image,
      price: productDetails.oldPrice || productDetails.price,
      rating: productDetails.rating || 0,
      specs: productDetails.specs,
      proType: productDetails.proType || productDetails.category,
      quantity: quantity,
      color: activeColor || null,
      size: activeSize || null,
    };

    dispatch(cartAction.addItem(addingItem));
    dispatch(cartAction.setNotificationItem(addingItem));
    dispatch(cartAction.setOnlyBuyItem(false));
  };

  const buyItem = () => {
    addToCart()

    setTimeout(() => {
      navigate("/cart");
    }, 100);
  };
  return (
    <div className={classes.shopDetails}>
      <div className={classes.shopping}>
        {/* <div>
          <p className={classes.productRating}>
            ⭐{productDetails?.rating || 0} ({productDetails?.feedback || 0}{" "}
            sharhlar)
          </p>
          <div></div>
        </div> */}
        <p className={classes.productName}>
          {productDetails?.name || productDetails?.title || "NO NAME"}
        </p>
        <div className={classes.priceContainerMobile}>
          <p>{translateText().price}:</p>
          <div className={classes.price}>
            <p>
              {PriceFormatter(productDetails?.price * quantity)}{" "}
              so'm
            </p>
            <s>
              {PriceFormatter(productDetails?.discount || productDetails?.oldPrice)}{" "}so'm
            </s>
          </div>
        </div>
        <p className={classes.seller}>
          {translateText().seller}:
          <q>EXKO shop</q>
        </p>
        <Options
          productDetails={productDetails}
          activeColor={activeColor}
          onSetActiveColor={setActiveColor}
          activeSize={activeSize}
          onSetActiveSize={setActiveSize}
        />
        <AmountHandler onAmountHandler={amountHandler} quantity={quantity} />
        <div className={classes.priceContainer}>
          <p>{translateText().price}:</p>
          <div className={classes.price}>
            <p>
              {PriceFormatter((productDetails?.discount || productDetails?.price) * quantity)}{" "}so'm
            </p>
            <s>
              {PriceFormatter((productDetails?.price || productDetails?.oldPrice) * quantity)}{" "}so'm
            </s>
          </div>
        </div>
        <p className={classes.credit}>
          <span>
            Oyiga{" "}
            {PriceFormatter((productDetails?.discount || productDetails?.price) / 12)}{" "}so'mdan
          </span>
          12 oy muddatli to'lov
        </p>
        <div className={classes.btnContainer}>
          <button
            onClick={() => {
              addToCart();
            }}
          >
            {translateText().addToCartBtn}
          </button>
          <button onClick={() => buyItem()}>{translateText().buyBtn}</button>
        </div>
        {/* <div className={classes.infoBanner}>
          <div className={classes.delivery}>-
            <p>Tezkor yetkazish 1 kundan boshlab</p>
            <p>Uzum buyurtmalarni topshirish punkitida yoki kuryer orqali</p>
          </div>
          <div className={classes.payment}>
            <p>Qulay usulda xavfsiz to'lov</p>
            <p>Karta orqali, naqd yoki bo'lib to'lang</p>
            <div className={classes.iconContainer}>
              <UzumBankIcon />
              <UzumNasiyaIcon />
              <UzCardIcon />
              <HumoCartIcon />
              <VisaCartIcon />
              <MasterCartIcon />
              <CashIcon />
            </div>
          </div>
          <div className={classes.return}>
            <p>Qaytarish oson va tez</p>
            <p>
              Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz
            </p>
          </div>
        </div> */}
        {/* <p className={classes.purchased}>
          <BsCartCheck />
          Bu hafta 40 kishi sotib oldi
        </p> */}
        <div className={classes.shortInfo} style={productDetails?.specs ? {} : {display: "none"}}>
            <p>{translateText().aboutPro}:</p>
          <ProductInfo productDetails={productDetails} />
        </div>
      </div>

      <div className={classes.addToCart}>
        <div>
          <p>
            {(productDetails?.discount * (quantityForMobile || 1))
              ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
              .split(".")[0]
              .replaceAll(",", " ")}{" "}
            so'm
          </p>
          {quantityForMobile && (
            <p>
              quantity:{" "}
              {quantityForMobile}
            </p>
          )}
          {quantityForMobile >! 1 || (
            <s>
              {(productDetails?.price * (quantityForMobile || 1))
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split(".")[0]
                .replaceAll(",", " ")}{" "}
              so'm
            </s>
          )}
        </div>
        {inCart || (
          <button className={classes.addMore} onClick={() => addToCart()}>
            + 1
          </button>
        )}
        {inCart && <button onClick={() => addToCart()}>Savatga</button>}
        {inCart || (
          <Link to={"/cart"} className={classes.toCartPage}>
            <FaShoppingCart />
            O'tish
          </Link>
        )}
      </div>
    </div>
  );
}
