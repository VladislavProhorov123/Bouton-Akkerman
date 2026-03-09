// src/components/ProductCard.tsx
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Product) {
  return (
    <Link
      to={`/catalog/${id}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[250px] object-cover"
        loading="lazy"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{name}</h3>

        <div className="flex justify-between items-center">
          <span className="font-bold ">{price} грн</span>

          <button className="text-sm bg-[var(--button-bg-color)] text-white px-3 py-1 rounded-lg hover:opacity-90 transition">
            Детальніше
          </button>
        </div>
      </div>
    </Link>
  );
}
