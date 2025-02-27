import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Nav from "./components/Nav";

function Header() {
  return (
    <header className="text-[#F0F0F0] z-10 fixed top-0 w-full">
      <div className="max-w-[1300px] mx-auto">
        <nav className="flex flex-row justify-around items-center  h-[75px]">
          <NavLink to="/">
            <img alt="Escape Room" src={Logo} className="h-[50px]" />
          </NavLink>
          <Nav />
          <a href="tel:380639116763" className="">
            Позвонить: +380 (63) 911-67-63
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
