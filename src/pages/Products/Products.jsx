import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DefaultProducts from "./DefaultProducts";
import ProductCategory from "./ProductCateogry";

export default function Products() {
  const { category } = useParams();

  return (
    <>
      <Header />
      {category === "electronics" ? (
        <ProductCategory categoryName={category} />
      ) : category === "men's clothing" ? (
        <ProductCategory categoryName={category} />
      ) : category === "women's clothing" ? (
        <ProductCategory categoryName={category} />
      ) : category === "jewelery" ? (
        <ProductCategory categoryName={category} />
      ) : (
        <DefaultProducts />
      )}
    </>
  );
}
