import "../dashboard.css";
import { useState } from "react";
import OrderItem from "./OrderItem";
import Carousel from "../../Card/Carousel";
import { PriceFormatter } from "../../extra/PriceFormatter";
import { FaArrowDown } from "react-icons/fa6";
import NasiyaIndicators from "./NasiyaIndicators";
import { Form } from "@remix-run/react";

export default function Order({ order }) {
  const [showItem, setShowItem] = useState(false);

  const formatDate = (unformatted) => {
    const formattedDate = new Date(unformatted.seconds * 1000);
    const date =
      formattedDate.getDate() +
      "-" +
      formattedDate.toLocaleString("en-US", { month: "short" });

    const time = formattedDate?.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${date}  ${time}`;
  };

  return (
    <div className="order-container">
      {/* <h2 className="order-id">Buyurtma ID-{order?.orderId}</h2> */}
      <div className="order">
        <Carousel
          productImg={[
            ...order?.orderItems?.map((item) =>
              Array?.isArray(item?.image) ? item?.image[0] : item?.image
            ),
          ]}
        />
        <div className="order-info">
          <span
            className={`
              ${order?.confirmed === null && "order-condition-active"}
              ${order?.confirmed === false && "order-condition-bad"}
              ${order?.orderCondition === true && "order-condition-good"}
              ${order?.orderCondition === false && "order-condition-bad"}
              ${
                order?.confirmed === null ||
                (order?.confirmed === true &&
                  order?.orderCondition === null &&
                  "order-condition-active")
              }
              `}
          >
            <p>Holat:</p>
            {order?.confirmed === null && "Tasdiqlamagan"}
            {order?.confirmed === false && "EXKO tomonidan rad etilgan"}
            {order?.orderCondition === true && "Xaridor qabul qilgan"}
            {order?.orderCondition === false && "Rad etilgan"}
            {order?.confirmed === null ||
              (order?.confirmed === true &&
                order?.orderCondition === null &&
                "Jarayonda")}
          </span>
          {order?.confirmed !== false && order?.orderCondition !== false && (
            <span
              className={
                order?.orderCondition
                  ? "order-condition-good"
                  : order?.orderCondition !== null
                  ? "order-condition-bad"
                  : "order-condition-active"
              }
            >
              <p>Yetkazib berish sanasi:</p>{" "}
              {order?.orderCondition
                ? order?.orderDeliveryDate
                : order?.orderCondition !== null
                ? "Rad etilgan"
                : "Jarayonda"}
            </span>
          )}
          <span>
            <p>Yetkazib berish manzili:</p> {order?.orderAdress}
          </span>
          <span>
            <p>Buyurtma sanasi:</p> {formatDate(order?.orderDate)}
          </span>
          <span>
            <p>Buyurtma qiymati:</p> {PriceFormatter(order?.orderTotalPrice)}{" "}
            so'm
          </span>

          <NasiyaIndicators order={order} />

          {/* Buyurtmani rad etish start */}

          {order?.confirmed === null && (
            <Form className="user-order-cancel-btn" method="post">
              Buyurtmani bekor qilish
              <input type="hidden" name="typ" value={JSON.stringify(order?.nasiya ? true : false)} />
              <input type="hidden" name="ord" value={JSON.stringify(order)} />
              <button type="submit"></button>
            </Form>
          )}
          {/* Buyurtmani rad etish end */}
        </div>
      </div>
      <div className="order-what">
        <div className="what-amount" onClick={() => setShowItem(!showItem)}>
          <p>Mahsulotlar soni: {order?.orderItems.length}</p>
          <FaArrowDown style={showItem ? { rotate: "180deg" } : {}} />
        </div>
        <div className="what-list">
          {showItem && (
            <>
              {order?.orderItems?.map((item, i) => (
                <OrderItem orderItem={item} key={item?.id + i} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
