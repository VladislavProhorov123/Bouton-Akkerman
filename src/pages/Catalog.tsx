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
    };
    fetchProducts();
  }, [filters, debouncedSearch]);

  return (
    <div className="mt-[30px] py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold mb-6">Каталог букетів</h1>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFiltersOpen(true)}
            className="md:hidden mb-6 px-4 py-2 rounded-lg bg-[var(--button-bg-color)] text-white"
          >
            Фільтри
          </button>
          <div className="hidden md:flex flex-wrap gap-4 mb-8">
            <input
              type="text"
              placeholder="Пошук букетів..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[300px] border rounded-lg px-4 py-2 mb-6"
            />
            <select
              className="border rounded-lg px-4 py-2"
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
              className="border rounded-lg px-4 py-2"
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

            {/* Сортировка */}
            <select
              className="border rounded-lg px-4 py-2"
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="">Без сортування</option>
              <option value="asc">Ціна ↑</option>
              <option value="desc">Ціна ↓</option>
            </select>
          </div>
        </div>

        {/* Сетка продуктов */}
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

      {filtersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-end md:hidden">
          <div className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Фільтри</h2>
              <button onClick={() => setFiltersOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-4">
              <select
                className="border rounded-lg px-4 py-2"
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
                className="border rounded-lg px-4 py-2"
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

              <select
                className="border rounded-lg px-4 py-2"
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
              >
                <option value="">Без сортування</option>
                <option value="asc">Ціна ↑</option>
                <option value="desc">Ціна ↓</option>
              </select>

              <button
                onClick={() => setFiltersOpen(false)}
                className="mt-4 bg-[var(--button-bg-color)] text-white py-3 rounded-xl"
              >
                Показати
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
