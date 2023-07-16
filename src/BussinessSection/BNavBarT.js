import React, { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { Buttons } from "../components/Buttons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const BNavBarT = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [model, setModel] = useState(false);
  const [buyers, setBuyers] = useState([]);
  const [buyer, setBuyer] = useState([]);

  const toProfile = () => {
    setModel(!model);
  };
  const toUpdate = () => {
    navigate("/UpdateBuy");
  };

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  const user = auth?.currentUser?.email;
  const buyerCollectionRef = collection(db, "buyers");

  useEffect(() => {
    const getbuyers = async () => {
      const data = await getDocs(buyerCollectionRef);
      setBuyers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getbuyers();
  }, []);

  useEffect(() => {
    const getBuy = async () => {
      setBuyer(
        buyers.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(user?.toLowerCase())
        )
      );
    };
    getBuy();
  }, [user, buyers]);

  return (
    <>
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
          <button type="button" onClick={toProfile}>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-3 py-3 px-5 text-white nav-links nav-link`}
            >
              Profile
            </li>
          </button>
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
              <Link to="/">
                <li
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white px-4 py-3 nav-link`}
                >
                  Home
                </li>
              </Link>
              <button type="button" onClick={toProfile}>
                <li
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white px-4 py-3 nav-link`}
                >
                  Profile
                </li>
              </button>
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white px-4 py-3 nav-link`}
              >
                <button onClick={logOut}>SignOut</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {model && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <form className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-10 text-center sm:items-center sm:p-0">
              <div className="back-sinup relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all max-w-[600px] min-w-[250px] sm:my-4 sm:w-full sm:max-w-4xl sm:w-[600px] sm:min-w-[300px]">
                <div className=" px-3 pb-4 pt-5 sm:p-6 sm:pb-2">
                  <div className="sm:flex sm:items-start">
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-10 w-10 text-black-500 close-link"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={toProfile}
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                    <div className="mt-2  sm:mt-0 sm:text-left">
                      <h3 className="text-xl sm:text-3xl font-bold text-white">
                        Profile
                      </h3>
                      <p className="text-white text-sm sm:text-l mb-2">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                      <div className="border-b border-gray-900/10 mt-2 sm:mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 mb-4">
                          <label
                            htmlFor="username"
                            className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                          >
                            UserId
                          </label>
                          <div className=" relative mt-0 sm:mt-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                              <span className=" text-gray-500 sm:text-xl sm:leading-10  px-2 ">
                                @
                              </span>
                            </div>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                id="username"
                                placeholder="userid"
                                className="block w-full rounded-md border px-10 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8"
                                value={auth.currentUser.email}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* info */}
                      <div className="border-b border-gray-900/10 pb-1 sm:pb-8">
                        <h2 className="text-xl font-bold leading-2 sm:leading-8 text-white sm:text-4xl mt-3 sm:mt-5">
                          Personal Information
                        </h2>
                        {buyer.map((buy) => (
                          <div key={buy.id}>
                            <div className="col-span-2 sm:col-span-3">
                              <div className="mt-2 sm:mt-8">
                                <input
                                  id="buyType"
                                  name="buyType"
                                  className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-6`}
                                  disabled
                                  value={buy.BuyerType}
                                />
                              </div>
                            </div>

                            <div className="mt-2 sm:mt-8 grid grid-cols-2 gap-x-2 sm:gap-x-6 gap-y-0 sm:gap-y-8 sm:grid-cols-4">
                              <div className=" col-span-2 sm:col-span-2">
                                <label
                                  htmlFor="cName"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Company/Shop Name
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="cName"
                                    id="cName"
                                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.CompanyName}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className="col-span-2 sm:col-span-3">
                                <label
                                  htmlFor="cAddress"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Company Address
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="cAddress"
                                    id="cAddress"
                                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.Address}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-1 sm:col-span-1">
                                <label
                                  htmlFor="country"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Country
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.Country}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className="col-span-1 sm:col-span-1 sm:col-start-1">
                                <label
                                  htmlFor="city"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  City
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className={`block w-full rounded-md borderpx-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.city}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-1 sm:col-span-1">
                                <label
                                  htmlFor="region"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  State
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    className={`block w-full rounded-md borderpx-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.State}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-1 sm:col-span-1">
                                <label
                                  htmlFor="district"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Distirct
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="district"
                                    id="district"
                                    className={`block w-full rounded-md borderpx-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.District}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-1 sm:col-span-1">
                                <label
                                  htmlFor="postalCode"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  ZIP / Postal code
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.PinCode}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-1 sm:col-span-1">
                                <label
                                  htmlFor="mobileNum"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Contact Number
                                </label>
                                <div className="mt-0 sm:mt-2">
                                  <input
                                    type="text"
                                    name="mobileNum"
                                    id="mobileNum"
                                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.ContactNumber}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className=" col-span-2 sm:col-span-2">
                                <label
                                  htmlFor="cMId"
                                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                                >
                                  Company Mail-Id
                                </label>
                                <div className="relative mt-0 sm:mt-2">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                                    <span className=" text-gray-500  leading-2 sm:text-xl sm:leading-10  px-2 ">
                                      @
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="cMId"
                                    id="cMId"
                                    className={`block w-full rounded-md border px-10 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                                    value={buy.CompanyMailId}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col my-2 px-20 py-2 ">
                  <button
                    type="submit"
                    className=" w-full text-white my-2 text-xl sm:text-2xl font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer button-link"
                    onClick={toUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BNavBarT;
