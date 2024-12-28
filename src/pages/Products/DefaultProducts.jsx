import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getRequestsWithNativeFetch } from "./getRequestsWithNativeFetch";

export default function DefaultProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getRequestsWithNativeFetch(
          "https://fakestoreapi.com/products"
        );
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products && products.map((product) => <article key={product.id} className="flex flex-col gap-4"><ProductCard product={product} /></article>)}
    </div>
  );
}
