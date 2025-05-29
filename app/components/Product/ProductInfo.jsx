import classes from "./ProductInfo.module.css";

export default function ProductInfo({ productDetails }) {
  return (
    <p className={classes.details} key={productDetails?.id}>
      {productDetails?.specs}
    </p>
  );
}
