// import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Form, useActionData } from "@remix-run/react";

import Item from "./Item";
import ItemsNone from "./ItemsNone";
import ItemMobile from "./ItemMobile";
// import { cartAction } from "../../store/CartSlice";
import { translateText } from "../../helpers/translation";
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

  const a = [
    {
        "discount": 135000,
        "id": "xcFKj3nIvSFGHn1kmDYR",
        "cartItemId": "xcFKj3nIvSFGHn1kmDYR",
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/e78e7aca-d777-474c-b773-4ab86743172e?alt=media&token=c1066cfa-7f56-443e-81eb-27c3d5cd057a"
        ],
        "name": "COSRX Low pH Good Morning Gel Cleanser – 150ml",
        "price": 165000,
        "rating": 0,
        "specs": "Mahsulot haqida qisqacha:\n\nAsosiy xususiyatlari: Low pH (4.5-5.5) – Terining tabiiy kislotalik qatlamini (acid mantle) saqlaydi, quritmaydi. Yumshoq tozalash: Gel tekstura – Yog‘ va ifloslanishni samarali oladi, lekin terini quritmaydi. Tea Tree Oil – Antibakterial ta‘sir (trouble teriga yaxshi). Ertalab foydalanish uchun mo‘ljallangan – Terini yengil tetiklashtiradi, keyingi parvarish uchun tayyorlaydi. Kimlar uchun? Barcha teri turlari, ayniqsa: Yog‘li/aralash teri – Poralarni tozalaydi. Sezgir teri – pH muvozanatli formulasi irritatsiyaga olib kelmaydi. Qo‘llash usuli: Nam teriga 1-2 marta bosib gelni surting. Suzib yuvib tashlang (issiq emas, iliq suv ishlating). Kechqurun ham ishlatish mumkin. Tarkibiy qismlar (asosiy ingredientlar): Betaine Salicylate – Yumshoq eksfoliyatsiya qiladi. Tea Tree Leaf Oil – Yallig‘lanishga qarshi. Hyaluron kislota – Namlikni saqlaydi. ⚠️ Diqqat: Yog‘li hidga ega (tabiiy tea tree hidi), lekin u tez tarqaladi.\n\n",
        "proType": "shampoo",
        "quantity": 1,
        "totalPrice": 165000,
        "totalDiscount": 135000,
        "color": "",
        "size": ""
    },
    {
        "discount": 145000,
        "id": "xXAkTGW3fOQfwvYeXMs3",
        "cartItemId": "xXAkTGW3fOQfwvYeXMs3",
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/d457c5f5-6d91-4277-8ec1-62dcb7849e4a?alt=media&token=1b0d3971-b226-4689-abf7-0ac8e19029e8",
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/a4530549-d1cc-4cae-a15b-d57d705a22e5?alt=media&token=5e99b9b7-2e18-4b15-aabc-7a86d4e52266",
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/bf9e5581-dabf-4540-919b-881352022970?alt=media&token=e7616c59-f5bf-4c90-b766-c917461ca0d7",
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/c5a8a9dc-c071-4dab-b193-90b209a3bd3e?alt=media&token=2f32b5f0-73d1-4e1b-9e6b-1d4106f6e2ca",
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/29f45de1-b679-4cbc-9387-45f7ebf2e235?alt=media&token=e3220ada-5b32-435c-8138-891e671551c5",
            "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/7e15ee0e-5fe8-4e0c-9a7b-d28c5b66d43f?alt=media&token=b9e10ed7-3bcc-468c-a307-8264ae3c5758"
        ],
        "name": "Masofadan boshqariladigan chigirtka R/C hasharotlarni o‘rganish o‘yinchog‘i",
        "price": 165000,
        "rating": 0,
        "specs": "Xitoyda ishlabchiqarilgan Koreya sifat sertifikatiga ega!",
        "proType": "toys",
        "quantity": 1,
        "totalPrice": 165000,
        "totalDiscount": 145000,
        "color": "",
        "size": ""
    }
]
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