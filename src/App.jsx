import { useState } from "react";
import mockProducts from "./services/mockData";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import SearchBar from "./components/search/SearchBar";
import FilterBar from "./components/search/FilterBar";

import ProductCard from "./components/product/ProductCard";
import ProductModal from "./components/product/ProductModal";

import Toast from "./components/common/Toast";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Filter products based on searchTerm and Filters
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      !priceFilter ||
      (priceFilter === "low" && product.price < 500000) ||
      (priceFilter === "medium" &&
        product.price >= 500000 &&
        product.price < 1000000) ||
      (priceFilter === "high" && product.price >= 1000000);

    const matchesCategory =
      !categoryFilter || product.category === categoryFilter;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="container">
        {currentPage === "home" && (
          <>
            <div className="search-container">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={() => {}}
              />
              <FilterBar
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            </div>

            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    // onToggleFavorite={() => {}}
                    // isFavorite={favorites.includes(product.id)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <h3>Không tìm thấy khóa học nào</h3>
                  <p>
                    Vui lòng thử lại với từ khóa khác hoặc điều chỉnh lại bộ lọc
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
