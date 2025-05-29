import classes from "./ProductImage.module.css";
import Carousel from "../Card/Carousel";
import WishButton from "../Card/WishButton";

export default function ProductImage({ productImage, currentProduct }) {
  return (
    <>
      <div className={classes.imageDetails}>
        <Carousel productImg={productImage} inProduct={true} />
        <WishButton product={currentProduct}/>
      </div>
    </>
  );
}
