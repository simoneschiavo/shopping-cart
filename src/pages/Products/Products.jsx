import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DefaultProducts from "./DefaultProducts";
import { useState } from "react";
import ProductCategory from "./ProductCateogry";

export default function Products() {
  const { category } = useParams();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    let newCart;
    if (existingProductIndex >= 0) {
      // If the product exists, update quantity
      newCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: Number(item.quantity) + Number(product.quantity),
          };
        }
        return item;
      });
    } else {
      // If product doesn't exist, add it
      newCart = [...cart, product];
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <Header cartCount={cart.length} cart={cart} />
      {category === "electronics" ? (
        <ProductCategory
          handleAddToCart={handleAddToCart}
          categoryName={category}
        />
      ) : category === "men's clothing" ? (
        <ProductCategory
          handleAddToCart={handleAddToCart}
          categoryName={category}
        />
      ) : category === "women's clothing" ? (
        <ProductCategory
          handleAddToCart={handleAddToCart}
          categoryName={category}
        />
      ) : category === "jewelery" ? (
        <ProductCategory
          handleAddToCart={handleAddToCart}
          categoryName={category}
        />
      ) : (
        <DefaultProducts handleAddToCart={handleAddToCart} />
      )}
    </>
  );
}
