import ProductCard from "../product/ProductCard";
import "./AISuggestions.css";

const AISuggestions = ({
  suggestions,
  onViewDetails,
  onToggleFavorite,
  favorites,
}) => {
  return (
    <div className="suggestions-section">
      <h2 className="suggestions-title">🤖 Gợi ý AI dành cho bạn</h2>
      <div className="product-grid">
        {suggestions.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;
