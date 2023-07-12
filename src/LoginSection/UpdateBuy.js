import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { buySchema } from "../Schemas";
import styles from "../style";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const UpdateBuy = () => {
  const navigate = useNavigate();

  const [ctNum, setCtNum] = useState(false);
  const [coMId, setCoMId] = useState(false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      buyType: "wholesaler",
      cName: "cetrox",
      cAddress: "WhiteField",
      country: "India",
      city: "Bangalore",
      region: "Karnataka",
      district: "Bengaluru",
      postalCode: "501030",
      mobileNum: "9845865343",
      cMId: "cetroxCo@gmail.com",
    },
    validationSchema: buySchema,
    onSubmit,
  });

  const buyerCtNum = () => {
    setCtNum(true);
  };
  const buyerCMId = () => {
    setCoMId(true);
  };

  const toLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="w-full h-full  p-2 sm:p-5 justify-between items-center">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="border border-black/40 rounded-md p-2 sm:p-5 back-reg"
      >
        <div className="space-y-4 sm:space-y-12">
          <div className="border-b border-gray-900/10 pb-4 sm:pb-12">
            <h2 className="text-xl leading-2 sm:text-4xl font-bold sm:leading-7  text-white">
              Buyer Profile
            </h2>
            <p className="mt-0 sm:mt-1 text-sm sm:text-l leading-2 sm:leading-6 text-white">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-3 gap-y-2 sm:mt-10 grid grid-cols-1 gap-x-6 sm:gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
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
                      className="block flex-1 border-0 bg-transparent py-1 sm:py-1.5 pl-1 text-sm 
                      placeholder:px-10
                      placeholder:text-sm sm:text-xl
                      placeholder:text-black leading-2
                      sm:leading-8 font-bold"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-1 sm:pb-12">
            <h2 className="text-xl leading-2 sm:text-4xl font-bold sm:leading-8 text-white">
              Personal Information
            </h2>
            <p className="mt-0 sm:mt-1 text-sm sm:text-l leading-2 sm:leading-6 text-white">
              Use a permanent address where you can receive mail.
            </p>
            <div className="sm:col-span-3">
              <div className="mt-3 sm:mt-5">
                <input
                  id="buyType"
                  name="buyType"
                  className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8`}
                  disabled
                  value={values.buyType}
                />
              </div>
            </div>

            <div className="mt-2 sm:mt-10 grid grid-cols-2 gap-x-2 gap-y-0 sm:gap-x-6 sm:gap-y-8 sm:grid-cols-4">
              <div className=" col-span-2 sm:col-span-2">
                <label
                  htmlFor="cName"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Company / Shop Name
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="cName"
                    id="cName"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                    disabled
                    value={values.cName}
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <label
                  htmlFor="cAddress"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Company address
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="cAddress"
                    id="cAddress"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                    value={values.cAddress}
                    disabled
                  />
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="country"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Country
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                    value={values.country}
                    disabled
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  City
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                    value={values.city}
                    disabled
                  />
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="region"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  State / Province
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    id="region"
                    name="region"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8`}
                    disabled
                    value={values.region}
                  />
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="district"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Distirct
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    id="district"
                    name="district"
                    className={`block w-full rounded-md border px-1 px-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8`}
                    disabled
                    value={values.district}
                  />
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="postalCode"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                    value={values.postalCode}
                    disabled
                  />
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="mobileNum"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Contact Number
                </label>
                <div className="mt-0 sm:mt-2">
                  {ctNum ? (
                    <input
                      type="text"
                      name="mobileNum"
                      id="mobileNum"
                      className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                        errors.mobileNum ? "input_Error" : ""
                      }`}
                      value={values.mobileNum}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <input
                      type="text"
                      name="mobileNum"
                      id="mobileNum"
                      className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                      onClick={buyerCtNum}
                      value={values.mobileNum}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  {errors.mobileNum && touched.mobileNum && (
                    <p className={styles.error}>{errors.mobileNum}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-2 sm:col-span-2">
                <label
                  htmlFor="cMId"
                  className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                >
                  Company Mail-Id
                </label>
                <div className="relative mt-0 sm:mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500  leading-2 sm:text-xl sm:leading-10  px-2 ">
                      ID
                    </span>
                  </div>
                  {coMId ? (
                    <input
                      type="email"
                      name="cMId"
                      id="cMId"
                      className={`block w-full rounded-md border py-1 px-10 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                        errors.cMId ? "input_Error" : ""
                      }`}
                      value={values.cMId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <input
                      type="email"
                      name="cMId"
                      id="cMId"
                      className={`block w-full rounded-md border py-1 px-10 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                      onClick={buyerCMId}
                      value={values.cMId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                </div>
                {errors.cMId && touched.cMId && (
                  <p className={styles.error}>{errors.cMId}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 sm:mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-l leading-2 sm:text-xl font-bold sm:leading-6 bg-blue-700 text-white hover:bg-red-600 px-1 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
            onClick={toLogin}
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-md px-1 py-1 sm:px-3 sm:py-2 text-l leading-2 sm:text-xl sm:leading-6 bg-blue-700 font-bold text-white shadow-sm hover:bg-green-600 shadow-sm ring-1 ring-inset ring-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBuy;
