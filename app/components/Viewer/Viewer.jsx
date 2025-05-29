import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Card/Carousel";
import { cartAction } from "../../store/CartSlice";

export default function Viewer({ productImage }) {
  const viewer = useSelector((state) => state.cart.viewer);
  const dispatch = useDispatch();
  return (
    <div
      className="viewer-container"
      style={viewer ? {} : { display: "none" }}
      onClick={() => dispatch(cartAction.setViewer(false))}
    >
      <div className="viewer" onClick={(e) => e.stopPropagation()}>
        <Carousel productImg={productImage} viewMode={true} />
      </div>
    </div>
  );
}
