import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import People from "../../../assets/icons/People";
import Puzzle from "../../../assets/icons/Puzzle";
import Separator from "../../../assets/icons/Separator";

const fetchQuest = async () => {
  const { data } = await axios.get("http://localhost:8080/quest");
  return data;
};

function Quest() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quest"],
    queryFn: fetchQuest,
  });

  if (isLoading) return <div className="text-center text-xl">Загрузка...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center">Ошибка загрузки данных</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 px-4">
      {data.map((quest) => (
        <Link to={`/detailed-quest/${quest.id}`} key={quest.id}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={quest.base64}
              alt={quest.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#1C1B1B] to-[#2E2E2E]/0 flex flex-col justify-end p-5">
              <h3 className="text-white text-2xl leading-[120%] font-bold text-start">
                {quest.title}
              </h3>
              <h4 className="text-white text-lg font-semibold">{quest.name}</h4>
              <div className="flex items-center text-[#E5E5E5] text-sm mt-2 ">
                <span className="flex items-center gap-1 opacity-80">
                  <People />
                  {quest.players} чел
                </span>
                <span className="mx-3">
                  <Separator />
                </span>
                <span className="flex items-center gap-1 opacity-80">
                  <Puzzle />
                  {quest.difficulty}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Quest;
