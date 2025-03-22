import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import People from "../../../assets/icons/People";
import Puzzle from "../../../assets/icons/Puzzle";
import Separator from "../../../assets/icons/Separator";
import useGenreStore from "../../../store/useGenreStore";

const fetchQuest = async () => {
  const { data } = await axios.get("http://localhost:8080/quest");
  return data;
};

function Quest() {
  const { activeGenreName } = useGenreStore();
  const [quests, setQuests] = useState([]);

  const { data } = useQuery({
    queryKey: ["quests"],
    queryFn: fetchQuest,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const cached = localStorage.getItem("questsData");
    if (cached) {
      setQuests(JSON.parse(cached));
    }
  }, []);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setQuests(data);
      localStorage.setItem("questsData", JSON.stringify(data));
    }
  }, [data]);

  const filteredQuests =
    activeGenreName === "Все квесты"
      ? quests
      : quests.filter(
          (quest) =>
            quest.category?.toLowerCase() === activeGenreName?.toLowerCase()
        );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 px-4">
      {filteredQuests.map((quest) => (
        <Link to={`/detailed-quest/${quest.id}`} key={quest.id}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={quest.base64}
              alt={quest.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#1C1B1B] to-[#2E2E2E]/0 flex flex-col justify-end p-5">
              <h3 className="text-white text-2xl font-bold">{quest.title}</h3>
              <h4 className="text-white text-lg font-semibold">{quest.name}</h4>
              <div className="flex items-center text-[#E5E5E5] text-sm mt-2">
                <span className="flex items-center gap-2 opacity-80">
                  <People />
                  {quest.playersMin} — {quest.playersMax} чел
                </span>
                <span className="mx-3">
                  <Separator />
                </span>
                <span className="flex items-center gap-2 opacity-80">
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
