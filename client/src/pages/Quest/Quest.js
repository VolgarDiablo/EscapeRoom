import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchQuest = async () => {
  const { data } = await axios.get("http://localhost:8080/quest/:id");
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

  return <div></div>;
}

export default Quest;
