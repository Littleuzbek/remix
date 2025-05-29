import { useSelector } from "react-redux";
import Home from "../components/Home/Home";

export const meta = () => {
  return [
    { title: "EXKO" },
    { name: "EXKO online shop for EVERYONE", content: "Welcome to EXKO" },
  ];
};

export default function Index() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="home-page">
      <Home data={products}/>
    </div>
  );
}
