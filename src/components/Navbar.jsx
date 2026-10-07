import { useState } from "react";

import {
  FiMapPin,
  FiCalendar,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

import DateSelectionModal from "./DateSelectionModal";

function Navbar() {
  const [showDateModal, setShowDateModal] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          <div className="navbar-logo">
            Share<span>Pal</span>
          </div>

          <div className="rental-controls">

            <button className="location-control">
              <FiMapPin />
              <span>Bangalore</span>
              <FiChevronDown className="location-arrow" />
            </button>

            <button
              className="date-control"
              onClick={() => setShowDateModal(true)}
            >
              <FiCalendar />
              <span>Delivery Date</span>
            </button>

            <button
              className="date-control"
              onClick={() => setShowDateModal(true)}
            >
              <FiCalendar />
              <span>Pickup Date</span>
            </button>

            <button
              className="select-btn"
              onClick={() => setShowDateModal(true)}
            >
              <FiCalendar />
              <span>Select</span>
            </button>

          </div>

          <div className="navbar-actions">

            <button
              className="navbar-icon"
              aria-label="Search"
            >
              <FiSearch />
            </button>

            <button
              className="navbar-icon"
              aria-label="Shopping cart"
            >
              <FiShoppingCart />
            </button>

            <button
              className="profile-btn"
              aria-label="Profile"
            >
              <FiUser />
            </button>

            <button className="login-btn">
              Hi, Login
            </button>

          </div>

        </div>
      </header>

      {showDateModal && (
        <DateSelectionModal
          onClose={() => setShowDateModal(false)}
        />
      )}
    </>
  );
}

export default Navbar;