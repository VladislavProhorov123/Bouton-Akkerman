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

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*").order("id", {ascending: true})

      if(error) console.error(error)
      else setProducts(data as Product[])
    }

    fetchProducts()
  }, [])
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