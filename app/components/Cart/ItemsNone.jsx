import cartCat from '../../assets/cart.webp'
import { translateText } from "../../helpers/translation";

export default function ItemsNone() {
  return (
    <div className="itemsNone">
        <img src={cartCat} alt="No items"/>
        <h3>{translateText().emptyCart[1]} <p>🙀</p></h3>
        <h3>{translateText().emptyCart[2]} <p>😽</p></h3>
    </div>
  )
}
