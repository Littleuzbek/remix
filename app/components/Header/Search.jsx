import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { IoSearch } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

export default function Search() {
  const products = useSelector((state) => state.cart.products);
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();

  const searchEngine = (content) => {
    if (content?.target?.value?.trim(" ") === "") {
      dispatch(cartAction.setResults([]));
      setResult(false);
    } else {
      if (content?.target?.value?.trim(" ")?.length > 2) {
        const find = products?.filter((item) =>
          (item?.title?.toLowerCase() || item?.name?.toLowerCase())?.includes(
            content?.target?.value?.toLowerCase()
          )
        );
        dispatch(cartAction.setResults(find));

        return find?.length === 0 ? setResult(true) : setResult(false);
      }

      if (content?.target?.value?.trim(" ")?.length <= 2) {
        return setResult(true);
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Mahsulotlar izlash"
        onKeyUp={searchEngine}
      />
      <button className="search-btn">
        <IoSearch />
      </button>

      {result && (
        <span className="no-result">
          Hech narsa topilmadi <MdErrorOutline />
        </span>
      )}
    </div>
  );
}
