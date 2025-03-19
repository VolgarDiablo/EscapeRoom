import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import People from "../../assets/icons/People";
import Puzzle from "../../assets/icons/Puzzle";
import Clock from "../../assets/icons/Clock";
import SeparatorBig from "../../assets/icons/SeparatorBig";
import ModalBooking from "./component/ModalBooking";

const fetchQuest = async (id) => {
  const { data } = await axios.get(`http://localhost:8080/quest/${id}`);
  return data;
};

function RenderQuest() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["quest"],
    queryFn: () => fetchQuest(id),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <div className="text-center text-xl">Загрузка...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center">Ошибка загрузки данных</div>
    );

  return (
    <div>
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url(${data.base64})`,
        }}
      ></div>
      <div className="absolute top-1/2 right-16 transform -translate-y-1/2 max-w-[680px] p-6 text-white text-left">
        <span className="text-sm font-medium text-activeText">
          {data.category}
        </span>

        <h1 className="uppercase text-[92px] font-black">{data.title}</h1>

        <div className="flex gap-6 text-[#E5E5E5] text-[14px] font-normal pb-5">
          <span className="flex items-center gap-2 text-[#FFFFFF] leading-[95%]">
            <Clock />
            {data.duration}
          </span>
          <SeparatorBig />
          <span className="flex items-center gap-2">
            <People />
            {data.players} чел
          </span>
          <SeparatorBig />
          <span className="flex items-center gap-2">
            <Puzzle />
            {data.difficulty}
          </span>
        </div>

        <p className="text-[#E5E5E5] text-[15px] leading-[150%] font-medium">
          {data.description}
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 bg-[#F28A0F] hover:bg-[#F39425] text-white py-2 px-6 rounded-lg font-bold"
        >
          ЗАБРОНИРОВАТЬ
        </button>
      </div>
      <ModalBooking
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default RenderQuest;
