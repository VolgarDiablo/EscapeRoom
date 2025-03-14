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
  });

  const [activeGenre, setActiveGenre] = useState(null);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div className="flex flex-wrap items-center mb-[20px] h-10">
      {data.map((genre, index) => {
        return (
          <div
            key={genre.id}
            className={`flex flex-row items-center cursor-pointer gap-3 mr-10 text-[#E6E6E6] ${
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
                  ? "border-b-2 border-solid border-[#F2890F] text-[#E6E6E6]"
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
