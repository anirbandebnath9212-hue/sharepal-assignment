import {
  FiCalendar,
  FiHome,
  FiGrid,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

function FloatingActions() {
  return (
    <>
      {/* Rental Date Button */}
      <button className="rental-floating-button">
        <FiCalendar />
        <span>Select rental dates to view prices</span>
      </button>

      {/* Chat Button */}
      <button className="chat-floating-button">
        <span className="chat-dots">
          •••
        </span>
      </button>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">

        <button>
          <FiHome />
          <span>Home</span>
        </button>

        <button>
          <FiGrid />
          <span>Category</span>
        </button>

        <button>
          <FiSearch />
          <span>Search</span>
        </button>

        <button>
          <FiShoppingCart />
          <span>Cart</span>
        </button>

      </nav>
    </>
  );
}

export default FloatingActions;