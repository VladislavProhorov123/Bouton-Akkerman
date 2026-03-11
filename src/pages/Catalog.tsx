import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { supabase } from "../supabaseClient";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  discount?: boolean;
  description?: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      let query = supabase.from("products").select("*");

      if (filters.categoryId)
        query = query.eq("category_id", filters.categoryId);
      if (filters.popularOnly) query = query.eq("is_popular", true);

      switch (filters.priceRange) {
        case 1:
          query = query.lte("price", 1000);
          break;
        case 2:
          query = query.gte("price", 1000).lte("price", 2000);
          break;
        case 3:
          query = query.gte("price", 2000).lte("price", 4000);
          break;
        case 4:
          query = query.gte("price", 4000);
          break;
      }

      if (filters.sort)
        query = query.order("price", { ascending: filters.sort === "asc" });

      if (search) {
        query = query.ilike("name", `%${debouncedSearch}%`);
      }

      const { data, error } = await query;
      if (error) console.error(error);
      else setProducts(data || []);
    };
    fetchProducts();
  }, [filters, debouncedSearch]);
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
              image={product.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
