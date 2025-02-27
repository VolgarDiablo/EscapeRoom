import React from "react";
import Genres from "./components/Genres";

function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141414] to-[#1F1D1D] ">
      <div className="max-w-[1080px] mx-auto pt-[120px] flex flex-col items-start px-[15px]">
        <div className="text-activeText text-[14px] leading-[20.16px] font-medium">
          Квесты в Днепре
        </div>
        <h1 className="text-white text-[64px] leading-[70.4px]">
          Выберите тематику
        </h1>
        <div className="pt-12">
          <Genres />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
