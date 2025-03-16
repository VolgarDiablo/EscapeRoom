import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

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

  if (isLoading) return <div className="text-center text-xl">Загрузка...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center">Ошибка загрузки данных</div>
    );

  return (
    <div>
      Выбранный квест ID: {id}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${data.base64})`,
        }}
      ></div>
    </div>
  );
}

export default RenderQuest;
