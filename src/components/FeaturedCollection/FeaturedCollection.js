import { useEffect, useState } from 'react';
import { getFeaturedProducts } from '../../services/api';
import ProductCard from '../ProductCard';
import './FeaturedCollection.css';

function FeaturedCollection() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredLoading, setFeaturedLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setFeaturedLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <section className="featured-section">

      <div className="featured-header">
        <p className="eyebrow">JayGee by Design</p>

        <h2>Featured Pieces</h2>

        <p>
          Discover a selection of our ready-to-wear pieces,
          thoughtfully crafted with intention.
        </p>
      </div>

      {featuredLoading ? (
        <p className="featured-message">
          Loading featured pieces...
        </p>
      ) : featuredProducts.length === 0 ? (
        <p className="featured-message">
          No featured pieces available at the moment.
        </p>
      ) : (
        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.documentId}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default FeaturedCollection;