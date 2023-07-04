import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <Link to="/">
        <img
          src={logo}
          alt="bank"
          className="nav-logo px-4 py-4 rounded-full cursor-pointer"
        />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3 py-3 px-5 text-white nav-links nav-link`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="ml-2">
          {/* <a href={`#home`}> */}
          <Buttons buttonStyle="btn--outline">SIGN UP</Buttons>
          {/* </a> */}
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
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white px-4 py-3 nav-link`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white px-4 py-3 nav-link`}
            >
              <a href={`#home`}>SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;