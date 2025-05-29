import { useSelector } from "react-redux";
import { data, useLoaderData } from "@remix-run/react";
import Card from "../components/Card/Card";

export const loader = ({ params }) => {
  const { id } = params;

  const category = [
    {
      path: "electronics",
      category: "electronics",
      title: "Elektronika",
    },
    { path: "books", category: "books", title: "Kitoblar" },
    {
      path: "kidsClothes",
      category: "kidsClothes",
      title: "Bolalar kiyimlari",
    },
    {
      path: "womenClothes",
      category: "clothes",
      title: "Ayollar kiyimlari",
    },
    {
      path: "clothes",
      category: "clothes",
      title: "Ayollar kiyimlari",
      title2: "Erkaklar kiyimlari",
      title3: "Bolalar kiyimlari",
    },
    {
      path: "menClothes",
      category: "menClothes",
      title: "Erkaklar kiyimlari",
    },
    { path: "shoes", category: "shoes", title: "Poyafzal" },
    { path: "cosmetics", category: "shampoo", title: "Kosmetika" },
    { path: "health", category: "health", title: "Salomatlik" },
    { path: "laptops", category: "laptops", title: "Kompyuterlar" },
    { path: "toys", category: "toys", title: "O'yinchoqlar" },
    { path: "watches", category: "watches", title: "Saotlar" },
    {
      path: "accessuaries",
      category: "accessuaries",
      title: "Aksessuarlar",
    },
    { path: "bu", category: "bu", title: "B/U" }
  ];

  const foundCategory = category.find(ctg => ctg.path === id);

  if (!foundCategory) {
    throw data("Category not found", { status: 404 });
  }
  
  return { foundCategory };
};

export default function Category() {
  const products = useSelector((state) => state.cart.products);
  const { foundCategory } = useLoaderData();

  return (
    <>
      <div className="home-page">
        <h2>{foundCategory?.category === "clothes" ? "Ayollar kiyimlari" : foundCategory?.title}</h2>
        <div className="collection">
          {products
            ?.filter((sortingItem) => foundCategory?.category === sortingItem.proType)
            .map((item, i) => (
              <Card
                key={item.id + i}
                id={item.id}
                title={item.title || item.name}
                image={item.image}
                price={item.discount || item.price}
                oldPrice={item.oldPrice || item.price}
                rating={item.rating || 0}
                feedback={item.feedback || 0}
                product={item}
              />
            ))}
        </div>

        {/* extra category for clothes */}
        {foundCategory?.path === "clothes" && (
          <>
            <h2>{foundCategory?.title2}</h2>
            <div className="collection">
              {products
                ?.filter((sortingItem) => "menClothes" === sortingItem.proType)
                .map((item, i) => (
                  <Card
                    key={item.id + i}
                    id={item.id}
                    title={item.title || item.name}
                    image={item.image}
                    price={item.discount || item.price}
                    oldPrice={item.oldPrice || item.price}
                    rating={item.rating || 0}
                    feedback={item.feedback || 0}
                    product={item}
                  />
                ))}
            </div>
            <h2>{foundCategory?.title3}</h2>
            <div className="collection">
              {products
                ?.filter((sortingItem) => "kidsClothes" === sortingItem.proType)
                .map((item, i) => (
                  <Card
                    key={item.id + i}
                    id={item.id}
                    title={item.title || item.name}
                    image={item.image}
                    price={item.discount || item.price}
                    oldPrice={item.oldPrice || item.price}
                    rating={item.rating || 0}
                    feedback={item.feedback || 0}
                    product={item}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
