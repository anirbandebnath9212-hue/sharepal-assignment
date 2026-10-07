import { useState } from "react";
import { FiHeart, FiPlus } from "react-icons/fi";

import products from "../data/products";

import PromoBanner from "./PromoBanner";
import GearBanner from "./GearBanner";


function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        {product.badge && (
          <span
            className={`product-badge ${
              product.badge.toLowerCase() === "new" ? "new" : ""
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          className="heart-button"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <FiHeart />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

      </div>


      <div className="product-info">

        <h3>{product.name}</h3>

        <div className="product-bottom">

          <div>
            <p className="price-label">
              Select Dates to view price
            </p>

            <p className="price">
              ₹{product.price}
              <span className="price-unit">/day</span>
            </p>
          </div>


          <button
            className="add-button"
            aria-label={`Add ${product.name}`}
          >
            <FiPlus />
          </button>

        </div>

      </div>

    </article>
  );
}


function ProductSection() {

  const [visibleCount, setVisibleCount] = useState(8);

  const visibleProducts = products.slice(0, visibleCount);

  const hasMoreProducts = visibleCount < products.length;


  const showMoreProducts = () => {
    setVisibleCount((current) =>
      Math.min(current + 8, products.length)
    );
  };


  return (
    <section className="products-section">

      {/* Heading */}

      <div className="products-heading">

        <h2>
          Gaming Gadgets On Rent
        </h2>

        <span>
          Total items: {products.length} items
        </span>

      </div>


      {/* Products */}

      <div className="products-grid">

        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>


      {/* Promo banner */}

      {visibleCount >= 8 && (
        <PromoBanner />
      )}


      {/* Second product group */}

      {visibleCount >= 16 && (
        <div className="products-grid">

          {products
            .slice(8, Math.min(16, visibleCount))
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

        </div>
      )}


      {/* Gear banner */}

      {visibleCount >= 16 && (
        <GearBanner />
      )}


      {/* Remaining products */}

      {visibleCount > 16 && (
        <div className="products-grid">

          {products
            .slice(16, visibleCount)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

        </div>
      )}


      {/* Show more */}

      <div className="show-more-container">

        <p className="showing-count">
          Showing {visibleProducts.length} of {products.length} results
        </p>


        {hasMoreProducts ? (
          <button
            className="show-more-button"
            onClick={showMoreProducts}
          >
            Show More
          </button>
        ) : (
          <p className="all-products-message">
            All products are shown
          </p>
        )}

      </div>

    </section>
  );
}


export default ProductSection;