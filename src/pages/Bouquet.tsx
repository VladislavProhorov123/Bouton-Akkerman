import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";

export default function Bouquet() {
  const { id } = useParams<{ id: string }>();

  const bouquet = products.find((p) => p.id === id);

  if (!bouquet) {
    return <div className="mt-[100px] text-center">Букет не знайдено</div>;
  }

  return (
    <section className="mt-[100px] max-w-6xl mx-auto px-4 py-10">
      
      <div className="grid md:grid-cols-2 gap-10 items-start">

        <img
          src={bouquet.image}
          alt={bouquet.name}
          className="w-full h-[450px] object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-6">

          <h1 className="text-3xl font-bold">{bouquet.name}</h1>

          <p className="text-2xl font-semibold text-[var(--button-bg-color)]">
            {bouquet.price} грн
          </p>

          <p className="text-gray-600">
            {bouquet.description}
          </p>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Склад букета
            </h3>

            <ul className="list-disc pl-5 text-gray-600">
              {bouquet.composition.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <button className="bg-[var(--button-bg-color)] text-white font-bold py-3 px-6 rounded-3xl hover:opacity-90 transition">
            Замовити букет
          </button>

        </div>

      </div>

    </section>
  );
}