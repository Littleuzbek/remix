import { useLoaderData } from "@remix-run/react";
import {default as ProductPage} from "../components/Product/Product"

export const loader = ({ params }) => {
  const { id } = params;
  return id;
};


export default function Product() {
  const productId = useLoaderData();
  return (
    <ProductPage productId={productId}/>
  )
}
