import productData from "./products.json";

const products = productData.products.map((product) => ({
  id: product.id,
  name: product.name,
  image: product.image,
  badge: product.tag,
  rating: product.rating,
  bookedCount: product.booked_count,
  price: product.per_day_rent,
  outOfStock: product.out_of_stock,
}));

export default products;