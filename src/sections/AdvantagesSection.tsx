import { motion } from "framer-motion";
import AdvantageItem from "../components/AdvantageItem";
import { advantages } from "../data/advantages";
import advantageImage from "/flower5.jpg";

export default function AdvantagesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2"
          >
            <img
              src={advantageImage}
              alt="Переваги магазину"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </motion.div>

          <div className="lg:w-1/2">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8"
            >
              Переваги нашого магазину
            </motion.h2>

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {advantages.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                      scale: 0.97
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                >
                  <AdvantageItem
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}