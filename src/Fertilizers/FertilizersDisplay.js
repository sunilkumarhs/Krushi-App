import React, { useEffect, useState } from "react";
import styles from "../style";
import trading from "../videos/trading.mp4";
import TableScrollbar from "react-table-scrollbar";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import BNavBar from "../BussinessSection/BNavBar";

const FertilizersDisplay = () => {
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, "FertilizersPrice");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getDocs(productCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
          Welcome To <span className="text-gradient">Fertilizers Price </span>
          Section
        </label>
      </div>
      <div className="backdrop-blur-sm sm:backdrop-blur-md px-1 pt-2 sm:px-4 sm:pt-3 pb-4 rounded-sm border border-white flex-1 sm:m-2 m-1 mt-2">
        <h3 className="text-white text-l sm:text-3xl font-medium">
          Fertilizers Price
        </h3>
        <div className="border-x border-white rounded-sm mt-3">
          <TableScrollbar rows={17}>
            <table className="w-full text-white table-auto">
              <thead className="bg-neutral-400">
                <tr>
                  <th className={styles.thead}>No.</th>
                  <th className={styles.thead}>Fertilizer Name</th>
                  <th className={styles.thead}>Firm Name</th>
                  <th className={styles.thead}>Price(Unit in Rs./50 kg bag)</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((prd) => (
                  <tr key={prd.id} className="hover:backdrop-blur-2xl">
                    <td className={styles.tdata}>
                      {products.indexOf(prd) + 1}
                    </td>
                    <td className={styles.tdata}>{prd.FertilizerName}</td>
                    <td className={styles.tdata}>{prd.FirmName}</td>
                    <td className={styles.tdata}>{prd.Price}</td>
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

export default FertilizersDisplay;
