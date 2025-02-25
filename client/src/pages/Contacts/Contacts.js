import React from "react";
import backgroundImage from "../../assets/bg-contacts.png";
import gradientImage from "../../assets/bg-contacts__dark-gradient.png";

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
    </div>
  );
}

export default Contacts;
