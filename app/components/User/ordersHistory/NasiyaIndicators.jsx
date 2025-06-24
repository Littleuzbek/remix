import { useState } from "react";
import PaymentPeriod from "./PaymentPeriod";
import { FaArrowDown } from "react-icons/fa6";

export default function NasiyaIndicators({ order }) {
  const [showNasiya, setShowNasiya] = useState(false);
  return (
    <>
      {order?.nasiya && (
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
                ? {
                    rotate: "180deg",
                    cursor: "pointer",
                    transition: ".3s",
                  }
                : { cursor: "pointer", transition: ".3s" }
            }
          />
        </span>
      )}

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
              payment1: { ...order.nasiya.payment4 },
              payment2: { ...order.nasiya.payment5 },
              payment3: { ...order.nasiya.payment6 },
            }}
          />
        </span>
      )}
      {showNasiya && order?.nasiya?.payment7 && (
        <span className="payment-period">
          <PaymentPeriod
            nasiya={{
              payment1: { ...order.nasiya.payment7 },
              payment2: { ...order.nasiya.payment8 },
              payment3: { ...order.nasiya.payment9 },
            }}
          />
        </span>
      )}
      {showNasiya && order?.nasiya?.payment7 && (
        <span className="payment-period">
          <PaymentPeriod
            nasiya={{
              payment1: { ...order.nasiya.payment10 },
              payment2: { ...order.nasiya.payment11 },
              payment3: { ...order.nasiya.payment12 },
            }}
          />
        </span>
      )}
    </>
  );
}
