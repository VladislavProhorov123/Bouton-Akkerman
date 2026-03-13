import { Facebook, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center md:grid md:grid-cols-3 gap-8">
        {/* Логотип + описание */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-2xl font-bold mb-4">
            Bouton Akkerman
          </h1>
          <p className="text-gray-400 text-sm">
            Прекрасні букети для будь-якого свята. Швидка доставка та свіжі
            квіти щодня.
          </p>
        </div>

        {/* Контакты */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Контакти</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a
                href="tel:+380931423553"
                className=" hover:underline"
              >
                +380 (93) 142 35 53
              </a>
            </li>
            <li>Email: info@bouton.com</li>
            <li>Адреса: Вул. Маяковського, 2</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Ми в соцмережах</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a
              href="https://www.facebook.com/buotonakkerman/"
              className="hover:text-[#B59C82] transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/bouton_akkerman/"
              className="hover:text-[#B59C82] transition"
            >
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#B59C82] transition">
              <Send size={28} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Пн-Нд: 9:00 – 17:00</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bouton Akkerman. Всі права захищені.
      </div>
    </footer>
  );
}
