import Card from "../Card/Card";
import Skeleton from "../Card/Skeleton";

export default function Collection({ all, section }) {
  return (
    <>
      <h2 style={{margin: "1rem 0"}}>{section}</h2>
      <div  className="collection">
        {all ? (
          all?.map((item, i) => (
            <Card
              key={`${item.id}+${i}`}
              id={item.id}
              title={item.title || item.name}
              image={item.image || item.images[0]}
              price={item.discount || item.price}
              oldPrice={item.oldPrice || item.price}
              rating={item.rating || 0}
              feedback={item.feedback || 0}
              product={item}
            />
          ))
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
    </>
  );
}
