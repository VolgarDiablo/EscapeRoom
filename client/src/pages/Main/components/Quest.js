import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchQuest = async () => {
  const { data } = await axios.get("http://localhost:8080/quest");
  return data;
};

function Quest() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quest"],
    queryFn: fetchQuest,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <div className="flex flex-wrap">
      {data.map((quest, index) => {
        return (
          <div key={quest.id}>
            <img src={quest.base64} alt={quest.title} />
            <div>
              <div>{quest.name}</div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quest;
