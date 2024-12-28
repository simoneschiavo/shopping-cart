export default function ProductCard({ product }) { 
    return (
        <>
            <div>
                <img src={product.image} alt={product.title} />
                <p>{product.category}</p>
            </div>
            <div>
                <h3>{product.title}</h3>
                <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                <p>{product.price}</p>
            </div>
        </>
    )
}