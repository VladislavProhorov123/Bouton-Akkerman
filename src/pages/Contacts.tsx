import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Facebook, Instagram, Send } from "lucide-react";

export default function Contacts() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="md:mt-[70px] mt-[20px] py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-4 grid gap-16 md:grid-cols-2">
        {/* Контактная информация */}
        <motion.div className="flex flex-col gap-10" variants={itemVariants}>
          <h1 className="text-4xl font-bold">Контакти</h1>

          <p className="text-gray-700">
            Якщо у вас виникли питання щодо букетів, доставки або оформлення
            замовлення — напишіть нам через форму або використовуйте контактну
            інформацію нижче.
          </p>

          <div className="flex flex-col gap-2 text-gray-700">
            <p>
              <strong>Телефон:</strong>{" "}
              <a
                href="tel:+380931423553"
                className=" hover:underline"
              >
                +380 (93) 142 35 53
              </a>
            </p>
            <p>
              <strong>Email:</strong> info@bouton.com
            </p>
            <p>
              <strong>Адреса:</strong> Вул. Маяковського, 2
            </p>
            <p>
              <strong>Графік роботи:</strong> 9:00 – 17:00
            </p>
          </div>

          {/* Соцсети */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Наші соцмережі</h2>
            <motion.div
              className="flex justify-center md:justify-start gap-6"
              variants={itemVariants}
            >
              <a
                href="https://www.instagram.com/bouton_akkerman/"
                className="text-gray-700 hover:text-[#B59C82] transition"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/buotonakkerman/"
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
            </motion.div>
          </div>
        </motion.div>

        {/* Форма */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Напишіть нам
          </h2>
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
