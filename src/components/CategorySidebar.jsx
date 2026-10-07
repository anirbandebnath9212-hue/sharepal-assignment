import { FiSmile, FiMonitor } from "react-icons/fi";
import products from "../data/products";

const findImage = (terms, fallbackIndex = 0) => {
  const product = products.find((item) => {
    const name = item.name.toLowerCase();

    return terms.some((term) =>
      name.includes(term.toLowerCase())
    );
  });

  return product?.image || products[fallbackIndex]?.image || "";
};

const categories = [
  {
    name: "All",
    icon: <FiSmile />,
  },

  {
    name: "GTA VI",
    image: findImage(
      ["gta", "gta vi", "grand theft", "gta 6"],
      0
    ),
  },

  {
    name: "PS5 Console",
    image: findImage(
      ["ps5", "playstation 5", "playstation"],
      0
    ),
  },

  {
    name: "Xbox Console",
    image: findImage(
      ["xbox", "series x", "series s"],
      1
    ),
  },

  {
    name: "VR",
    image: findImage(
      ["oculus", "meta quest", "vr headset", "virtual reality"],
      2
    ),
  },

  {
    name: "Racing Wheel",
    image: findImage(
      ["racing wheel", "steering wheel", "logitech", "thrustmaster"],
      3
    ),
  },

  {
    name: "Big Screen Gaming",
    image: findImage(
      ["projector", "projector screen", "big screen"],
      4
    ),
    icon: <FiMonitor />,
  },
];

function CategorySidebar() {
  return (
    <aside className="category-sidebar">
      {categories.map((category, index) => (
        <button
          className={`sidebar-category ${
            index === 0 ? "active" : ""
          }`}
          key={category.name}
        >
          <div className="sidebar-image">
            {category.image ? (
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
              />
            ) : (
              category.icon
            )}
          </div>

          <span>{category.name}</span>
        </button>
      ))}
    </aside>
  );
}

export default CategorySidebar;