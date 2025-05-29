import { useState } from "react";
import classes from "../ShoppingDetails.module.css";

export default function ColorHandler({
  activeColor,
  onSetActiveColor,
  productDetails,
}) {
  const [colorIndex,setColorIndex] = useState();
  
  return (
    <div className={classes.pickColor}>
      <span>
        Rang: <p>{activeColor}</p>
      </span>
      <div>
        {productDetails.options.color.map((color, index) => 
        (
          <span
            key={color}
            className={colorIndex === index ? classes.active : {}}
            onClick={() => {
              onSetActiveColor(color)
              setColorIndex(index)
            }}
          >
            <div style={{ backgroundColor: `${color}` }}></div>
          </span>
        ))}
      </div>
    </div>
  );
}
