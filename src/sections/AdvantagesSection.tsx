// src/components/AdvantagesSection.tsx
import AdvantageItem from "../components/AdvantageItem";
import { advantages } from "../data/advantages";
import advantageImage from "/flower5.jpg"; 

export default function AdvantagesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <img
              src={advantageImage}
              alt="Переваги магазину"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Переваги нашого магазину</h2>
            {advantages.map((item) => (
              <AdvantageItem
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}