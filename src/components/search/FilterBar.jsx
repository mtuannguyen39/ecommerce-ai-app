import "./FilterBar.css";

const FilterBar = ({
  priceFilter,
  setPriceFilter,
  categoryFilter,
  setCategoryFilter,
}) => {
  return (
    <div className="filters">
      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="filter-select"
      >
        <option value="">Tất cả mức giá</option>
        <option value="low">Dưới 500k</option>
        <option value="medium">500k - 1 triệu</option>
        <option value="high">Trên 1 triệu</option>
      </select>

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="filter-select"
      >
        <option value="">Tất cả danh mục</option>
        <option value="language">Ngôn ngữ</option>
        <option value="programming">Lập trình</option>
        <option value="marketing">Marketing</option>
        <option value="design">Thiết kế</option>
        <option value="soft-skills">Kỹ năng mềm</option>
        <option value="finnance">Tài chính</option>
      </select>
    </div>
  );
};

export default FilterBar;
