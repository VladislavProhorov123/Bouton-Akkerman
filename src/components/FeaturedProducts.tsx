import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface Bouquet {
  id: number;
  name: string;
  price: number;
  image_url: string;
  discount_percent?: number;
  description?: string;
  is_popular?: boolean
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Bouquet[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_popular", true)
        .limit(6);

      console.log("data:", data, "error:", error);

      if (error) console.error("Ошибка загрузки букетов:", error);
      else setProducts(data as Bouquet[]);
    };

    fetchProducts();
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Популярні букети
        </h2>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image_url}
                isPopular={product.is_popular}
              discountPercent={product.discount_percent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
