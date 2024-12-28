import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DefaultProducts from "./DefaultProducts";
import { useState } from "react";

export default function Products() {
  const { category } = useParams();

    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    }

  return (
    <>
      <Header />
      {category === "electronics" ? (
        <Electronics />
      ) : category === "clothes" ? (
        <Clothes />
      ) : (
        <DefaultProducts handleAddToCart={handleAddToCart} />
      )}
    </>
  );
}
