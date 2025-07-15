import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{product.name}</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image" />
          <div className="product-price">
            {product.price.toLocaleString("vi-VN")} VNĐ
          </div>
          <p>
            <strong>Đánh giá:</strong>
            {product.rating}/5 ⭐
          </p>
          <p>
            <strong>Danh mục:</strong>
            {product.category}
          </p>
          <p>
            <strong>Mô tả chi tiết:</strong>
          </p>
          <p>{product.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
