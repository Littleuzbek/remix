import { useSelector } from "react-redux";
import genie from "../assets/genie.webp"
import Collection from "../components/Home/Collection"

export default function Favourite() {
  const wishes = useSelector((state) => state.cart.wishes);
  return (
    <div className="home-page" style={{ position: "relative" }}>
      <h2>Saralanganlar</h2>
      {
        wishes?.length !== 0 || <img src={genie} alt="" className="noItem-image"/>
      }
      <Collection all={wishes}/>
    </div>
  );
}
