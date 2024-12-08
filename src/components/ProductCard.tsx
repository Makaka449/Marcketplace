// src/components/ProductCard.tsx
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="product-price">{product.price} $</p>
      <Link to={`/product/${product.id}`} className="product-link">
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
