import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

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
  description?: string;
  composition?: string[];
  category?: Category;
}

export default function Bouquet() {
  const { id } = useParams<{ id: string }>();
  const [bouquet, setBouquet] = useState<Bouquet | null>(null);
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
          className="w-full h-[450px] object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{bouquet.name}</h1>

          {bouquet.category && (
            <p className="text-sm text-gray-500">
              Категорія: {bouquet.category.name}
            </p>
          )}

          <p className="text-2xl font-semibold text-[var(--button-bg-color)]">
            {bouquet.price} грн
          </p>

          <p className="text-gray-600">{bouquet.description}</p>

          <div>
            <h3 className="text-lg font-semibold mb-2">Склад букета</h3>

            {bouquet.composition && (
              <ul className="list-disc pl-5 text-gray-600">
                {bouquet.composition.split(",").map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-[var(--button-bg-color)] text-white font-bold py-3 px-6 rounded-3xl hover:opacity-90 transition">
            Замовити букет
          </button>
        </div>
      </div>
    </section>
  );
}
