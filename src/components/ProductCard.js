import './ProductCard.css';

const WHATSAPP_NUMBER = '2348058918075';

function ProductCard({ product }) {
  const images = product.Images || [];

  const getImageUrl = (image) => {
    if (!image?.url) return null;

    return image.url.startsWith('http')
      ? image.url
      : `http://localhost:1337${image.url}`;
  };

  const handleOrder = () => {
    const message = `Hello JayGee Couture, I would like to order the ${product.Name}.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <article className="product-card">

      {/* IMAGE GALLERY */}
      <div className="product-image">
        {images.length > 0 ? (
          <div className="product-image-gallery">
            {images.map((image) => {
              const imageUrl = getImageUrl(image);

              return (
                <img
                  key={image.documentId}
                  src={imageUrl}
                  alt={product.Name}
                />
              );
            })}
          </div>
        ) : (
          <div className="product-image-placeholder">
            No image available
          </div>
        )}

        {!product.Available && (
          <span className="product-status">
            Unavailable
          </span>
        )}
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="product-info">

        <div className="product-heading">
          <h3>{product.Name}</h3>

          <span
            className={
              product.Available
                ? 'availability available'
                : 'availability unavailable'
            }
          >
            {product.Available
              ? 'Available'
              : 'Unavailable'}
          </span>
        </div>

        {product.Description && (
          <p className="product-description">
            {product.Description}
          </p>
        )}

        <div className="product-details">

          <span className="product-price">
            ₦{Number(product.Price).toLocaleString()}
          </span>

          {product.Sizes && (
            <span className="product-sizes">
              Sizes&nbsp; {product.Sizes}
            </span>
          )}

        </div>

        <button
          type="button"
          className="order-button"
          onClick={handleOrder}
          disabled={!product.Available}
        >
          {product.Available
            ? 'Order on WhatsApp'
            : 'Currently Unavailable'}
        </button>

      </div>
    </article>
  );
}

export default ProductCard;