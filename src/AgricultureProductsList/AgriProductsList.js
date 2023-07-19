import React, { useEffect, useState } from "react";
import styles from "../style";
import trading from "../videos/trading.mp4";
import { useFormik } from "formik";
import TableScrollbar from "react-table-scrollbar";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import BNavBar from "../BussinessSection/BNavBar";

const AgriProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [productList, setProductList] = useState([]);

  const productListCollectionRef = collection(db, "AgriProductsList");

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const data = await getDocs(productListCollectionRef);
    setProductsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const getPrdList = async (state, dName) => {
    setProductList(
      productsList
        ?.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(state?.toLowerCase())
        )
        .filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(dName?.toLowerCase())
        )
    );
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
      state: "",
      dName: "",
    },
    onSubmit: async (values) => {
      getProductsList();
      getPrdList(values.state, values.dName);
    },
    onReset: async () => {
      getPrdList();
    },
  });

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
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-10 px-1 py-0 sm:py-1`}
      >
        <div className="mx-auto mt-1 sm:mt-2 max-w-2xl rounded-2xl border border-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-1 sm:p-3 lg:flex-auto">
            <h3 className="text-l mb-1 font-bold tracking-tight text-white sm:text-3xl text-center">
              Please Select your Region to View the Prices
            </h3>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="border border-black/40 rounded-md p-1 sm:p-4 bg-transparent sm:backdrop-blur-md"
            >
              <div className="border-b border-gray-900/10 pb-2 sm:pb-4">
                <div className=" grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1 sm:grid-cols-5">
                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="pType"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                    >
                      State
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <select
                        id="state"
                        name="state"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8`}
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">choose..</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Gujarath">Gujarath</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                  </div>

                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="dName"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                    >
                      District
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <select
                        id="dName"
                        name="dName"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8`}
                        value={values.dName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">choose..</option>
                        <option value="Bagalkote">Bagalkote</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Belagavi">Belagavi</option>
                        <option value="Ballary">Ballary</option>
                        <option value="Bidar">Bidar</option>
                        <option value="Chamarajanagara">Chamarajanagara</option>
                        <option value="Chikkaballapura">Chikkaballapura</option>
                        <option value="Chikkamagaluru">Chikkamagaluru</option>
                        <option value="Chitradurga">Chitradurga</option>
                        <option value="Dakshina Kannada">
                          Dakshina Kannada
                        </option>
                        <option value="Davanagere">Davanagere</option>
                        <option value="Dharwad">Dharwad</option>
                        <option value="Gadag">Gadag</option>
                        <option value="Hassan">Hassan</option>
                        <option value="Haveri">Haveri</option>
                        <option value="Kodagu">Kodagu</option>
                        <option value="Kalaburagi">Kalaburagi</option>
                        <option value="Kolar">Kolar</option>
                        <option value="Koppala">Koppala</option>
                        <option value="Mandya">Mandya</option>
                        <option value="Mysuru">Mysuru</option>
                        <option value="Raichuru">Raichuru</option>
                        <option value="Ramanagara">Ramanagara</option>
                        <option value="Shivamogga">Shivamogga</option>
                        <option value="Tumakuru">Tumakuru</option>
                        <option value="Udapi">Udapi</option>
                        <option value="Uttara Kannada">Uttara Kannada</option>
                        <option value="Vijayanagara">Vijayanagara</option>
                        <option value="Yadgiri">Yadgiri</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-l leading-2 sm:text-xl font-bold sm:leading-6 bg-blue-gradient text-white cancle-button px-1 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                    onClick={handleReset}
                  >
                    Clear
                  </button>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="rounded-md px-1 py-1 sm:px-3 sm:py-2 text-l leading-2 sm:leading-6 sm:text-xl bg-blue-gradient font-bold text-white shadow-sm add-button shadow-sm ring-1 ring-inset ring-gray-300"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-sm sm:backdrop-blur-md px-1 pt-2 sm:px-4 sm:pt-3 pb-4 rounded-sm border border-white flex-1 sm:m-2 m-1 mt-2">
        <h3 className="text-white text-l sm:text-3xl font-medium">
          Result Table of Products
        </h3>
        <div className="border-x border-white rounded-sm mt-3">
          <TableScrollbar rows={12}>
            <table className="w-full text-white table-auto">
              <thead className="bg-neutral-400">
                <tr>
                  <th className={styles.thead}>ID</th>
                  <th className={styles.thead}>Date</th>
                  <th className={styles.thead}>State</th>
                  <th className={styles.thead}>Distirct</th>
                  <th className={styles.thead}>Market</th>
                  <th className={styles.thead}>Commodity</th>
                  <th className={styles.thead}>Vareity</th>
                  <th className={styles.thead}>Min_Price</th>
                  <th className={styles.thead}>Max_Price</th>
                  <th className={styles.thead}>Modal_Price</th>
                </tr>
              </thead>
              <tbody>
                {productList?.map((prd) => (
                  <tr key={prd.id} className="hover:backdrop-blur-2xl">
                    <td className={styles.tdata}>
                      {productList.indexOf(prd) + 1}
                    </td>
                    <td className={styles.tdata}>{prd.arrival_date}</td>
                    <td className={styles.tdata}>{prd.state}</td>
                    <td className={styles.tdata}>{prd.district}</td>
                    <td className={styles.tdata}>{prd.market}</td>
                    <td className={styles.tdata}>{prd.commodity}</td>
                    <td className={styles.tdata}>{prd.variety}</td>
                    <td className={styles.tdata}>{prd.min_price}</td>
                    <td className={styles.tdata}>{prd.max_price}</td>
                    <td className={styles.tdata}>{prd.modal_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScrollbar>
        </div>
      </div>
    </div>
  );
};

export default AgriProductsList;
