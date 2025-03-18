import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenre = async () => {
  const { data } = await axios.get("http://localhost:8080/genre");
  return data;
};

function Genre() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGenre,
    refetchOnWindowFocus: false,
  });

  const [activeGenre, setActiveGenre] = useState(null);

  if (isLoading)
    return <div className="text-center text-xl text-white">Загрузка...</div>;

  if (error)
    return (
      <div className="text-red-500 text-center">Ошибка загрузки данных</div>
    );

  return (
    <div className="flex flex-wrap items-center mb-[20px] h-10">
      {data.map((genre, index) => {
        return (
          <div
            key={genre.id}
            className={`flex flex-row items-center cursor-pointer gap-3 mr-10 text-[#E5E5E5] ${
              index === 0 ? "ml-0" : "ml-10"
            }`}
          >
            <img
              alt={genre.name}
              src={genre.base64}
              className="w-[30px] h-[30px]"
            />
            <span
              className={`text-[14px] leading-[19.6px] ${
                activeGenre === genre.id
                  ? "border-b-2 border-solid border-[#F2890F] text-[#E5E5E5]"
                  : ""
              } `}
              onClick={() => setActiveGenre(genre.id)}
            >
              {genre.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Genre;
