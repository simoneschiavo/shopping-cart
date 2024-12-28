import AddToBag from "./AddToBag";

export default function ProductCard({ product, handleAddToCart }) {
  return (
    <>
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
        <p className="absolute top-0 left-0 px-4 py-2 bg-blue-700 text-white text-sm capitalize">
          {product.category}
        </p>
      </div>
      <div>
        <h3 className="font-bold">{product.title}</h3>
        <p>
          Rating: {product.rating.rate} ({product.rating.count})
        </p>
        <p>{product.price} §</p>
      </div>
      <AddToBag product={product} handleAddToCart={handleAddToCart} />
    </>
  );
}
