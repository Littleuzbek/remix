import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import classes from '../ShoppingDetails.module.css'
import { translateText } from "../../../helpers/translation";

export default function AmountHandler({quantity,onAmountHandler}) {
  return (
    <div className={classes.amountContainer}>
    <p>{translateText().amount}:</p>
    <div className={classes.amount}>
      <button
        style={
          quantity === 1
            ? { color: "rgb(177, 177, 177)", cursor: "default" }
            : {}
        }
      >
        <FaMinus onClick={() => onAmountHandler("-")}>-</FaMinus>
      </button>
      <p>{quantity}</p>
      <button>
        <FaPlus onClick={() => onAmountHandler("+")}>+</FaPlus>
      </button>
    </div>
  </div>
  )
}
