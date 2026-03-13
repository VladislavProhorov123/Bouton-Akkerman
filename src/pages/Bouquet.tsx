import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import OrderModal from "../components/OrderModal";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Bouquet {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category_id: number;
  description?: string;
  composition?: string[];
  category?: Category;
  is_popular?: boolean;
  discount_percent?: number;
}

interface Review {
  id: number;
  product_id: number;
  name: string;
  avatar_url?: string;
  comment: string;
  created_at: string;
}

export default function Bouquet() {
  const { id } = useParams<{ id: string }>();
  const [bouquet, setBouquet] = useState<Bouquet | null>(null);
  const [similar, setSimilar] = useState<Bouquet[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBouquet = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("products")
        .select(
          `
      *,
      category:category_id(id, name, slug)
    `,
        )
        .eq("id", +id)
        .single();

      if (error) {
        console.error(error);
        setBouquet(null);
      } else {
        setBouquet(data as Bouquet);

        const { data: similarProducts } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", data.category_id)
          .neq("id", data.id)
          .limit(4);

        setSimilar(similarProducts || []);

        const { data: reviewData } = await supabase
          .from("reviews")
          .select("*")
          .eq("product_id", data.id)
          .order("created_at", { ascending: false });

        setReviews(reviewData || []);
      }

      setLoading(false);
    };
    fetchBouquet();
  }, [id]);

  if (loading) return <div className="mt-[100px] text-center">Загрузка...</div>;
  if (!bouquet)
    return <div className="mt-[100px] text-center">Букет не знайдено</div>;

  return (
    <section className="mt-[100px] max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={bouquet.image_url}
          alt={bouquet.name}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-6">
          <div className="flex items-end gap-3">
            <h1 className="text-3xl font-bold">{bouquet.name}</h1>

            {bouquet.is_popular && (
              <span className="bg-[var(--button-bg-color)]  text-white text-xs font-bold px-3 py-1 rounded-full">
                Популярне
              </span>
            )}
          </div>

          {bouquet.category && (
            <p className="text-sm text-gray-500">
              Категорія: {bouquet.category.name}
            </p>
          )}

          <p className="text-2xl font-semibold text-gray-900">
            {bouquet.discount_percent ? (
              <>
                <span className="line-through text-gray-400 mr-2">
                  {bouquet.price} грн
                </span>
                {Math.round(
                  bouquet.price * (1 - bouquet.discount_percent / 100),
                )}{" "}
                грн
                <span className="ml-2 bg-[var(--button-bg-color)]  text-white px-2 py-1 rounded-full text-xs">
                  -{bouquet.discount_percent}%
                </span>
              </>
            ) : (
              `${bouquet.price} грн`
            )}
          </p>

          <p className="text-gray-600">{bouquet.description}</p>

          <div>
            <h3 className="text-lg font-semibold mb-2">Склад:</h3>

            {Array.isArray(bouquet.composition) && (
              <ul className="list-disc pl-5 text-gray-600">
                {bouquet.composition.map((item: string, index: number) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            )}
          </div>

          <button
            className="bg-[var(--button-bg-color)] text-white font-bold py-3 px-6 rounded-3xl hover:opacity-90 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Замовити
          </button>

          <OrderModal
            bouquetName={bouquet.name}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Може бути цікаво</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {similar.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-lg font-bold text-[var(--button-bg-color)]">
                    {item.price} грн
                  </p>
                </div>

                <a
                  href={`/catalog/${item.id}`}
                  className="mt-4 text-center bg-[var(--button-bg-color)] text-white font-semibold py-2 rounded-xl hover:opacity-90 transition"
                >
                  Детальніше
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-10">Відгуки</h2>

        {reviews.length === 0 && (
          <p className="text-gray-500">Поки що немає відгуків</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="max-w-sm bg-white rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                {review.avatar_url && (
                  <img
                    src={review.avatar_url}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold">{review.name}</p>

                    <span className="text-sm text-gray-400">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
