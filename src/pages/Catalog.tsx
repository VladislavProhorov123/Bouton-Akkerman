import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { supabase } from "../supabaseClient";
import { AnimatePresence, motion } from "motion/react";

const PRODUCTS_PER_PAGE = 8;

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  discount_percent?: number;
  description?: string;
  category_id?: number;
  is_popular?: boolean;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filters, setFilters] = useState({
    categoryId: 0,
    priceRange: 0,
    popularOnly: false,
    sort: "",
  });
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("*");
      setCategories(data || []);
    };
    fetchCategories();
  }, []);

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
      if (debouncedSearch) {
        query = query.ilike("name", `%${debouncedSearch}%`);
      }

      const { data, error } = await query;
      if (error) console.error(error);
      else setProducts(data || []);

      setCurrentPage(1);
    };
    fetchProducts();
  }, [filters, debouncedSearch]);

  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <div className="mt-[30px] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold mb-6">Каталог букетів</h1>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Пошук букетів..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
          />
          <button
            onClick={() => setFiltersOpen(true)}
            className="md:hidden mb-6 px-4 py-2 rounded-lg bg-[var(--button-bg-color)] text-white"
          >
            Фільтри
          </button>
          <div className="hidden md:flex flex gap-4 mb-8">
            <select
              className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
              value={filters.categoryId}
              onChange={(e) =>
                setFilters({ ...filters, categoryId: +e.target.value })
              }
            >
              <option value={0}>Всі категорії</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Цена */}
            <select
              className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
              value={filters.priceRange}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: +e.target.value })
              }
            >
              <option value={0}>Вся ціна</option>
              <option value={1}>До 1000 грн</option>
              <option value={2}>1000 - 2000 грн</option>
              <option value={3}>2000 - 4000 грн</option>
              <option value={4}>4000+ грн</option>
            </select>

            <select
              className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="">Без сортування</option>
              <option value="asc">Ціна ↑</option>
              <option value="desc">Ціна ↓</option>
            </select>

            {/* Популярные */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.popularOnly}
                onChange={(e) =>
                  setFilters({ ...filters, popularOnly: e.target.checked })
                }
              />
              Популярні
            </label>
          </div>
        </div>

        {/* Сетка продуктов */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image_url}
                  isPopular={product.is_popular}
                  discountPercent={product.discount_percent}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 10}
              className="px-4 py-2 rounded-xl bg-gray-200 disabled:opacity-50 cursor-pointer"
            >
              Назад
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-xl ${currentPage === i + 1 ? "cursor-pointer bg-[var(--button-bg-color)] text-white" : "bg-gray-200 cursor-pointer"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer px-4 py-2 rounded-xl bg-gray-200 disabled:opacity-50"
            >
              Вперед
            </button>
          </div>
        )}
      </div>

      {filtersOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-end md:hidden"
          >
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Фільтри</h2>
                <button onClick={() => setFiltersOpen(false)}>✕</button>
              </div>

              <div className="flex flex-col gap-4">
                <select
                  className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
                  value={filters.categoryId}
                  onChange={(e) =>
                    setFilters({ ...filters, categoryId: +e.target.value })
                  }
                >
                  <option value={0}>Всі категорії</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
                  value={filters.priceRange}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: +e.target.value })
                  }
                >
                  <option value={0}>Вся ціна</option>
                  <option value={1}>До 1000 грн</option>
                  <option value={2}>1000 - 2000 грн</option>
                  <option value={3}>2000 - 4000 грн</option>
                  <option value={4}>4000+ грн</option>
                </select>

                <select
                  className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
                  value={filters.sort}
                  onChange={(e) =>
                    setFilters({ ...filters, sort: e.target.value })
                  }
                >
                  <option value="">Без сортування</option>
                  <option value="asc">Ціна ↑</option>
                  <option value="desc">Ціна ↓</option>
                </select>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.popularOnly}
                    onChange={(e) =>
                      setFilters({ ...filters, popularOnly: e.target.checked })
                    }
                  />
                  Популярні
                </label>

                <button
                  onClick={() => setFiltersOpen(false)}
                  className="mt-4 bg-[var(--button-bg-color)] text-white py-3 rounded-xl"
                >
                  Показати
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
