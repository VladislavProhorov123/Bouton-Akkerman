import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

export default function CategoriesSection() {
  return (
    <section className="py-16 relative">
      <div className="mx-auto px-4 max-w-6xl">
        
        <h2 className="text-3xl font-bold mb-10 text-center">
          Категорії букетів
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              slug={category.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
}