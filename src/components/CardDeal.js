import React from "react";
import { tradeDeal } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CradDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find better trade deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-1 sm:mt-5`}>
        Sign Up with your full details to market your products on your price
        based on quality.
      </p>

      <Button styles="mt-2 sm:mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={tradeDeal} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CradDeal;
