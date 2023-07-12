import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { Buttons } from "../components/Buttons";
import { Link } from "react-router-dom";

const BNavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex  justify-between items-center navbar">
      <Link to="/">
        <img
          src={logo}
          alt="bank"
          className="nav-logo px-2 py-2 rounded-full cursor-pointer w-[55px] h-[55px] sm:w-20 sm:h-20 sm:px-3 sm:py-3"
        />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-3 py-3 px-5 text-white nav-links nav-link`}
        >
          <Link to="/">Home</Link>
        </li>
        <li className="ml-2">
          <Buttons buttonStyle="btn--outline">SIGN OUT</Buttons>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white px-4 py-3 nav-link`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white px-4 py-3 nav-link`}
            >
              <Link to="/Login">SignOut</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BNavBar;
