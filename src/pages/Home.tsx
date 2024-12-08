import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header"; // Додаємо Header
import "./Home.css";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="home">
      <Header /> {/* Використовуємо Header */}
      <div className="container">
        <h1>Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
