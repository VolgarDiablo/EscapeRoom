import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenres = async () => {
  const { data } = await axios.get("http://localhost:8080/genre");
  return data;
};

function Genres() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div>
      {data.map((genre) => (
        <div key={genre.id}>
          <img alt={genre.name} src={genre.base64} />
          <span>{genre.name} </span>
        </div>
      ))}
    </div>
  );
}

export default Genres;
