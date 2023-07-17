import React from "react";
import styles from "../style";
import SoilTestNavbar from "./SoilTestNavbar";
import Header from "./Header";
import { Footer } from "../components";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useFormik } from "formik";
import { addressInfo } from "../constants";

const AddressCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-1 sm:p-3 rounded-[20px] ${
      index !== addressInfo.length - 1 ? "mb-1 sm:mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[30px] h-[30px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-white`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-red-600 text-l sm:text-2xl leading-0 sm:leading-8">
        {title}
      </h4>
      {index === 2 ? (
        <a
          href="mailto:soiltest@ind.in?subject='Hello from Abstract!'&body='Just popped in to say hello'"
          className="text-green-500 font-bold sm:text-xl text-l"
        >
          {content}
        </a>
      ) : (
        <p className="font-poppins font-normal text-secondary text-sm  sm:text-l sm:text-[16px] leading-2 sm:leading-8 mb-1 ">
          {content}
        </p>
      )}
    </div>
  </div>
);

const ContactUs = () => {
  let userId = null;
  const user = auth?.currentUser?.email;
  const queriesCollectionRef = collection(db, "SoilQueries");

  user ? (userId = user) : (userId = "Not Registered");

  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, actions) => {
      await addDoc(queriesCollectionRef, {
        UserID: userId,
        Name: values.name,
        eMail: values.email,
        Subject: values.subject,
        Meassge: values.message,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  return (
    <div className="w-full">
      <SoilTestNavbar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-3`}
      >
        <label className="flex-1 font-poppins font-bold sm:text-6xl text-l mt-0 sm:mt-2 text-yellow-500 leading-8 sm:leading-16">
          Contact Us
        </label>
      </div>
      {/* contac */}
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-10 px-1 py-0 sm:py-1 px-3`}
      >
        <div className="mx-auto mt-1 sm:mt-5  rounded-2xl border border-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-1 sm:p-3 lg:flex-auto">
            <h3 className="text-l mb-1 font-bold tracking-tight text-green-500 sm:text-3xl text-center">
              Please Feel Free To Contact Us
            </h3>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="border border-black/40 rounded-md p-1 sm:p-4 bg-transparent sm:backdrop-blur-md"
            >
              <div className="border-b border-gray-900/10 pb-2 sm:pb-4">
                <div className=" grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1 sm:grid-cols-7">
                  <div className=" col-span-1 sm:col-span-2">
                    <div className="mt-2 sm:mt-3">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className=" col-span-1 sm:col-span-5">
                    <div className="mt-2 sm:mt-3">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className=" col-span-2 sm:col-span-7">
                    <div className="mt-2 sm:mt-5">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className=" col-span-2 sm:col-span-7">
                    <div className="mt-2 sm:mt-5">
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Meassge"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1 sm:mt-3 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-l leading-2 sm:text-xl font-bold sm:leading-6 bg-blue-gradient text-white cancle-button px-1 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                  onClick={handleReset}
                >
                  Cancel
                </button>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="rounded-md px-1 py-1 sm:px-3 sm:py-2 text-l leading-2 sm:leading-6 sm:text-xl bg-blue-gradient font-bold text-white shadow-sm add-button shadow-sm ring-1 ring-inset ring-gray-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* const */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className=" p-3 sm:p-5">
            <div className="mb-1 p-0 sm:p-3">
              <h2 className="text-xl sm:text-3xl text-yellow-500 ">
                <b>Contact Information</b>
              </h2>
            </div>
            {addressInfo.map((feature, index) => (
              <AddressCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
