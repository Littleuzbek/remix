import { Fragment } from "react";
import ColorHandler from "./ColorHandler";
import classes from '../ShoppingDetails.module.css'

export default function Options({
  productDetails,
  activeColor,
  onSetActiveColor,
  activeSize,
  onSetActiveSize
}) {
  return (
    <Fragment>
      {productDetails?.options?.size && (
        <div className={classes.options}>
          <h4>O&apos;lcham:</h4>
          <div>
            {productDetails.options?.size.map((size) => (
              <span
                key={size}
                id={size}
                style={
                  size === activeSize
                    ? { border: "3px solid black" }
                    : {}
                }
                onClick={() => onSetActiveSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}
      {productDetails?.options?.color && (
        <ColorHandler
          activeColor={activeColor}
          onSetActiveColor={onSetActiveColor}
          productDetails={productDetails}
        />
      )}
    </Fragment>
  );
}
