import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface OrderModalProps {
  bouquetName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({
  bouquetName,
  isOpen,
  onClose,
}: OrderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("Доставка");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("orders").insert([
      {
        name,
        phone,
        bouquet: bouquetName,
        delivery_type: deliveryType,
        address: deliveryType === "Доставка" ? address : null,
        comment,
      },
    ]);
    setLoading(false);

    if (error) {
      console.error(error);
      alert("Ошибка при отправке заказа");
    } else {
      alert("Заказ успешно отправлен!");
      setName("");
      setPhone("");
      setDeliveryType("Доставка");
      setAddress("");
      setComment("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Замовити букет</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
          <input
            type="text"
            placeholder="Ваше ім’я"
            className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Букет"
            className="w-full p-2 md:p-3 rounded-xl border border-gray-200 bg-gray-100 outline-none cursor-not-allowed"
            value={bouquetName}
            readOnly
          />
          <div className="relative w-full">
            <select
              className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none appearance-none bg-white cursor-pointer"
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
            >
              <option>Доставка</option>
              <option>Самовывоз</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              ▼
            </div>
          </div>
          {deliveryType === "Доставка" && (
            <input
              type="text"
              placeholder="Адреса доставки"
              className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none transition"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          )}
          <textarea
            placeholder="Комментарий"
            className="w-full p-2 md:p-3 rounded-xl border border-gray-300 focus:border-[var(--button-bg-color)] focus:ring-[var(--button-bg-color)] focus:ring-1 outline-none resize-none transition"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--button-bg-color)] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
}
