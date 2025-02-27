import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const styles = {
    default: "hover:text-[#F2890F]",
    active: "text-[#F2890F]",
  };

  const links = [
    {
      to: "/",
      name: "Квесты",
    },
    {
      to: "/starter",
      name: "Новичкам",
    },
    {
      to: "/reviews",
      name: "Отзывы",
    },
    {
      to: "/promotion",
      name: "Акции",
    },
    {
      to: "/contacts",
      name: "Контакты",
    },
  ];

  return (
    <ul className="flex flex-row gap-12 font-raleway font-semibold text-sm leading-[16.44px] tracking-[0.03em]">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `${styles.default} ${isActive ? styles.active : ""}`
          }
          children={link.name}
        />
      ))}
    </ul>
  );
}

export default Nav;
