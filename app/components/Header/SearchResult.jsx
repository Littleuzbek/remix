import { useEffect } from "react";
import { useSelector } from "react-redux";

import Collection from "../Home/Collection";

export default function SearchResult() {
  const results = useSelector((state) => state.cart.results);

  useEffect(() => {
    if (results?.length !== 0) {
      document.body.style.overflow = "hidden";
    }

    if (results?.length === 0) {
      document.body.style.overflow = "";
    }

    return () => {
      if (results?.length === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [results]);

  return (
    <div
      className="results"
      style={results?.length !== 0 ? {} : { display: "none" }}
    >
      <div>
        <Collection all={results} section={"Qidiruv natijalari"} />
      </div>

    </div>
  );
}
