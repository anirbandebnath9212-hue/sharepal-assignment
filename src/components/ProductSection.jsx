import { useState } from "react";
import {
  FiHeart,
  FiPlus,
  FiMinus,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";

import products from "../data/products";

import PromoBanner from "./PromoBanner";
import GearBanner from "./GearBanner";


function ProductCard({
  product,
  isWishlisted,
  onWishlist,
  onAddToCart,
}) {
  return (
    <article className="product-card">

      {/* Product image */}

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


        {/* Wishlist */}

        <button
          className={`heart-button ${
            isWishlisted ? "wishlisted" : ""
          }`}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          onClick={() => onWishlist(product.id)}
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


      {/* Product information */}

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


          {/* Add to cart */}

          <button
            className="add-button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => onAddToCart(product)}
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

  const [wishlist, setWishlist] = useState([]);

  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);


  const visibleProducts = products.slice(0, visibleCount);

  const hasMoreProducts = visibleCount < products.length;


  /* ======================================================
     WISHLIST
  ====================================================== */

  const handleWishlist = (productId) => {

    setWishlist((current) => {

      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }

      return [...current, productId];

    });

  };


  /* ======================================================
     CART
  ====================================================== */

  const handleAddToCart = (product) => {

    setCart((current) => {

      const existingProduct = current.find(
        (item) => item.id === product.id
      );


      if (existingProduct) {

        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }


      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];

    });


    setCartOpen(true);

  };


  /* ======================================================
     REMOVE FROM CART
  ====================================================== */

  const handleRemoveFromCart = (productId) => {

    setCart((current) =>
      current.filter((item) => item.id !== productId)
    );

  };


  /* ======================================================
     INCREASE QUANTITY
  ====================================================== */

  const increaseQuantity = (productId) => {

    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  /* ======================================================
     DECREASE QUANTITY
  ====================================================== */

  const decreaseQuantity = (productId) => {

    setCart((current) =>
      current
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  /* ======================================================
     SHOW MORE
  ====================================================== */

  const showMoreProducts = () => {

    setVisibleCount((current) =>
      Math.min(current + 8, products.length)
    );

  };


  return (
    <section className="products-section">


      {/* ==================================================
          Heading
      ================================================== */}

      <div className="products-heading">

        <h2>
          Gaming Gadgets On Rent
        </h2>

        <span>
          Total items: {products.length} items
        </span>

      </div>



      {/* ==================================================
          Products
      ================================================== */}

      <div className="products-grid">

        {visibleProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onWishlist={handleWishlist}
            onAddToCart={handleAddToCart}
          />

        ))}

      </div>



      {/* ==================================================
          Promo
      ================================================== */}

      {visibleCount >= 8 && <PromoBanner />}



      {/* ==================================================
          More products
      ================================================== */}

      {visibleCount >= 16 && (

        <div className="products-grid">

          {products
            .slice(8, Math.min(16, visibleCount))
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlist={handleWishlist}
                onAddToCart={handleAddToCart}
              />

            ))}

        </div>

      )}



      {/* ==================================================
          Gear banner
      ================================================== */}

      {visibleCount >= 16 && <GearBanner />}



      {/* ==================================================
          Remaining products
      ================================================== */}

      {visibleCount > 16 && (

        <div className="products-grid">

          {products
            .slice(16, visibleCount)
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlist={handleWishlist}
                onAddToCart={handleAddToCart}
              />

            ))}

        </div>

      )}



      {/* ==================================================
          Show More
      ================================================== */}

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



      {/* ==================================================
          CART BUTTON
      ================================================== */}

      {cart.length > 0 && (

        <button
          className="cart-floating-button"
          onClick={() => setCartOpen(true)}
        >

          <FiShoppingCart />

          <span>
            Cart ({cart.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </span>

        </button>

      )}



      {/* ==================================================
          CART PANEL
      ================================================== */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <aside
            className="cart-panel"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Header */}

            <div className="cart-header">

              <div>

                <h2>Your Cart</h2>

                <span>
                  {cart.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}{" "}
                  items
                </span>

              </div>


              <button
                className="cart-close"
                onClick={() => setCartOpen(false)}
              >
                <FiX />
              </button>

            </div>



            {/* Empty cart */}

            {cart.length === 0 ? (

              <div className="empty-cart">

                <FiShoppingCart />

                <p>Your cart is empty</p>

              </div>

            ) : (


              <div className="cart-items">

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />


                    <div className="cart-item-info">

                      <h3>{item.name}</h3>

                      <p>
                        ₹{item.price}/day
                      </p>


                      <div className="quantity-controls">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          <FiMinus />
                        </button>


                        <span>
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          <FiPlus />
                        </button>

                      </div>

                    </div>


                    <button
                      className="remove-cart-item"
                      onClick={() =>
                        handleRemoveFromCart(item.id)
                      }
                    >
                      <FiX />
                    </button>

                  </div>

                ))}

              </div>

            )}



            {/* Footer */}

            {cart.length > 0 && (

              <div className="cart-footer">

                <div className="cart-total">

                  <span>Items</span>

                  <strong>
                    {cart.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                  </strong>

                </div>


                <button className="cart-checkout">
                  Select Rental Dates
                </button>

              </div>

            )}

          </aside>

        </div>

      )}

    </section>
  );
}


export default ProductSection;