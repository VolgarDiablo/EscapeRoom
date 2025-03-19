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
      <div className="relative z-1 max-w-[1080px] mx-auto pt-[130px] text-left">
        <div>
          <span className="text-activeText text-[14px] leading-[144%] font-medium">
            Квесты в Киеве
          </span>
          <h1 className="text-[64px] leading-[110px] font-extrabold text-white">
            Контакты
          </h1>
        </div>
        <SeparatorHor />
        <div className="flex items-start gap-[50px] pt-[50px]">
          {/* Блок с текстом */}
          <div className="w-[400px] flex flex-col text-white gap-[35px]">
            <div>
              <span className="font-bold text-[14px] leading-[140%] tracking-[-2%]">
                Адрес
              </span>
              <p className="text-[15px] font-medium leading-[150%]">
                Киев, улица Крещатик, д 15
              </p>
            </div>

            <div className="mt-4">
              <span className="font-bold text-[14px] leading-[140%] tracking-[-2%]">
                Режим работы
              </span>
              <p className="text-[15px] font-medium leading-[150%]">
                Ежедневно, с 9:00 до 20:00
              </p>
            </div>

            <div className="mt-4">
              <span className="font-bold text-[14px] leading-[140%] tracking-[-2%]">
                Телефон
              </span>
              <p className="text-[15px] font-medium leading-[150%]">
                <a href="tel:380639116763">+380 (63) 911-67-63</a>
              </p>
            </div>

            <div className="mt-4">
              <span className="font-bold text-[14px] leading-[140%] tracking-[-2%]">
                E-mail
              </span>
              <p className="text-[15px] font-medium leading-[150%]">
                <a href="mailto:info@escape-room.com.ua">
                  info@escape-room.com.ua
                </a>
              </p>
            </div>
          </div>

          <div className="flex-1 h-[350px]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.717370526104!2d30.523029876829202!3d50.44756258757131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce53fcffc3af%3A0x290a159fcbb5f4e4!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwgMTUsINCa0LjQtdCyLCDQo9C60YDQsNC40L3QsCwgMDIwMDA!5e1!3m2!1sru!2sde!4v1742374479724!5m2!1sru!2sde"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
