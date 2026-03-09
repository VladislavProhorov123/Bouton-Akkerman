import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center md:grid md:grid-cols-3 gap-8">

        {/* Логотип + описание */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-2xl font-bold mb-4">Bouton Akkerman</h1>
          <p className="text-gray-400 text-sm">
            Прекрасні букети для будь-якого свята. Швидка доставка та свіжі квіти щодня.
          </p>
        </div>

        {/* Контакты */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Контакти</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Телефон: +38 050 123 45 67</li>
            <li>Email: info@bouton.com</li>
            <li>Адреса: м. Київ, вул. Квіткова 12</li>
          </ul>
        </div>

        {/* Соцсети + график работы */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Ми в соцмережах</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="#" className="hover:text-[#B59C82] transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-[#B59C82] transition"><Instagram size={24} /></a>
            <a href="#" className="hover:text-[#B59C82] transition"><Twitter size={24} /></a>
          </div>
          <p className="text-gray-400 text-sm">
            Пн-Пт: 9:00 – 20:00 <br />
            Сб-Нд: 10:00 – 18:00
          </p>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bouton Akkerman. Всі права захищені.
      </div>
    </footer>
  );
}