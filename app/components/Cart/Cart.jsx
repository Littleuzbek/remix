// import "./cart.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
import { Form, useActionData, useNavigate } from "@remix-run/react";

import Item from "./Item";
import ItemsNone from "./ItemsNone";
import ItemMobile from "./ItemMobile";
// import { cartAction } from "../../store/CartSlice";
import { translateText } from "../../helpers/translation";
// import { db, auth } from "../../firebase";
// import { GrStatusGood } from "react-icons/gr";
import { IoIosAlert, IoIosAdd } from "react-icons/io";
import { PriceFormatter } from "../extra/PriceFormatter";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.cart.user);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);
  const actionData = useActionData();
  // const dispatch = useDispatch();

  return (
    <>
      {actionData?.error && (
        <div className="cart-notification">
          <div className="alert" style={{ backgroundColor: "#e41749" }}>
            <IoIosAlert className="_icon" />
            <h3>{actionData.error}</h3>
            <IoIosAdd className="_icon" onClick={() => {}} />
          </div>
        </div>
      )}

      {cart?.length === 0 ? (
        <ItemsNone />
      ) : (
        <div className="cart-page">
          <h2>
            {translateText().inCart}, {cart?.length}{" "}
            {translateText().wordProduct}
          </h2>
          <div className="cart-section">
            <div className="cart">
              <div className="item-indicator">
                <h3>{translateText().allProduct}</h3>
              </div>
              {cart.map((item) => (
                <Item product={item} key={item.cartItemId} />
              ))}
            </div>

            <div className="cart-mobile">
              {cart.map((item) => (
                <ItemMobile product={item} key={item.cartItemId} />
              ))}
            </div>

            <Form method="post" className="total-price">
              <input
                type="hidden"
                name="cart"
                value={JSON.stringify(cart)}
              />
              <input
                type="hidden"
                name="totalDiscount"
                value={totalDiscount}
              />
              <input
                type="hidden"
                name="user"
                value={JSON.stringify(user)}
              />

              <h5>{translateText().order}</h5>
              <div>
                <p>{translateText().yourProducts}</p>
                <p>
                  {PriceFormatter(totalPrice)}{" "}
                  so'm
                </p>
              </div>

              <div>
                <p>{translateText().wordAll}</p>
                <div className="final-price">
                  <p>
                    {PriceFormatter(totalDiscount)}{" "}
                    so'm
                  </p>
                  <p>
                    {translateText().saved}: {totalPrice - totalDiscount} so'm
                  </p>
                </div>
              </div>

              <div className="contact-info">
                <input
                  type="text"
                  name="name"
                  placeholder={translateText().contactName}
                  required
                />
                <input
                  type="number"
                  name="tel"
                  placeholder={translateText().contactInfo}
                  required
                />
                <input
                  type="text"
                  name="location"
                  placeholder={translateText().contactPlace}
                  required
                />
              </div>

              <div className="checkoutBtn">
                <button className="buyBtn">
                  {translateText().orderBtn}
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}