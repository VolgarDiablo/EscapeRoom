import React, { useEffect, useState } from "react";
import { useForm, useField } from "@tanstack/react-form";
import { z } from "zod";
import CheckBox from "../../../assets/icons/CheckBox";
import CloseModal from "../../../assets/icons/CloseModal";

const formSchema = (playersMin, playersMax) =>
  z.object({
    name: z
      .string()
      .min(1, "Имя обязательно")
      .regex(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/,
        "Имя должно содержать только буквы"
      ),
    phone: z
      .string()
      .regex(/^\d+$/, "Телефон должен содержать только цифры")
      .regex(/^380\d{9}$/, "Введите номер в формате 380XXXXXXXXX"),
    countParticipants: z
      .string()
      .min(1, "Введите количество участников")
      .refine((val) => !isNaN(Number(val)), { message: "Введите число" })
      .refine((val) => Number(val) >= playersMin, {
        message: `Количество участников должно быть не меньше чем ${playersMin}`,
      })
      .refine((val) => Number(val) <= playersMax, {
        message: `Количество участников должно быть не больше чем ${playersMax}`,
      }),
  });

function ModalBooking({ isOpen, onClose, playersMin, playersMax }) {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      countParticipants: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await fetch("http://localhost:8080/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Ошибка при отправке:", errorData);
          alert("Ошибка при отправке заявки. Попробуйте позже.");
          return;
        }

        form.reset();
        setAgreed(false);
      } catch (error) {
        console.error("Ошибка сети или сервера:", error);
        alert("Произошла ошибка при отправке. Проверьте соединение.");
      }
    },
  });

  const nameField = useField({
    form,
    name: "name",
    validators: {
      onSubmit: formSchema(playersMin, playersMax).shape.name,
    },
  });

  const phoneField = useField({
    form,
    name: "phone",
    validators: {
      onSubmit: formSchema(playersMin, playersMax).shape.phone,
    },
  });

  const countField = useField({
    form,
    name: "countParticipants",
    validators: {
      onSubmit: formSchema(playersMin, playersMax).shape.countParticipants,
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-[#3D3333] opacity-[.96]"
        onClick={onClose}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(e);
          console.log("clicked");
        }}
        className="relative bg-[#141414] rounded-[3px] p-8 text-[#FFFFFF] max-w-[480px] text-left flex flex-col gap-10"
      >
        <div className="flex justify-between items-center">
          <p className="text-[32px] font-extrabold leading-[120%]">
            Оставить заявку
          </p>
          <div onClick={onClose} className="hover:cursor-pointer">
            <CloseModal />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
            Ваше имя
            <input
              name={nameField.name}
              value={nameField.state.value}
              onChange={(e) => nameField.handleChange(e.target.value)}
              placeholder="Имя"
              className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
            />
            {/* {nameField.state.meta.errors && (
              <p className="text-red-500 text-sm">
                {nameField.state.meta.errors}
              </p>
            )} */}
            {Array.isArray(nameField.state.meta.errors) &&
              nameField.state.meta.errors[0]?.message && (
                <p className="text-red-500 text-sm">
                  {nameField.state.meta.errors[0].message}
                </p>
              )}
          </label>

          <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
            Контактный телефон
            <input
              name={phoneField.name}
              value={phoneField.state.value}
              onChange={(e) => phoneField.handleChange(e.target.value)}
              placeholder="Ваш телефон"
              className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
            />
            {Array.isArray(phoneField.state.meta.errors) &&
              phoneField.state.meta.errors[0]?.message && (
                <p className="text-red-500 text-sm">
                  {phoneField.state.meta.errors[0].message}
                </p>
              )}
          </label>

          <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
            Количество участников
            <input
              name={countField.name}
              value={countField.state.value}
              onChange={(e) => countField.handleChange(e.target.value)}
              placeholder="Количество участников"
              className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
            />
            {Array.isArray(countField.state.meta.errors) &&
              countField.state.meta.errors[0]?.message && (
                <p className="text-red-500 text-sm">
                  {countField.state.meta.errors[0].message}
                </p>
              )}
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!agreed}
            className="text-center text-[#FFFFFF] text-sm font-extrabold tracking-[0.03em] bg-[#B8B8B8] max-w-[220px] h-12 rounded-[47px] uppercase w-full disabled:opacity-50"
          >
            оставить заявку
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label className="h-4 w-4 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="hidden"
            />
            <CheckBox checked={agreed} />
          </label>
          <p className="text-sm">
            Я согласен с правилами обработки персональных данных и
            пользовательским соглашением
          </p>
        </div>
      </form>
    </div>
  );
}

export default ModalBooking;
