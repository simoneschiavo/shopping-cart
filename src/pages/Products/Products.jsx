import { useParams } from "react-router-dom";
import Header from "../../components/Header";

export default function Products() {
  const { category } = useParams();
  return (
    <>
      <Header />
      {category === "electronics" ? (
        <Electronics />
      ) : category === "clothes" ? (
        <Clothes />
      ) : (
        <AllProducts />
      )}
    </>
  );
}
