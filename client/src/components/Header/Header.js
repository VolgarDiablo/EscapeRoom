import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-inherit text-[#F0F0F0]">
      <nav>
        <NavLink to="/">
          <img alt="Escape Room" src={Logo} />
        </NavLink>
        <ul>
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
        <a href="tel:88003335599" className="">
          Позвонить: 8 (800) 333-55-99
        </a>
      </nav>
    </header>
  );
}

export default Header;
