import "./ProductCard.css";

const ProductCard = ({
  product,
  onViewDetails,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">
          {product.price.toLocaleString("vi-VN")} VNĐ
        </div>
        <div className="product-actions">
          <button
            className="btn-primary"
            onClick={() => onViewDetails(product)}
          >
            Xem chi tiết
          </button>
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={() => onToggleFavorite(product.id)}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
