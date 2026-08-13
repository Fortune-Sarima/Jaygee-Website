import { useEffect, useState } from 'react';
import { getCollections } from '../services/api';
import ProductCard from '../components/ProductCard';
import './ByDesign.css';

function ByDesign() {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCollection = async () => {
      try {
        const collections = await getCollections();

        if (collections.length > 0) {
          setCollection(collections[0]);
        }
      } catch (err) {
        setError('Unable to load the collection.');
      } finally {
        setLoading(false);
      }
    };

    loadCollection();
  }, []);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (loading) {
    return (
      <main className="by-design">
        <div className="products-message">
          Loading collection...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="by-design">
        <div className="products-message">
          {error}
        </div>
      </main>
    );
  }

  return (
    <main className="by-design">

      {/* HERO */}
      <section className="by-design-hero">
        <img
          src="/R7 (5).jpg"
          alt="JayGee by Design"
          className="by-design-hero-image"
        />

        <div className="by-design-hero-overlay"></div>

        <div className="by-design-hero-content">
          <p className="eyebrow">
            JayGee Couture presents
          </p>

          <h1>JayGee by Design</h1>

          <p className="hero-description">
            Thoughtfully crafted ready-to-wear pieces,
            designed with intention and made to be loved.
          </p>

          <button
            type="button"
            className="explore-button"
            onClick={scrollToCollection}
          >
            Explore Collection
            <span>↓</span>
          </button>
        </div>
      </section>

      {/* COLLECTION */}
      {collection && (
        <section
          className="products-section"
          id="collection"
        >
          <div className="collection-intro">
            <p className="eyebrow">
              The Collection
            </p>

            <h2>{collection.Name}</h2>

            {collection.Description && (
              <p className="collection-description">
                {collection.Description}
              </p>
            )}
          </div>

          <div className="products-grid">
            {collection.products?.map((product) => (
              <ProductCard
                key={product.documentId}
                product={product}
              />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}

export default ByDesign;