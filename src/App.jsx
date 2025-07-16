import { useState } from "react";
import mockProducts from "./services/mockData";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import LoadingSkeleton from "./components/common/LoadingSkeleton";
import Toast from "./components/common/Toast";

import SearchBar from "./components/search/SearchBar";
import FilterBar from "./components/search/FilterBar";

import AISuggestions from "./components/suggestion/AISuggestions";
import AIChat from "./components/suggestion/AIChat";

import ProductCard from "./components/product/ProductCard";
import ProductModal from "./components/product/ProductModal";

import { MessageCircle } from "lucide-react";

import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [viewHistory, setViewHistory] = useState(() => {
    const saved = localStorage.getItem("viewHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [showChat, setShowChat] = useState(false);

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

  // Handle product view
  const handleViewDetails = (product) => {
    setSelectedProduct(product);

    // Thêm vào lịch sử xem
    const newHistory = [
      product,
      ...viewHistory.filter((p) => p.id !== product.id),
    ].slice(0, 10);
    setViewHistory(newHistory);
    localStorage.setItem("viewHistory", JSON.stringify(newHistory));
  };

  // Handle favorite toggle
  const handleToggleFavorite = (productId) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    const action = favorites.includes(productId) ? "removed from" : "added to";
    setToast({
      message: `Sản phẩm đã được ${
        action === "added to" ? "thêm vào" : "xóa khỏi"
      } danh sách yêu thích`,
      type: "success",
    });
  };

  // Handle AI Suggestions
  const handleGetSuggestions = async () => {
    setLoading(true);

    try {
      // Giả lập gọi API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock với gợi ý của AI dựa trên lịch sử và yêu thích
      const suggestedProducts = mockProducts
        .filter((product) => {
          // Gợi ý khóa học tương tự với view hoặc khóa học yêu thích
          const viewedCategories = viewHistory.map((p) => p.category);
          const favoriteCategories = mockProducts
            .filter((p) => favorites.includes(p.id))
            .map((p) => p.category);

          const relevantCategories = [
            ...new Set([...viewedCategories, ...favoriteCategories]),
          ];

          return (
            relevantCategories.includes(product.category) &&
            !favorites.includes(product.id)
          );
        })
        .slice(0, 3);

      setSuggestions(suggestedProducts);
      setToast({ message: "Đã tải gợi ý AI thành công!", type: "success" });
    } catch (e) {
      setToast({ message: "Không thể lấy gợi ý lúc này", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Lấy khóa học yêu thích
  const favoriteProducts = mockProducts.filter((product) =>
    favorites.includes(product.id)
  );

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
              <div className="filter-container">
                <FilterBar
                  priceFilter={priceFilter}
                  setPriceFilter={setPriceFilter}
                  categoryFilter={categoryFilter}
                  setCategoryFilter={setCategoryFilter}
                />
                <button onClick={() => setShowChat(true)} className="chat-btn">
                  <MessageCircle size={16} />
                  <span className="chat-text">AI Tu Van</span>
                </button>
              </div>
            </div>

            <button
              className="ai-suggestion-btn"
              onClick={handleGetSuggestions}
              disabled={loading}
            >
              {loading
                ? "Đang tải..."
                : "🤖 Gợi ý sản phẩm phù hợp dành cho bạn"}
            </button>

            {loading && <LoadingSkeleton />}

            {suggestions.length > 0 && (
              <AISuggestions
                suggestions={suggestions}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
                favorites={favorites}
              />
            )}

            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={favorites.includes(product.id)}
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

        {currentPage === "favorites" && (
          <>
            <h2 style={{ margin: "2rem 0", fontSize: "1.8rem", color: "#333" }}>
              💖 Danh sách yêu thích
            </h2>
            {favoriteProducts.length > 0 ? (
              <div className="product-grid">
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
            ) : (
              <div className="empty-state">
                <h3>Chưa có sản phẩm yêu thích</h3>
                <p>
                  Hãy thêm các khóa học bạn quan tâm vào danh sách yêu thích
                  nhé!
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setCurrentPage("home")}
                  style={{ marginTop: "1rem" }}
                >
                  Khám phá khóa học
                </button>
              </div>
            )}
          </>
        )}

        {/* History Page */}
        {currentPage === "history" && (
          <>
            <h2 style={{ margin: "2rem 0", fontSize: "1.8rem", color: "#333" }}>
              📚 Lịch sử xem
            </h2>
            {viewHistory.length > 0 ? (
              <div className="product-grid">
                {viewHistory.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={favorites.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>Chưa có lịch sử xem</h3>
                <p>Các sản phẩm bạn đã xem sẽ xuất hiện ở đây.</p>
                <button
                  className="btn-primary"
                  onClick={() => setCurrentPage("home")}
                  style={{ marginTop: "1rem" }}
                >
                  Khám phá khóa học
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <AIChat isOpen={showChat} onClose={() => setShowChat(false)} />

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
