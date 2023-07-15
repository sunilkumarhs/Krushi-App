import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { farmSchema } from "../Schemas";
import { profileLogo } from "../assets";
import styles from "../style";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { storage } from "../firebase/index";
import { uploadBytes, ref } from "firebase/storage";

const FarmRegister = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [pic, setpic] = useState(null);

  const farmerCollectionRef = collection(db, "farmers");

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
      agriType: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      country: "",
      city: "",
      region: "",
      district: "",
      postalCode: "",
      mobileNum: "",
      adharNum: "",
      farmerId: "",
    },
    validationSchema: farmSchema,
    onSubmit: async (values) => {
      await addDoc(farmerCollectionRef, {
        AgricultureType: values.agriType,
        UserId: auth?.currentUser?.email,
        FirstName: values.firstName,
        LastName: values.lastName,
        Address: values.streetAddress,
        Country: values.country,
        city: values.city,
        State: values.region,
        District: values.district,
        PinCode: values.postalCode,
        MobileNumber: values.mobileNum,
        AdharNumber: values.adharNum,
        FarmerId: values.farmerId,
      });
      navigate("/FarmerSection");
    },
  });

  const toLogin = async () => {
    if (window.confirm("You will be signed out !")) {
      signOut(auth);
      navigate("/Login");
    } else {
    }
  };
  const handleImage = () => {
    imageRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imgname = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });
            if (file !== null) {
              const proRef = ref(
                storage,
                `profilePhoto/${auth?.currentUser?.uid}`
              );
              uploadBytes(proRef, file).then(() => {});
            }
            console.log(file);
            setpic(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };
  if (pic !== null) {
    console.log(pic);
  }
  return (
    <div className="w-full h-full  p-2 sm:p-5 justify-between items-center">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="border border-black/40 rounded-md p-2 sm:p-5 back-reg"
      >
        <div className="space-y-4 sm:space-y-12">
          <div className="border-b border-gray-900/10 pb-4 sm:pb-12">
            <h2 className="text-xl sm:text-4xl font-bold leading-2 sm:leading-7  text-white">
              Profile
            </h2>
            <p className="mt-0 sm:mt-1 text-sm sm:text-l leading-2 sm:leading-6 text-white">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-3 sm:mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  UserId
                </label>
                <div className=" relative mt-0 sm:mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500 sm:text-xl sm:leading-10  px-2 ">
                      @
                    </span>
                  </div>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="username"
                      className="block w-full rounded-md border px-10 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8"
                      value={auth.currentUser.email}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white">
                  Photo
                </label>
                <div className="mt-0 sm:mt-2 flex items-center gap-x-3 sm:gap-x-7">
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
                    className="rounded-md bg-white px-1 sm:px-2.5 py-1 sm:py-1.5 text-l sm:text-xl font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 button-link"
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
          </div>

          <div className="border-b border-gray-900/10 pb-1 sm:pb-12">
            <h2 className="text-xl font-bold leading-2 sm:leading-8 text-white sm:text-4xl">
              Personal Information
            </h2>
            <p className="mt-0 sm:mt-1 text-sm sm:text-l leading-1 sm:leading-6 text-white">
              Use a permanent address where you can receive mail.
            </p>
            <div className="col-span-2 sm:col-span-3">
              <div className="mt-3 sm:mt-5">
                <select
                  id="agriType"
                  name="agriType"
                  className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-6 ${
                    errors.agriType ? "input_Error" : ""
                  } `}
                  value={values.agriType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Choose the Agriculture Type</option>
                  <option value="Subsistence Agriculture">
                    Subsistence Agriculture
                  </option>
                  <option value="Industrialized Agriculture">
                    Industrialized Agriculture
                  </option>
                </select>
                {errors.agriType && touched.agriType && (
                  <p className={styles.error}>{errors.agriType}</p>
                )}
              </div>
            </div>

            <div className="mt-2 sm:mt-10 grid grid-cols-2 gap-x-2 sm:gap-x-6 gap-y-0 sm:gap-y-8 sm:grid-cols-4">
              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.firstName ? "input_Error" : ""
                    }`}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName && (
                    <p className={styles.error}>{errors.firstName}</p>
                  )}
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={`block w-full rounded-md border px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.lastName ? "input_Error" : ""
                    }`}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && (
                    <p className={styles.error}>{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <label
                  htmlFor="streetAddress"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  Street address
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.streetAddress ? "input_Error" : ""
                    }`}
                    value={values.streetAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.streetAddress && touched.streetAddress && (
                    <p className={styles.error}>{errors.streetAddress}</p>
                  )}
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
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.country ? "input_Error" : ""
                    }`}
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country && (
                    <p className={styles.error}>{errors.country}</p>
                  )}
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
                    className={`block w-full rounded-md borderpx-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.city ? "input_Error" : ""
                    }`}
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city && (
                    <p className={styles.error}>{errors.city}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="region"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  State / Province
                </label>
                <div className="mt-0 sm:mt-2">
                  <select
                    id="region"
                    name="region"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
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
                    <p className={styles.error}>{errors.region}</p>
                  )}
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
                  <select
                    id="district"
                    name="district"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
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
                    <p className={styles.error}>{errors.district}</p>
                  )}
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
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.postalCode ? "input_Error" : ""
                    }`}
                    value={values.postalCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.postalCode && touched.postalCode && (
                    <p className={styles.error}>{errors.postalCode}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="mobileNum"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  Mobile - Number
                </label>
                <div className="mt-0 sm:mt-2">
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
                  {errors.mobileNum && touched.mobileNum && (
                    <p className={styles.error}>{errors.mobileNum}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-1">
                <label
                  htmlFor="adharNum"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  Adhar Number
                </label>
                <div className="mt-0 sm:mt-2">
                  <input
                    type="text"
                    name="adharNum"
                    id="adharNum"
                    className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.adharNum ? "input_Error" : ""
                    }`}
                    value={values.adharNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.adharNum && touched.adharNum && (
                    <p className={styles.error}>{errors.adharNum}</p>
                  )}
                </div>
              </div>

              <div className=" col-span-1 sm:col-span-2">
                <label
                  htmlFor="farmerId"
                  className="block text-l sm:text-xl font-medium leading-2 sm:leading-6 text-white"
                >
                  FarmerId
                </label>
                <div className="relative mt-0 sm:mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gray-200 rounded-md ">
                    <span className=" text-gray-500  leading-2 sm:text-xl sm:leading-10  px-2 ">
                      ID
                    </span>
                  </div>
                  <input
                    type="text"
                    name="farmerId"
                    id="farmerId"
                    className={`block w-full rounded-md border px-10 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                      errors.farmerId ? "input_Error" : ""
                    }`}
                    value={values.farmerId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.farmerId && touched.farmerId && (
                  <p className={styles.error}>{errors.farmerId}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-1 sm:mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-l sm:text-xl font-bold leading-2 sm:leading-6 bg-blue-700 text-white hover:bg-red-600 px-1 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
            onClick={toLogin}
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-md px-1 sm:px-3 py-1 sm:py-2 text-l sm:text-xl leading-2 sm:leading-6 bg-blue-700 font-bold text-white shadow-sm hover:bg-green-600 shadow-sm ring-1 ring-inset ring-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FarmRegister;
