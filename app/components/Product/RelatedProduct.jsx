import classes from "./ShoppingDetails.module.css";
import Collection from "../Home/Collection";

export default function RelatedProduct({ relatedProducts, currentProduct }) {
  return (
    <div className={classes.related_products}>
      <Collection
        all={relatedProducts?.filter((item) => {
          if (item?.id !== currentProduct?.id) {
            return item?.proType === currentProduct?.proType;
          }
        })}
        section={"O'xshash mahsulotlar"}
      />
    </div>
  );
}
