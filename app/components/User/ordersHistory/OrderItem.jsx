import { useNavigate } from "@remix-run/react";
import {PriceFormatter} from "../../extra/PriceFormatter"
import Carousel from "../../Card/Carousel";

export default function OrderItem({ orderItem }) {
  const navigate = useNavigate();
  return (
    <div className="what-item">
      <Carousel productImg={orderItem?.image} />
      <div>
        <span style={{cursor: "pointer"}} onClick={() => navigate(`/product/${orderItem?.id}`)}>
          <p>Nomi:</p> {orderItem?.name}
        </span>
        <span style={orderItem?.color ? {} : { display: "none" }}>
          <p>Rangi:</p> {orderItem?.color}
        </span>
        <span style={orderItem?.size ? {} : { display: "none" }}>
          <p>O'lchami:</p> {orderItem?.size}
        </span>
        <span>
          <p>Soni:</p> {orderItem?.quantity}
        </span>
        <span>
          <p>Narxi:</p>{" "}
          {PriceFormatter(orderItem?.price)}{" "}
          so'm
        </span>
        <span style={orderItem?.quantity === 1 ? {display: "none"} : {}}>
          <p>Umumiy narxi:</p>{" "}
          {PriceFormatter(orderItem?.totalPrice)}{" "}
          so'm
        </span>
      </div>
    </div>
  );
}
