import React, { useState } from "react";
import Skype from "../../assets/icons/Skype";
import SkypeHover from "../../assets/icons/SkypeHover";
import VK from "../../assets/icons/VK";
import VKHover from "../../assets/icons/VKHover";

function Footer() {
  const [isHoveredSkype, setIsHoveredSkype] = useState(null);
  const [isHoveredVK, setIsHoveredVK] = useState(null);

  return (
    <div className="fixed bottom-0 w-full">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-row gap-[7px] cursor-pointer pb-[24px]">
          <div
            className="w-7 h-7"
            onMouseEnter={() => setIsHoveredSkype(true)}
            onMouseLeave={() => setIsHoveredSkype(false)}
          >
            {isHoveredSkype ? <SkypeHover /> : <Skype />}
          </div>
          <div
            className="w-7 h-7"
            onMouseEnter={() => setIsHoveredVK(true)}
            onMouseLeave={() => setIsHoveredVK(false)}
          >
            {isHoveredVK ? <VKHover /> : <VK />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
