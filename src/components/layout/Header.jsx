import "./Header.css";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <nav className="container">
        <div className="header-content">
          <div className="logo">EduEcommerce AI</div>
          <ul className="nav-links">
            <li>
              <a onClick={() => setCurrentPage("home")}>Trang chủ</a>
            </li>
            <li>
              <a onClick={() => setCurrentPage("favorites")}>Yêu thích</a>
            </li>
            <li>
              <a onClick={() => setCurrentPage("history")}>Lịch sử</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
