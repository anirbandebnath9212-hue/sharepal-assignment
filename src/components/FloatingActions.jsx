import {
  FiCalendar,
  FiHome,
  FiGrid,
  FiSearch,
  FiShoppingCart,
  FiMessageCircle,
} from "react-icons/fi";

function FloatingActions() {
  return (
    <>
      {/* Rental dates floating button */}
      <button
        className="rental-floating-button"
        aria-label="Select rental dates"
      >
        <FiCalendar />
        <span>Select rental dates to view prices</span>
      </button>

      {/* Animated chat button */}
      <button
        className="chat-floating-button"
        aria-label="Open chat"
      >
        <span className="chat-icon-wrapper">
          <FiMessageCircle className="chat-icon" />
          <span className="chat-dots">•••</span>
        </span>
      </button>

      {/* Mobile bottom navigation */}
      <nav className="mobile-bottom-nav">
        <button aria-label="Home">
          <FiHome />
          <span>Home</span>
        </button>

        <button aria-label="Category">
          <FiGrid />
          <span>Category</span>
        </button>

        <button aria-label="Search">
          <FiSearch />
          <span>Search</span>
        </button>

        <button aria-label="Cart">
          <FiShoppingCart />
          <span>Cart</span>
        </button>
      </nav>
    </>
  );
}

export default FloatingActions;