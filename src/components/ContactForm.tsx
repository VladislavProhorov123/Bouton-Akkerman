import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: number;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full max-w-xl"
    >
      <div className="">
        <input
          {...register("name", {
            required: "Введіть ім’я",
            minLength: {
              value: 2,
              message: "Ім’я повинно містити мінімум 2 символи",
            },
          })}
          placeholder="Ваше ім’я"
          className="w-full border rounded-lg p-3 outline-none focus:border-[var(--button-bg-color)]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="">
        <input
          {...register("phone", {
            required: "Введіть номер телефону",
            pattern: {
              value: /^[0-9+\s()-]{10,15}$/,
              message: "Некоректний номер телефону",
            },
          })}
          placeholder="Телефон"
          className="w-full border rounded-lg p-3 outline-none focus:border-[var(--button-bg-color)]"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Введіть email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Некоректний email",
            },
          })}
          placeholder="Email"
          className="w-full border rounded-lg p-3 outline-none focus:border-[var(--button-bg-color)]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register("message", {
            required: "Напишіть повідомлення",
            minLength: {
              value: 10,
              message: "Повідомлення повинно містити мінімум 10 символів",
            },
          })}
          rows={4}
          placeholder="Ваше повідомлення"
          className="w-full border rounded-lg p-3 outline-none focus:border-[var(--button-bg-color)] resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[var(--button-bg-color)] text-white font-semibold py-3 rounded-xl transition hover:scale-102 active:scale-95 hover:opacity-90"
      >
        Відправити
      </button>
    </form>
  );
}
