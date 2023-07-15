import React, { useEffect, useState } from "react";
import styles from "../style";
import BNavBar from "./BNavBar";
import trading from "../videos/trading.mp4";
import { prdSchema } from "../Schemas";
import { useFormik } from "formik";
import TableScrollbar from "react-table-scrollbar";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const FarmerSection = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const user = auth?.currentUser?.email;
  const productCollectionRef = collection(db, "agricultureProducts");

  const getProducts = async () => {
    const data = await getDocs(productCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getPrd = async () => {
    setProduct(
      products?.filter((item) =>
        Object.values(item).join("").toLowerCase().includes(user.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getPrd();
  }, [user, products]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      pType: "",
      pName: "",
      qGrade: "",
      qty: "",
      qtyRs: "",
    },
    validationSchema: prdSchema,
    onSubmit: async (values, actions) => {
      await addDoc(productCollectionRef, {
        UserID: auth?.currentUser?.email,
        ProductType: values.pType,
        ProductName: values.pName,
        QualityGrade: values.qGrade,
        Quantity: values.qty,
        Price: values.qtyRs,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      getProducts();
      getPrd();
    },
  });
  const deleteItem = async (id) => {
    const prod = doc(db, "agricultureProducts", id);
    await deleteDoc(prod);
    getProducts();
    getPrd();
  };

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
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-3`}
      >
        <label className="flex-1 font-poppins font-bold sm:text-6xl text-l mt-0 sm:mt-2 text-white leading-8 sm:leading-16">
          Welcome To <span className="text-gradient">Farmer Trading </span>
          Section
        </label>
      </div>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-10 px-1 py-0 sm:py-1`}
      >
        <div className="mx-auto mt-1 sm:mt-5 max-w-2xl rounded-2xl border border-white sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-1 sm:p-3 lg:flex-auto">
            <h3 className="text-l mb-1 font-bold tracking-tight text-white sm:text-3xl">
              Add Your Products
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
                      Product Type
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <select
                        id="pType"
                        name="pType"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                          errors.pType ? "input_Error" : ""
                        }`}
                        value={values.pType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">choose..</option>
                        <option value="Vegitable">Vegitable</option>
                        <option value="Grains">Grains</option>
                        <option value="Fruits">Fruits</option>
                        <option value="MISC">MISC</option>
                        <option value="DairyProducts">DairyProducts</option>
                        <option value="Spices">Spices</option>
                      </select>
                      {errors.pType && touched.pType && (
                        <p className={styles.error}>{errors.pType}</p>
                      )}
                    </div>
                  </div>

                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="pName"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                    >
                      Product Name
                    </label>
                    <div className="mt-0 sm:mt-2">
                      {values.pType === "Vegitable" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Aloe Vera">Aloe Vera</option>
                          <option value="Beetroot">Beetroot</option>
                          <option value="Capsicum">Capsicum</option>
                          <option value="Drumstick">Drumstick</option>
                          <option value="Fenugreek Leaves">
                            Fenugreek Leaves
                          </option>
                          <option value="Garlic">Garlic</option>
                          <option value="Ivy gourd">Ivy gourd</option>
                          <option value="Jimikand">Jimikand</option>
                          <option value="Lobia Pods">Lobia Pods</option>
                          <option value="Mustard leaf">Mustard leaf</option>
                          <option value="Onion">Onion</option>
                          <option value="Potato">Potato</option>
                          <option value="Reddish">Reddish</option>
                          <option value="Sweet Corn">Sweet Corn</option>
                          <option value="Tapioca">Tapioca</option>
                        </select>
                      ) : values.pType === "Fruits" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Amla">Amla</option>
                          <option value="Banana">Banana</option>
                          <option value="Custard apple">Custard apple</option>
                          <option value="Grapes">Grapes</option>
                          <option value="Jackfruit">Jackfruit</option>
                          <option value="Kinnow">Kinnow</option>
                          <option value="Litchi">Litchi</option>
                          <option value="Mango">Mango</option>
                          <option value="Orange">Orange</option>
                          <option value="Papaya">Papaya</option>
                          <option value="Pomegranate">Pomegranate</option>
                          <option value="Rambutan">Rambutan</option>
                          <option value="Sapota">Sapota</option>
                          <option value="Stawberries">Stawberries</option>
                          <option value="Watermelon">Watermelon</option>
                        </select>
                      ) : values.pType === "Grains" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Arhar">Arhar</option>
                          <option value="Bajra">Bajra</option>
                          <option value="Chana Dal Split">
                            Chana Dal Split
                          </option>
                          <option value="Foxtail Millet">Foxtail Millet</option>
                          <option value="Horse Gram">Horse Gram</option>
                          <option value="Jowar">Jowar</option>
                          <option value="Kabuli Chana Whole">
                            Kabuli Chana Whole
                          </option>
                          <option value="Lobia">Lobia</option>
                          <option value="Maize">Maize</option>
                          <option value="Oats Raw">Oats Raw</option>
                          <option value="Paddy">Paddy</option>
                          <option value="Ragi">Ragi</option>
                          <option value="Urad Dal Split">Urad Dal Split</option>
                          <option value="Wheat">Wheat</option>
                        </select>
                      ) : values.pType === "MISC" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Anthurium">Anthurium</option>
                          <option value="Bamboo">Bamboo</option>
                          <option value="Carnation">Carnation</option>
                          <option value="Gladiolus">Gladiolus</option>
                          <option value="Hilsa">Hilsa</option>
                          <option value="Isabgol">Isabgol</option>
                          <option value="Jaggery">Jaggery</option>
                          <option value="Lily">Lily</option>
                          <option value="Mahua flower">Mahua flower</option>
                          <option value="Nutmeg Whole">Nutmeg Whole</option>
                          <option value="Persimmon">Persimmon</option>
                          <option value="Raw Coffee Beans">
                            Raw Coffee Beans
                          </option>
                          <option value="Saffron">Saffron</option>
                          <option value="Tulip">Tulip</option>
                        </select>
                      ) : values.pType === "DairyProducts" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Milk">Milk</option>
                          <option value="Butter">Butter</option>
                          <option value="Cheese">Cheese</option>
                          <option value="Custard">Custard</option>
                        </select>
                      ) : values.pType === "Spices" ? (
                        <select
                          id="pName"
                          name="pName"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                            errors.pType ? "input_Error" : ""
                          }`}
                          value={values.pName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">choose..</option>
                          <option value="Ajwain">Ajwain</option>
                          <option value="Black Pepper Whole">
                            Black Pepper Whole
                          </option>
                          <option value="Cloves Whole">Cloves Whole</option>
                          <option value="Dried Raw Mango Slices">
                            Dried Raw Mango Slices
                          </option>
                          <option value="Fennel seed">Fennel seed</option>
                          <option value="Large cardamom">Large cardamom</option>
                          <option value="Mace Whole">Mace Whole</option>
                          <option value="Poppy Seed">Poppy Seed</option>
                          <option value="Red chilli">Red chilli</option>
                          <option value="Tejpata">Tejpata</option>
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="pName"
                          id="pName"
                          placeholder="select-the-type"
                          className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 `}
                          disabled
                        />
                      )}
                      {errors.pName && touched.pName && (
                        <p className={styles.error}>{errors.pName}</p>
                      )}
                    </div>
                  </div>

                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="qGrade"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white"
                    >
                      Quality Grade
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <select
                        id="qGrade"
                        name="qGrade"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:max-w-xs sm:text-xl sm:leading-8 ${
                          errors.pType ? "input_Error" : ""
                        }`}
                        value={values.qGrade}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">choose...</option>
                        <option value="A-Grade">A-Grade</option>
                        <option value="B-Grade">B-Grade</option>
                        <option value="C-Grade">C-Grade</option>
                      </select>
                      {errors.qGrade && touched.qGrade && (
                        <p className={styles.error}>{errors.qGrade}</p>
                      )}
                    </div>
                  </div>

                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="qty"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white sm:flex hidden"
                    >
                      Quantity In Quintal
                    </label>
                    <label
                      htmlFor="qty"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white sm:hidden"
                    >
                      Qty In Quintal
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <input
                        type="number"
                        name="qty"
                        id="qty"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                          errors.pType ? "input_Error" : ""
                        }`}
                        value={values.qty}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.qty && touched.qty && (
                        <p className={styles.error}>{errors.qty}</p>
                      )}
                    </div>
                  </div>

                  <div className=" col-span-1 sm:col-span-1">
                    <label
                      htmlFor="qtyRs"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white sm:flex hidden"
                    >
                      Price In ₹ per Quital
                    </label>
                    <label
                      htmlFor="qtyRs"
                      className="block text-l leading-2 sm:text-xl font-medium sm:leading-6 text-white sm:hidden"
                    >
                      ₹ per Quital
                    </label>
                    <div className="mt-0 sm:mt-2">
                      <input
                        type="number"
                        name="qtyRs"
                        id="qtyRs"
                        className={`block w-full rounded-md border px-1 py-1 sm:px-1.5 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-2 sm:text-xl sm:leading-8 ${
                          errors.pType ? "input_Error" : ""
                        }`}
                        value={values.qtyRs}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.qtyRs && touched.qtyRs && (
                        <p className={styles.error}>{errors.qtyRs}</p>
                      )}
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-sm sm:backdrop-blur-md px-1 pt-2 sm:px-4 sm:pt-3 pb-4 rounded-sm border border-white flex-1 sm:m-2 m-1 mt-2">
        <h3 className="text-white text-l sm:text-3xl font-medium">
          Products Table
        </h3>
        <div className="border-x border-white rounded-sm mt-3">
          <TableScrollbar rows={7}>
            <table className="w-full text-white table-auto">
              <thead className="bg-neutral-400">
                <tr>
                  <th className={styles.thead}>ID</th>
                  <th className={styles.thead}>Type</th>
                  <th className={styles.thead}>Name</th>
                  <th className={styles.thead}>Quality</th>
                  <th className={styles.thead}>Quantity</th>
                  <th className={styles.thead}>Price in ₹</th>
                  <th className={styles.thead}>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((prd) => (
                  <tr key={prd.id} className="hover:backdrop-blur-2xl">
                    <td className={styles.tdata}>1</td>
                    <td className={styles.tdata}>{prd.ProductType}</td>
                    <td className={styles.tdata}>{prd.ProductName}</td>
                    <td className={styles.tdata}>{prd.QualityGrade}</td>
                    <td className={styles.tdata}>{prd.Quantity}</td>
                    <td className={styles.tdata}>{prd.Price}</td>
                    <td className={styles.tdata}>
                      <button
                        type="button"
                        className="text-sm leading-2 sm:text-xl font-bold sm:leading-6 bg-blue-gradient text-white cancle-button px-1 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        onClick={() => {
                          deleteItem(prd.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
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

export default FarmerSection;
