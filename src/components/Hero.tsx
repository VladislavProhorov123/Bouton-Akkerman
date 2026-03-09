import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "/hero.png";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-cover bg-center flex items-center relative h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="mx-auto px-4 max-w-6xl text-white relative">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18
              }
            }
          }}
          className="flex flex-col items-center"
        >

          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
                filter: "blur(10px)"
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
            className="text-4xl text-center md:text-6xl font-bold mb-4"
          >
            Квіти, що говорять без слів
          </motion.h1>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                filter: "blur(8px)"
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
            className="text-lg md:text-2xl mb-4 text-center"
          >
            Створюємо стильні та емоційні букети для особливих моментів —
            від романтичних зустрічей до великих свят.
          </motion.p>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            <Link
              to="/catalog"
              className="bg-[var(--button-bg-color)] text-white font-bold py-3 px-6 rounded duration-300 hover:scale-102 active:scale-98 transition-all"
            >
              Перейти до каталогу
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}