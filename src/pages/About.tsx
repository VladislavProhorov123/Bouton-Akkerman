import { motion } from "framer-motion";
import img1 from "/flower5.jpg";
import img2 from "/flower4.jpg";
import img3 from "/flower6.jpg";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sections = [
    {
      title: "Наша історія",
      text: [
        "Bouton Akkerman — це більше ніж просто магазин квітів. Це місце, де народжуються емоції, створюються особливі моменти та з’являються красиві історії. Наш шлях почався з простої ідеї — дарувати людям радість через квіти.",
        "Кожен букет, який створюється нашими флористами, має свою атмосферу та настрій. Ми уважно підбираємо квіти, кольори та форми, щоб композиція виглядала гармонійно та передавала справжні почуття.",
        "За час роботи ми допомогли сотням людей зробити свої події особливими: освідчення, дні народження, весілля або просто маленькі приємні сюрпризи для близьких.",
      ],
      img: img1,
      reverse: false,
    },
    {
      title: "Якість та свіжість квітів",
      text: [
        "Ми приділяємо особливу увагу якості кожної квітки. Усі рослини постачаються від перевірених партнерів, які дотримуються високих стандартів вирощування та транспортування.",
        "Наші флористи мають досвід створення різноманітних композицій — від класичних букетів із троянд до сучасних авторських аранжувань. Кожна робота створюється вручну з великою увагою до деталей.",
        "Саме тому букети від Bouton Akkerman довго зберігають свою свіжість, яскравість та естетичний вигляд, радуючи своїх власників не один день.",
      ],
      img: img2,
      reverse: true,
    },
    {
      title: "Наші цінності",
      text: [
        "Ми переконані, що квіти можуть сказати більше, ніж слова. Саме тому наша команда працює над тим, щоб кожен букет був не просто красивим, а й передавав справжні емоції.",
        "Наші головні принципи — це якість, уважність до клієнтів та любов до своєї справи. Ми прагнемо створювати композиції, які викликають щирі посмішки та залишають теплі спогади.",
        "Bouton Akkerman — це місце, де кожен букет створюється з натхненням. Ми хочемо, щоб наші квіти допомагали людям виражати свої почуття та робити життя трохи красивішим.",
      ],
      img: img3,
      reverse: false,
    },
  ];

  return (
    <div className="mt-[20px] py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col gap-24">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${section.reverse ? "md:flex-row-reverse" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              {section.text.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.img
              src={section.img}
              alt=""
              className="md:w-1/2 w-full h-[360px] object-cover rounded-xl shadow-lg"
              variants={itemVariants}
            />
          </motion.section>
        ))}
      </div>
    </div>
  );
}
