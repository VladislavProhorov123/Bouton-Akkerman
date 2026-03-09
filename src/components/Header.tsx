import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/buton.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        backdropFilter: "blur(12px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bouton Akkerman" className="w-10" />
          <h1 className="text-gray-900 text-xl font-bold">Bouton Akkerman</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-900 font-medium">
          <Link to="/" className="hover:text-[#B59C82] transition-colors">
            Головна
          </Link>

          <Link
            to="/catalog"
            className="hover:text-[#B59C82] transition-colors"
          >
            Каталог
          </Link>
          <Link to="/about" className="hover:text-[#B59C82] transition-colors">
            Про нас
          </Link>
          <Link
            to="/contacts"
            className="hover:text-[#B59C82] transition-colors"
          >
            Контакти
          </Link>
        </nav>

        {/* Burger Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
          aria-label="Меню"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50"
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-[#B59C82]"
            >
              Головна
            </Link>

            <Link
              to="/catalog"
              onClick={() => setOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-[#B59C82]"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-[#B59C82]"
            >
              Про нас
            </Link>
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-[#B59C82]"
            >
              Контакти
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
