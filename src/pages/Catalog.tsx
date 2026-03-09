// src/pages/Catalog.tsx
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

export default function Catalog() {
  return (
    <div className="mt-[30px] py-16">
      <div className="container mx-auto max-w-6xl px-4">

        <h1 className="text-4xl font-bold mb-6">Каталог букетів</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </div>
  );
}