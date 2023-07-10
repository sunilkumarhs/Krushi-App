import React from "react";
import { useNavigate } from "react-router-dom";

const FarmRegister = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/Login");
  };
  const toPage = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-full  p-5 justify-between items-center">
      <form className="border border-black/40 rounded-md p-5 back-reg">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-4xl font-bold leading-7  text-white">
              Profile
            </h2>
            <p className="mt-1 text-l leading-6 text-white">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  UserId
                </label>
                <div className=" relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500 sm:text-xl sm:leading-10  px-2 ">
                      @
                    </span>
                  </div>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="username"
                      placeholder="userid"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 
                      placeholder:px-10
                      placeholder:sm:text-xl
                      placeholder:text-black
                      sm:leading-8 font-bold"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-xl font-medium leading-6 text-white">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {/* <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  /> */}
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-xl font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 button-link"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-4xl font-bold leading-8 text-white">
              Personal Information
            </h2>
            <p className="mt-1 text-l leading-6 text-white">
              Use a permanent address where you can receive mail.
            </p>
            <div className="sm:col-span-3">
              <div className="mt-5">
                <select
                  id="agriType"
                  name="agriType"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                >
                  <option value="">Choose the Agriculture Type</option>
                  <option value="Subsistence Agriculture">
                    Subsistence Agriculture
                  </option>
                  <option value="Industrialized Agriculture">
                    Industrialized Agriculture
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="first-name"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-1">
                <label
                  htmlFor="last-name"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="country"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-1 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="region"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <select
                    id="region"
                    name="region"
                    className="block w-full rounded-md border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="TamilNadu">TamilNadu</option>
                    <option value="Kerala">Kerala</option>
                  </select>
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="district"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Distirct
                </label>
                <div className="mt-2">
                  <select
                    id="district"
                    name="district"
                    className="block w-full rounded-md border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8"
                  >
                    <option value="Kolar">Kolar</option>
                    <option value="Chikkaballapur">Chikkaballapur</option>
                    <option value="Hassan">Hassan</option>
                  </select>
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="postal-code"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="postal-code"
                    id="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="mobileNum"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="mobileNum"
                    id="mobileNum"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="adharNum"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Adhar Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="adharNum"
                    id="adharNum"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-2">
                <label
                  htmlFor="farmerId"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  FarmerId
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500 sm:text-xl sm:leading-10  px-2 ">
                      ID
                    </span>
                  </div>
                  <input
                    type="text"
                    name="farmerId"
                    id="farmerId"
                    className="block w-full rounded-md border-0 px-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-xl font-bold leading-6 bg-blue-700 text-white hover:bg-red-600 px-3 py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
            onClick={toLogin}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md px-3 py-2 text-xl bg-blue-700 font-bold text-white shadow-sm hover:bg-green-600 shadow-sm ring-1 ring-inset ring-gray-300"
            onClick={toPage}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FarmRegister;
