import "./style/Card.css";

export default function Skeleton({ src, onLoading }) {
  const isString = (value) => typeof value === "string";
  return (
    <div className="skeleton_card">
      <span className="skeleton_image">
        <img
          src={isString(src) ? src : src?.at(0)}
          alt=""
          onLoad={() => onLoading(true)}
        />
      </span>
      <div className="info_block">
        <p></p>
        <p></p>
      </div>
      <div className="info_block">
        <p></p>
        <span></span>
      </div>
    </div>
  );
}
