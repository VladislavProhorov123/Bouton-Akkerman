// src/pages/Contacts.tsx
import ContactForm from "../components/ContactForm";
import { Facebook, Instagram, Send } from "lucide-react";

export default function Contacts() {
  return (
    <div className="mt-[50px] py-20">
      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-16">

        {/* Контактная информация */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Контакти</h1>

          <p className="text-gray-700 mb-8">
            Якщо у вас виникли питання щодо букетів, доставки або
            оформлення замовлення — напишіть нам через форму або
            використовуйте контактну інформацію нижче.
          </p>

          <div className="flex flex-col gap-4 text-gray-700 mb-10">
            <p><strong>Телефон:</strong> +38 050 123 45 67</p>
            <p><strong>Email:</strong> info@bouton.com</p>
            <p><strong>Адреса:</strong> м. Київ, вул. Квіткова 12</p>
            <p><strong>Графік роботи:</strong> 9:00 – 20:00</p>
          </div>

          {/* Соцсети */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Наші соцмережі</h2>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-[#B59C82] transition"
              >
                <Instagram size={28} />
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-[#B59C82] transition"
              >
                <Facebook size={28} />
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-[#B59C82] transition"
              >
                <Send size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Форма */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Напишіть нам</h2>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}