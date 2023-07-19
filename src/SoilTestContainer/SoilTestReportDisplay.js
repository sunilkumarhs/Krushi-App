import React from "react";
import { Footer } from "../components";
import Header from "./Header";
import SoilTestNavbar from "./SoilTestNavbar";
import styles from "../style";
import { useFormik } from "formik";
import { storage } from "../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const SoilTestReportDisplay = () => {
  const getPhotoUrl = async (appId) => {
    const proRef = ref(storage, "soilReports/");
    listAll(proRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            if (url && url.length > 0) {
              if (itemRef.name === appId) {
                let alink = document.createElement("a");
                alink.href = url;
                alink.download = itemRef.name;
                alink.click();
              }
            }
          });
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      appId: "",
    },
    onSubmit: async (values, actions) => {
      getPhotoUrl(values.appId.concat(".pdf"));
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
      <div className={`${styles.flexStart} soilReportContainer`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} pb-10`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col py-3`}>
              <div className="mx-auto mt-1 sm:mt-5 max-w-4xl rounded-2xl border border-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none text-center">
                <div className="p-2 sm:p-5 lg:flex-auto">
                  <h3 className="text-2xl mb-1 font-bold tracking-tight text-yellow-500 sm:text-6xl sm:pb-5 backdrop-blur-sm">
                    Soil Test Report (Pdf)
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="border border-black/40 rounded-md p-1 sm:p-4 bg-transparent backdrop-blur-sm"
                  >
                    <div className="border-b border-gray-900/10 pb-2 sm:pb-4">
                      <div className="mt-2 sm:mt-10 grid grid-cols-2 gap-x-2 sm:gap-x-6 gap-y-0 sm:gap-y-8 sm:grid-cols-6">
                        <div className=" col-span-3 sm:col-span-4">
                          <label
                            htmlFor="qtyRs"
                            className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                          >
                            Enter your Application Id
                          </label>
                          <div className="mt-0 sm:mt-2">
                            <input
                              type="text"
                              name="appId"
                              id="appId"
                              className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8`}
                              value={values.appId}
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
          </section>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SoilTestReportDisplay;
