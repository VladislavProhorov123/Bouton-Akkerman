import { useState } from "react";
import FlowerCareModal from "../components/FlowerCareModal";
import flowerGroup from '/flowerGroup.png'

export default function FlowerCareCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-50 bg-no-repeat bg-top" style={{
        backgroundImage: `url(${flowerGroup})`,
      }}>
        <div className="mx-auto px-4 max-w-6xl text-center " >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Дізнайтеся, як доглядати за вашими квітами
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Прості поради, які допоможуть вашим букетам залишатися свіжими довше
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-[var(--button-bg-color)] text-white font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:brightness-95 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            Дізнатися більше
          </button>
        </div>
      </section>

      <FlowerCareModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}