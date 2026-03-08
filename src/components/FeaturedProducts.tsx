import ProductCard from "./ProductCard";
import { products } from "../data/product";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Популярні букети
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}