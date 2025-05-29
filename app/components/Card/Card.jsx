import "./style/card.css"
import { Link } from "@remix-run/react";
import { useState } from "react";
import WishButton from "./WishButton";
import AddToCart from "./AddToCart";
import Carousel from "./Carousel";
import Skeleton from "./Skeleton";
import { PriceFormatter } from "../extra/PriceFormatter"

export default function Card({
  id,
  image,
  // rating,
  price,
  oldPrice,
  product,
  title,
  // feedback,
}) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Link to={`/product/${id}`} className="card" key={id}>
          <div className="img-container">
            <Carousel productImg={image} />
            <WishButton product={product} />
          </div>
          <div className="shortInfo">
            <p>{title}</p>
            {/* <p>⭐ {`${rating} (${feedback} sharhlar)`}</p> */}
            <p>
              {PriceFormatter(price / 12)}{" "}
              so'm /oyiga
            </p>
          </div>
          <div>
            <div className="price">
              <p>
                <s>
                  {PriceFormatter(oldPrice)}{" "}
                  so'm
                </s>
              </p>
              <p>
                {PriceFormatter(price)}{" "}
                so'm
              </p>
            </div>
            <AddToCart product={product} />
          </div>
        </Link>
      ) : (
        <Skeleton src={image} onLoading={setLoading} />
      )}
    </>
  );
}
