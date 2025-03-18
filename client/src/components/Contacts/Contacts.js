import React from "react";
import backgroundImage from "../../assets/images/bg-contacts.png";
import gradientImage from "../../assets/images/bg-contacts__dark-gradient.png";
import SeparatorHor from "../../assets/icons/SeparatorHor";

function Contacts() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-top bg-cover z-[-1]"
        style={{
          backgroundImage: `url(${gradientImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-[#1A1A1A] opacity-45 z-[0]"></div>
      <div
        className="fixed inset-0 w-full h-full bg-cover le bg-center z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="max-w-[1080px]">
        <div>
          <span>Квесты в Киеве</span>
          <h1>Контакты</h1>
        </div>
        <SeparatorHor />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
