import React, { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [farmers, setFarmers] = useState([]);
  const [farmer, setFarmer] = useState([]);
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  const user = auth?.currentUser?.email;
  const farmerCollectionref = collection(db, "farmers");

  useEffect(() => {
    const getfarmers = async () => {
      const data = await getDocs(farmerCollectionref);
      setFarmers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getfarmers();
  }, []);

  useEffect(() => {
    const getFarm = async () => {
      setFarmer(
        farmers.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(user?.toLowerCase())
        )
      );
    };
    getFarm();
  }, [user, farmers]);

  const toBussiness = () => {
    if (farmer[0]?.UserType === "farmer") {
      navigate("/FarmerSection");
    } else {
      navigate("/BuyerSection");
    }
  };
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
          {auth.currentUser ? (
            <button type="button" onClick={toBussiness}>
              Trade
            </button>
          ) : (
            <p></p>
          )}
        </li>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3 py-3 px-5 text-white nav-links nav-link`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="ml-2">
          {auth.currentUser ? (
            <Buttons buttonStyle="btn--outline">SIGN OUT</Buttons>
          ) : (
            <Buttons buttonStyle="btn--outline">SIGN IN</Buttons>
          )}
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
              {auth.currentUser ? (
                <button type="button" onClick={toBussiness}>
                  Trade
                </button>
              ) : (
                <p></p>
              )}
            </li>
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
              {auth.currentUser ? (
                <button type="button" onClick={logOut}>
                  SignOut
                </button>
              ) : (
                <Link to="/Login">SignIn</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
