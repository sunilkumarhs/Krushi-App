import React from "react";
import styles from "../style";
import BNavBar from "./BNavBar";
import trading from "../videos/trading.mp4";

const FarmerSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BNavBar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={trading} type="video/mp4" />
        </video>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold sm:text-[52px] text-[12px] mt-2 text-white leading-[25px] sm:leading-[70px]">
            Welcome To <span className="text-gradient">Farmer Trading </span>
            Section
          </h1>
        </div>
      </div>
      <div className={`sm:hidden ${styles.flexCenter}`}></div>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-10 px-1 py-3`}
      >
        <div className="mx-auto mt-5 max-w-2xl rounded-2xl border border-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-4 sm:p-5 lg:flex-auto">
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
              Add Your Products
            </h3>
            {/* form */}
            <form
              // onSubmit={handleSubmit}
              autoComplete="off"
              className="border border-black/40 rounded-md p-5 back-reg"
            >
              <div className="space-y-12">
                {/* <div className="border-b border-gray-900/10 pb-12">
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
                <div className="mt-2 flex items-center gap-x-3 sm:gap-x-7">
                  {pic ? (
                    <img
                      src={URL.createObjectURL(pic)}
                      alt="profile"
                      className="img-display-after sm:h-[200px] sm:w-[200px]"
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      src={profileLogo}
                      alt="profile"
                      className="img-display-before rounded-lg sm:h-[200px] sm:w-[200px] sm:ml-[35px]"
                      aria-hidden="true"
                    />
                  )}
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-xl font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 button-link"
                    onClick={handleImage}
                  >
                    <input
                      type="file"
                      id="pic"
                      ref={imageRef}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div> */}

                <div className="border-b border-gray-900/10 pb-12">
                  {/* <h2 className="text-4xl font-bold leading-8 text-white">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-l leading-6 text-white">
                    Use a permanent address where you can receive mail.
                  </p> */}

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                    <div className=" col-span-3 sm:col-span-2">
                      <label
                        htmlFor="firstName"
                        className="block text-xl font-medium leading-6 text-white"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-4 sm:text-xl sm:leading-8`}
                          // value={values.firstName}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* {errors.firstName && touched.firstName && (
                    <p className="error font-semibold">{errors.firstName}</p>
                  )} */}
                      </div>
                    </div>

                    {/* <div className="col-span-3 sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.lastName ? "input_Error" : ""
                    }`}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="error font-semibold">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="streetAddress"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.streetAddress ? "input_Error" : ""
                    }`}
                    value={values.streetAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.streetAddress && touched.streetAddress && (
                    <p className="error font-semibold">
                      {errors.streetAddress}
                    </p>
                  )}
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
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.country ? "input_Error" : ""
                    }`}
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country && (
                    <p className="error font-semibold">{errors.country}</p>
                  )}
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
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.city ? "input_Error" : ""
                    }`}
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city && (
                    <p className="error font-semibold">{errors.city}</p>
                  )}
                </div>
              </div> */}

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
                          className={`block w-full rounded-md border px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8`}
                          // value={values.region}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        >
                          <option value="">choose...</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="TamilNadu">TamilNadu</option>
                          <option value="Kerala">Kerala</option>
                        </select>
                        {/* {errors.region && touched.region && (
                    <p className="error font-semibold">{errors.region}</p>
                  )} */}
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
                          className={`block w-full rounded-md border px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8`}
                          // value={values.district}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        >
                          <option value="">choose...</option>
                          <option value="Kolar">Kolar</option>
                          <option value="Chikkaballapur">Chikkaballapur</option>
                          <option value="Hassan">Hassan</option>
                        </select>
                        {/* {errors.district && touched.district && (
                    <p className="error font-semibold">{errors.district}</p>
                  )} */}
                      </div>
                    </div>

                    <div className=" col-span-3 sm:col-span-1">
                      <label
                        htmlFor="postalCode"
                        className="block text-xl font-medium leading-6 text-white"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8`}
                          // value={values.postalCode}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* {errors.postalCode && touched.postalCode && (
                    <p className="error font-semibold">{errors.postalCode}</p>
                  )} */}
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
                          type="text"
                          name="mobileNum"
                          id="mobileNum"
                          className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 `}
                          // value={values.mobileNum}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* {errors.mobileNum && touched.mobileNum && (
                    <p className="error font-semibold">{errors.mobileNum}</p>
                  )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-xl font-bold leading-6 bg-blue-700 text-white hover:bg-red-600 px-3 py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                  // onClick={toLogin}
                >
                  Cancel
                </button>
                <button
                  // disabled={isSubmitting}
                  type="submit"
                  className="rounded-md px-3 py-2 text-xl bg-blue-700 font-bold text-white shadow-sm hover:bg-green-600 shadow-sm ring-1 ring-inset ring-gray-300"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* formend */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerSection;
