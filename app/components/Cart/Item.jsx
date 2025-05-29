import { useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { translateText } from "../../helpers/translation";
import { PriceFormatter } from "../extra/PriceFormatter";

import { BsTrash3Fill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Item({  product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const amountHandler = (action, product) => {
    if (action === "delete") {
      dispatch(cartAction.removeItem({ product: product, delete: action }));
    }

    if (action === "-") {
      if (product.quantity !== 1) {
        dispatch(cartAction.removeItem(product));
      }
    }

    if (action === "+") {
      const newItem = {
        discount: product.discount,
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        specs: product.specs,
        quantity: 1,
        color: product.color,
        size: product.size,
      };

      dispatch(cartAction.addItem(newItem));
    }
  };


  return (
    <div className="cart-item">
      <div>
        <img src={product?.image} alt={""} />
        <div className="order-specs">
          <div className="order-specs-layer1">
            <p className="title-item" onClick={()=> navigate(`/product/${product?.id}`, {replace: true})}>
              {product?.title || product?.name || "no name"}
            </p>
            <span
              className="delete"
              onClick={() => amountHandler("delete", product)}
            >
              {" "}
              <BsTrash3Fill /> {translateText().clearItem}
            </span>
          </div>
          <div className="order-specs-layer2">
            <div className="cart-item-specs">
              <span>
                {translateText().seller}: <p>EXKO shop</p>
              </span>
              {product?.color && (
                <span className="pickedColor">
                  {translateText().color}: <p>{product.color}</p>
                </span>
              )}
              {product?.size && (
                <span className="pickedColor">
                  {translateText().size}: <p>{product.size}</p>
                </span>
              )}
            </div>
            <div className="action-btn">
              <button
                style={
                  product.quantity === 1
                    ? {
                        color: "rgb(177, 177, 177)",
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                <FaMinus onClick={() => amountHandler("-", product)} />
              </button>
              <p>{product?.quantity || 1}</p>
              <button>
                <FaPlus onClick={() => amountHandler("+", product)} />
              </button>
            </div>
            <div className="cart-item-price">
              <p>
                {PriceFormatter(product?.discount * product?.quantity)}{" "}so'm
              </p>
              <s>
                {PriceFormatter(product?.price * product?.quantity)}{" "}so'm
              </s>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
