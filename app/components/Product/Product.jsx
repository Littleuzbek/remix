import { useSelector } from "react-redux";
import { useNavigate } from "@remix-run/react";
import ProductImage from "./ProductImage";
// import Comments from "./Comments";
import ShoppingDetails from "./ShoppingDetails";
import RelatedProduct from "./RelatedProduct";
import classes from "./Product.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { translateText } from "../../helpers/translation";
import Viewer from "../Viewer/Viewer";


export default function Product({productId}) {
  const allProducts = useSelector((state) => state.cart.products);
  const product = allProducts?.find((item) => productId === String(item.id));
  const navigate = useNavigate();

  return (
    <>
      <h2
        className={classes.backToBtn}
        style={{
          width: "fit-content",
          margin: "2rem auto 0",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        <IoMdArrowRoundBack /> {translateText().backToBtn}
      </h2>
      <div className={classes.productPage}>
        <ProductImage
          productImage={product?.image || product?.images}
          currentProduct={product}
        />
        <ShoppingDetails productDetails={product} />
      </div>
      {/* <div>  
        <Comments />
      </div> */}
      <RelatedProduct relatedProducts={allProducts} currentProduct={product} />
      <Viewer productImage={product?.image || product?.images} />
    </>
  );
}
