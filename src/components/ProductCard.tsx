import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  isPopular?: boolean;
  discountPercent?: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  isPopular,
  discountPercent,
}: Product) {
  const discountedPrice = discountPercent
    ? Math.round(price * (1 - discountPercent / 100))
    : price;

  return (
    <Link
      to={`/catalog/${id}`}
      className="relative block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      {isPopular && (
        <span className="absolute top-3 right-3 bg-[var(--button-bg-color)] text-white text-xs font-semibold px-2 py-1 rounded-lg z-10">
          Популярне
        </span>
      )}
      <img
        src={image}
        alt={name}
        className="w-full h-[250px] object-cover"
        loading="lazy"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>

        <div className="mt-2 flex flex-col  gap-2">
          <div>
            <div className="flex">
              {discountPercent ? (
                <>
                  <p className="text-gray-400 line-through mr-3">{price} грн</p>
                  <p className="text-gray-900 font-bold">
                    {discountedPrice} грн
                  </p>
                  <span className="bg-[var(--button-bg-color)] text-white text-xs flex items-center justify-center px-2 py-1 rounded-full ml-3">
                    -{discountPercent}%
                  </span>
                </>
              ) : (
                <p className="text-gray-900 font-bold">
                  {price} грн
                </p>
              )}
            </div>
          </div>
          <button className="text-sm bg-[var(--button-bg-color)] text-white px-3 py-1 rounded-lg hover:opacity-90 transition">
            Детальніше
          </button>
        </div>
      </div>
    </Link>
  );
}
