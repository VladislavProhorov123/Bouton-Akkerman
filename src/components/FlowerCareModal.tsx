import { motion, AnimatePresence } from "framer-motion";
import { flowerCareTips } from "../data/flowerCare";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FlowerCareModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      // блокируем скролл
      document.body.style.overflow = "hidden";
    } else {
      // восстанавливаем
      document.body.style.overflow = "auto";
    }

    // очистка на unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed max-h-[400px] overflow-y-auto z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Як доглядати за квітами</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {flowerCareTips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="bg-[var(--button-bg-color)] text-white font-bold py-2 px-4 rounded hover:shadow-lg transition"
            >
              Закрити
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}