import { useState } from "react";
import OrderItem from "./OrderItem";
import Carousel from "../../Card/Carousel";
import PaymentPeriod from "./PaymentPeriod";
import { FaArrowDown } from "react-icons/fa6";

export default function Order({ order }) {
  const [showItem, setShowItem] = useState(false);
  const [showNasiya, setShowNasiya] = useState(false);

  const formatDate = (unformatted) => {
    const formattedDate = new Date(unformatted?.toDate());
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
            className={
              order?.orderCondition
                ? "order-condition-good"
                : order?.orderCondition !== null
                ? "order-condition-bad"
                : "order-condition-active"
            }
          >
            <p>Holat:</p>{" "}
            {order?.orderCondition
              ? "Xaridor qabul qilgan"
              : order?.orderCondition !== null
              ? "Rad etilgan"
              : "Jarayonda"}
          </span>
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
          <span>
            <p>Yetkazib berish manzili:</p> {order?.orderAdress}
          </span>
          <span>
            <p>Buyurtma sanasi:</p> {formatDate(order?.orderDate)}
          </span>
          <span>
            <p>Buyurtma qiymati:</p>{" "}
            {order?.orderTotalPrice
              ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
              .split(".")[0]
              .replaceAll(",", " ")}{" "}
            so'm
          </span>
          <span
            className={
              order?.nasiyaCondition
                ? "order-condition-good"
                : order?.nasiyaCondition !== null
                ? "order-condition-bad"
                : "order-condition-active"
            }
          >
            <p>Nasiya:</p>{" "}
            {order?.nasiyaCondition
              ? "To'liq to'langan"
              : order?.nasiyaCondition !== null
              ? "Rad etilgan"
              : "Keyingi to'lov sanasi"}{" "}
            <FaArrowDown
              onClick={() => {
                order?.nasiyaCondition === false || setShowNasiya(!showNasiya);
              }}
              style={
                showNasiya
                  ? { rotate: "180deg", cursor: "pointer", transition: ".3s" }
                  : { cursor: "pointer", transition: ".3s" }
              }
            />
          </span>
          {showNasiya && (
            <span className="payment-period">
              <PaymentPeriod
                nasiya={{
                  payment1: { ...order.nasiya.payment1 },
                  payment2: { ...order.nasiya.payment2 },
                  payment3: { ...order.nasiya.payment3 },
                }}
              />
            </span>
          )}
          {showNasiya && order?.nasiya?.payment4 && (
            <span className="payment-period">
              <PaymentPeriod
                nasiya={{
                  payment1: { ...order.nasiya.payment1 },
                  payment2: { ...order.nasiya.payment2 },
                  payment3: { ...order.nasiya.payment3 },
                }}
              />
            </span>
          )}
          {showNasiya && order?.nasiya?.payment7 && (
            <span className="payment-period">
              <PaymentPeriod
                nasiya={{
                  payment1: { ...order.nasiya.payment1 },
                  payment2: { ...order.nasiya.payment2 },
                  payment3: { ...order.nasiya.payment3 },
                }}
              />
            </span>
          )}
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
