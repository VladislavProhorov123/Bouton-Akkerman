import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../public/hero.png";
import Header from "./Header";

export default function Hero() {
  return (
    <section
      className="w-full bg-cover bg-center flex items-center relative"
      style={{
        height: `calc(100vh - 72px)`,
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="mx-auto px-4 max-w-6xl text-white relative">
        <div className="flex flex-col  items-center">
          <h1 className="text-4xl text-center md:text-6xl font-bold mb-4">
            Квіти, що говорять без слів
          </h1>

          <p className="text-lg md:text-2xl mb-4 text-center">
            Створюємо стильні та емоційні букети для особливих моментів —
            від романтичних зустрічей до великих свят.
          </p>

          <Link
            to="/catalog"
            className="bg-[var(--button-bg-color)] hover:bg-[var(--button-bg-color)] text-white font-bold py-3 px-6 rounded-3xl transition-colors duration-300 "
          >
            Перейти до каталогу
          </Link>
        </div>
      </div>
    </section>
  );
}