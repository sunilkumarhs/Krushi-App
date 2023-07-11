import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { buySchema } from "../Schemas";

const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const BuyRegister = () => {
  const navigate = useNavigate();

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
      buyType: "",
      cName: "",
      cAddress: "",
      country: "",
      city: "",
      region: "",
      district: "",
      postalCode: "",
      mobileNum: "",
      cMId: "",
    },
    validationSchema: buySchema,
    onSubmit,
  });

  const toLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="w-full h-full  p-5 justify-between items-center">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="border border-black/40 rounded-md p-5 back-reg"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-4xl font-bold leading-7  text-white">
              Buyer Profile
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
                  id="buyType"
                  name="buyType"
                  className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6 ${
                    errors.buyType ? "input_Error" : ""
                  } `}
                  value={values.buyType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Choose the Seller Type</option>
                  <option value="Retailer">Retailer</option>
                  <option value="WholeSaler">WholeSaler</option>
                </select>
                {errors.buyType && touched.buyType && (
                  <p className="error font-semibold">{errors.buyType}</p>
                )}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className=" col-span-3 sm:col-span-2">
                <label
                  htmlFor="cName"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Company / Shop Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cName"
                    id="cName"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.cName ? "input_Error" : ""
                    }`}
                    value={values.cName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.cName && touched.cName && (
                    <p className="error font-semibold">{errors.cName}</p>
                  )}
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="cAddress"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Company address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cAddress"
                    id="cAddress"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.cAddress ? "input_Error" : ""
                    }`}
                    value={values.cAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.cAddress && touched.cAddress && (
                    <p className="error font-semibold">{errors.cAddress}</p>
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
                    className={`block w-full rounded-md border px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8 ${
                      errors.region ? "input_Error" : ""
                    }`}
                    value={values.region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">choose...</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="TamilNadu">TamilNadu</option>
                    <option value="Kerala">Kerala</option>
                  </select>
                  {errors.region && touched.region && (
                    <p className="error font-semibold">{errors.region}</p>
                  )}
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
                    className={`block w-full rounded-md border px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-8 ${
                      errors.district ? "input_Error" : ""
                    }`}
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">choose...</option>
                    <option value="Kolar">Kolar</option>
                    <option value="Chikkaballapur">Chikkaballapur</option>
                    <option value="Hassan">Hassan</option>
                  </select>
                  {errors.district && touched.district && (
                    <p className="error font-semibold">{errors.district}</p>
                  )}
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
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.postalCode ? "input_Error" : ""
                    }`}
                    value={values.postalCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.postalCode && touched.postalCode && (
                    <p className="error font-semibold">{errors.postalCode}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-1">
                <label
                  htmlFor="mobileNum"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Contact Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="mobileNum"
                    id="mobileNum"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.mobileNum ? "input_Error" : ""
                    }`}
                    value={values.mobileNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobileNum && touched.mobileNum && (
                    <p className="error font-semibold">{errors.mobileNum}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-2">
                <label
                  htmlFor="cMId"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Company Mail-Id
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500  leading-2 sm:text-xl sm:leading-10  px-2 ">
                      ID
                    </span>
                  </div>
                  <input
                    type="email"
                    name="cMId"
                    id="cMId"
                    className={`block w-full rounded-md border px-1.5 px-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8 ${
                      errors.cMId ? "input_Error" : ""
                    }`}
                    value={values.cMId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.cMId && touched.cMId && (
                  <p className="error font-semibold">{errors.cMId}</p>
                )}
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
            disabled={isSubmitting}
            type="submit"
            className="rounded-md px-3 py-2 text-xl bg-blue-700 font-bold text-white shadow-sm hover:bg-green-600 shadow-sm ring-1 ring-inset ring-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyRegister;
