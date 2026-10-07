import { useState } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiInfo,
} from "react-icons/fi";

function DateSelectionModal({ onClose }) {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [pickupDate, setPickupDate] = useState(null);
  const [selecting, setSelecting] = useState("delivery");

  const months = [
    {
      name: "October",
      year: 2026,
      startDay: 4,
      days: 31,
    },
    {
      name: "November",
      year: 2026,
      startDay: 0,
      days: 30,
    },
  ];

  const formatDate = (date) => {
    if (!date) return "";

    return `${date.day} ${date.month} ${date.year}`;
  };

  const handleDateClick = (day, month, year) => {
    const selectedDate = {
      day,
      month,
      year,
    };

    if (selecting === "delivery") {
      setDeliveryDate(selectedDate);
      setSelecting("pickup");
    } else {
      if (
        deliveryDate &&
        new Date(year, month === "October" ? 9 : 10, day) <=
          new Date(
            deliveryDate.year,
            deliveryDate.month === "October" ? 9 : 10,
            deliveryDate.day
          )
      ) {
        return;
      }

      setPickupDate(selectedDate);
    }
  };

  const getMonthNumber = (month) => {
    return month === "October" ? 9 : 10;
  };

  const calculateRentalDays = () => {
    if (!deliveryDate || !pickupDate) return 0;

    const start = new Date(
      deliveryDate.year,
      getMonthNumber(deliveryDate.month),
      deliveryDate.day
    );

    const end = new Date(
      pickupDate.year,
      getMonthNumber(pickupDate.month),
      pickupDate.day
    );

    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  const rentalDays = calculateRentalDays();

  const isSelected = (day, month, type) => {
    const date = type === "delivery" ? deliveryDate : pickupDate;

    if (!date) return false;

    return date.day === day && date.month === month;
  };

  const isBetween = (day, month) => {
    if (!deliveryDate || !pickupDate) return false;

    const current = new Date(
      2026,
      getMonthNumber(month),
      day
    );

    const start = new Date(
      deliveryDate.year,
      getMonthNumber(deliveryDate.month),
      deliveryDate.day
    );

    const end = new Date(
      pickupDate.year,
      getMonthNumber(pickupDate.month),
      pickupDate.day
    );

    return current > start && current < end;
  };

  const renderCalendar = (monthData) => {
    const { name, year, startDay, days } = monthData;

    const cells = [];

    for (let i = 0; i < startDay; i++) {
      cells.push(
        <div
          className="calendar-day muted"
          key={`empty-${name}-${i}`}
        />
      );
    }

    for (let day = 1; day <= days; day++) {
      const deliverySelected = isSelected(day, name, "delivery");
      const pickupSelected = isSelected(day, name, "pickup");
      const between = isBetween(day, name);

      const disabled =
        deliveryDate &&
        !pickupDate &&
        new Date(
          year,
          getMonthNumber(name),
          day
        ) <=
          new Date(
            deliveryDate.year,
            getMonthNumber(deliveryDate.month),
            deliveryDate.day
          );

      cells.push(
        <button
          type="button"
          key={`${name}-${day}`}
          className={`calendar-day
            ${deliverySelected ? "delivery-selected" : ""}
            ${pickupSelected ? "pickup-selected" : ""}
            ${between ? "date-between" : ""}
            ${disabled ? "disabled" : ""}
          `}
          disabled={disabled}
          onClick={() => handleDateClick(day, name, year)}
        >
          {day}
        </button>
      );
    }

    return cells;
  };

  return (
    <div
      className="date-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="date-modal">
        <button
          className="date-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>

        <h2>Select your Dates</h2>

        <div className="date-modal-content">

          {/* LEFT SIDE */}
          <div className="date-selection-left">

            <div className="date-input-row">

              <div className="date-input-group">
                <label>
                  Delivery Date <span>*</span>
                </label>

                <button
                  className={`date-input ${
                    selecting === "delivery" ? "active" : ""
                  }`}
                  onClick={() => setSelecting("delivery")}
                >
                  <FiCalendar />

                  {deliveryDate ? (
                    formatDate(deliveryDate)
                  ) : (
                    "Select delivery date"
                  )}
                </button>
              </div>

              <div className="date-input-group">
                <label>
                  Pickup Date <span>*</span>
                </label>

                <button
                  className={`date-input ${
                    selecting === "pickup" ? "active" : ""
                  }`}
                  onClick={() => setSelecting("pickup")}
                >
                  <FiCalendar />

                  {pickupDate ? (
                    formatDate(pickupDate)
                  ) : (
                    "Select pickup date"
                  )}
                </button>
              </div>

            </div>

            <div className="same-day-info">
              <FiInfo />

              <p>
                <strong>Same-day delivery between 5PM and 11PM</strong>{" "}
                For future dates, you can select a specific time slot
                available at checkout. We pickup between{" "}
                <strong>9AM to 1PM.</strong>
              </p>
            </div>

            <div className="rental-period">
              <span>Your Rental Period:</span>

              <div className="rental-period-box">
                <strong>
                  {String(rentalDays).padStart(2, "0")}
                </strong>

                <span>Day</span>

                <div className="chargeable-period">
                  <small>Chargeable Period:</small>

                  <div>
                    <FiCalendar />
                    <span>
                      {rentalDays ? `${rentalDays} Days` : "--"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="saving-box">
              <div className="saving-title">
                <span className="saving-icon">%</span>
                <strong>Save more with us!</strong>
              </div>

              <p>
                Longer rental periods mean bigger savings—enjoy
                discounts of up to 12%. We don't charge you for
                deliver and pickup days!
              </p>
            </div>

            <button
              className="date-continue-button"
              disabled={!deliveryDate || !pickupDate}
            >
              Continue
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="calendar-container">

            <div className="calendar-months">

              <button className="calendar-arrow">
                <FiChevronLeft />
              </button>

              <div className="calendar-month">
                <h3>October 2026</h3>

                <div className="calendar-weekdays">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>

                <div className="calendar-grid">
                  {renderCalendar(months[0])}
                </div>
              </div>

              <div className="calendar-month">
                <h3>November 2026</h3>

                <div className="calendar-weekdays">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>

                <div className="calendar-grid">
                  {renderCalendar(months[1])}
                </div>
              </div>

              <button className="calendar-arrow">
                <FiChevronRight />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default DateSelectionModal;