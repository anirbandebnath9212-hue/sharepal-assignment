import {
  FiSmile,
  FiMonitor,
} from "react-icons/fi";

import products from "../data/products";

const getImage = (searchTerms) => {
  const product = products.find((item) =>
    searchTerms.some((term) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    )
  );

  return product?.image || "";
};

const categories = [
  {
    name: "All",
    icon: <FiSmile />,
  },
  {
    name: "GTA VI",
    image: getImage(["GTA"]),
  },
  {
    name: "PS5 Console",
    image: getImage(["PS5"]),
  },
  {
    name: "Xbox Console",
    image: getImage(["Xbox"]),
  },
  {
    name: "VR",
    image: getImage(["Oculus"]),
  },
  {
    name: "Racing Wheel",
    image: getImage(["Racing Wheel", "Racing"]),
  },
  {
    name: "Big Screen Gaming",
    image: getImage(["Projector", "Big Screen"]),
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