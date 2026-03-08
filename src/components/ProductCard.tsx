import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <Link
      to={`/catalog/${id}`}
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{price} ₴</span>

          <span className="text-sm text-gray-500">
            Детальніше
          </span>
        </div>
      </div>
    </Link>
  );
}