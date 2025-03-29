import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Nav from "./components/Nav";

function Header() {
  return (
    <header className="text-[#F0F0F0] z-10 fixed top-0 w-full">
      <div className="max-w-[1300px] mx-auto">
        <nav className="flex flex-row justify-between items-center h-[75px] font-semibold text-sm leading-[16.44px] tracking-[0.03em]">
          <NavLink to="/">
            <img alt="Escape Room" src={Logo} className="h-[50px]" />
          </NavLink>
          <Nav />
          <p>
            <a href="tel:380639116763">Позвонить: +380 (63) 911-67-63</a>
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
