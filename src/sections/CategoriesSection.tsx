import { motion } from "motion/react";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

export default function CategoriesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="py-16 relative"
    >
      <div className="mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Категорії букетів
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              className="group overflow-hidden rounded-xl"
              key={category.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <CategoryCard
                name={category.name}
                image={category.image}
                slug={category.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
