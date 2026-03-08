import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/buton.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--header-bg-color)] p-4 flex justify-between items-center shadow-md relative z-50">
      
      {/* logo */}
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" className="w-10" />
        <h1 className="text-black text-xl font-bold">Bouton Akkerman</h1>
      </div>

      {/* desktop menu */}
      <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-gray-500 transition-colors">
          Головна
        </Link>
        <Link to="/about" className="hover:text-gray-500 transition-colors">
          Про нас
        </Link>
        <Link to="/catalog" className="hover:text-gray-500 transition-colors">
          Каталог
        </Link>
        <Link to="/contacts" className="hover:text-gray-500 transition-colors">
          Контакти
        </Link>
      </nav>

      {/* burger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-black"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* mobile menu */}
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
              className="text-gray-800 text-lg font-medium"
            >
              Головна
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-800 text-lg font-medium"
            >
              Про нас
            </Link>

            <Link
              to="/catalog"
              onClick={() => setOpen(false)}
              className="text-gray-800 text-lg font-medium"
            >
              Каталог
            </Link>

            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="text-gray-800 text-lg font-medium"
            >
              Контакти
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}