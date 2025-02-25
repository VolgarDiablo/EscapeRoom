import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-inherit text-[#F0F0F0] z-10 fixed top-0 w-full ">
      <div className="max-w-[1300px]  mx-auto">
        <nav className="flex flex-row justify-around items-center h-[75px]">
          <NavLink to="/">
            <img alt="Escape Room" src={Logo} className="h-[50px]" />
          </NavLink>
          <ul className="flex flex-row gap-12 font-raleway font-semibold text-sm leading-[16.44px] tracking-[0.03em]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-[#F2890F]" : ""} hover:text-[#F2890F]`
                }
              >
                Квесты
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/starter"
                className={({ isActive }) =>
                  `${isActive ? "text-[#F2890F]" : ""} hover:text-[#F2890F]`
                }
              >
                Новичкам
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `${isActive ? "text-[#F2890F]" : ""} hover:text-[#F2890F]`
                }
              >
                Отзывы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/promotion"
                className={({ isActive }) =>
                  `${isActive ? "text-[#F2890F]" : ""} hover:text-[#F2890F]`
                }
              >
                Акции
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `${isActive ? "text-[#F2890F]" : ""} hover:text-[#F2890F]`
                }
              >
                Контакты
              </NavLink>
            </li>
          </ul>
          <a href="tel:380639116763" className="">
            Позвонить: +380 (63) 911-67-63
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
