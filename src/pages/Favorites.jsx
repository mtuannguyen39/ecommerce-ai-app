import React from "react";

import ProductCard from "../components/product/ProductCard";
import "./Favorites.css";

const Favorites = ({
  favoriteProducts,
  handleViewDetails,
  handleToggleFavorite,
}) => {
  return (
    <div>
      {favoriteProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={handleViewDetails}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default Favorites;
