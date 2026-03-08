import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  slug: string;
};

export default function CategoryCard({ name, image, slug }: Props) {
  return (
    <Link
      to={`/catalog?category=${slug}`}
      className="relative group overflow-hidden rounded-xl"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
      </div>
    </Link>
  );
}