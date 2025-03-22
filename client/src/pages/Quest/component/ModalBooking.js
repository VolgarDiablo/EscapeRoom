import React, { useState } from "react";
import { z } from "zod";
import CheckBox from "../../../assets/icons/CheckBox";
import CloseModal from "../../../assets/icons/CloseModal";

function ModalBooking({ isOpen, onClose, playersMin, playersMax }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countParticipants: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Имя обязательно")
      .regex(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/,
        "Имя должно содержать только буквы"
      ),
    phone: z
      .string()
      .regex(
        /^\+380\d{9}$/,
        "Введите украинский номер в формате +380XXXXXXXXX (только цифры)"
      ),
    countParticipants: z
      .string()
      .min(1, "Укажите количество участников")
      .refine((val) => !isNaN(Number(val)), {
        message: "Введите число",
      })
      .transform((val) => Number(val))
      .refine((val) => val >= playersMin, {
        message: `Минимум ${playersMin} участника(ов)`,
      })
      .refine((val) => val <= playersMax, {
        message: `Минимум ${playersMax} участника(ов)`,
      }),
  });

  const validateField = (field, value) => {
    try {
      formSchema.pick({ [field]: true }).parse({ [field]: value });
      setFormErrors((prev) => ({ ...prev, [field]: null }));
    } catch (err) {
      setFormErrors((prev) => ({ ...prev, [field]: err.errors[0].message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-[#3D3333] opacity-[.96]"
        onClick={onClose}
      />
      <form
        method="post"
        className="relative bg-[#141414] rounded-[3px] p-8 text-[#FFFFFF] max-w-[480px] text-left flex flex-col gap-10"
      >
        <div className="bg-[#141414] flex justify-between items-center">
          <p className="text-[32px] font-extrabold leading-[120%]">
            Оставить заявку
          </p>
          <div onClick={onClose} className="hover:cursor-pointer">
            <CloseModal />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
              Ваше имя
              <input
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
            </label>
          </div>

          <div>
            <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
              Контактный телефон
              <input
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
              )}
            </label>
          </div>

          <div>
            <label className="text-[14px] flex flex-col gap-3 leading-[150%] font-medium">
              Количество участников
              <input
                name="countParticipants"
                placeholder="Количество участников"
                value={formData.countParticipants}
                onChange={handleChange}
                className="border border-[#FFFFFF] border-opacity-60 rounded px-6 py-4 bg-inherit placeholder-[#E6E6E6] placeholder-opacity-40"
              />
              {formErrors.countParticipants && (
                <p className="text-red-500 text-sm">
                  {formErrors.countParticipants}
                </p>
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-center text-[#FFFFFF] text-sm font-extrabold tracking-[0.03em] bg-[#B8B8B8] max-w-[220px] h-12 rounded-[47px] uppercase w-full"
          >
            оставить заявку
          </button>
        </div>

        <div>
          <label className="flex gap-2 items-center cursor-pointer">
            <div className="h-4 w-4">
              <input
                type="checkbox"
                name="myCheckbox"
                checked={agreed}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              <CheckBox checked={agreed} />
            </div>

            <p className="text-sm">
              Я согласен с правилами обработки персональных данных и
              пользовательским соглашением
            </p>
          </label>
        </div>
      </form>
    </div>
  );
}

export default ModalBooking;
