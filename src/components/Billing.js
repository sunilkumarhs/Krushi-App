import React from "react";
import { apple, appContent, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={appContent}
        alt="billing"
        className="w=[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        cultivation & trading.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In fact, it is the product, but also the mass. Contribute to
        transforming agriculture into a more data-driven, efficient, and
        sustainable industry, benefiting both farmers and the overall food
        production system.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-4">
        <img
          src={apple}
          alt="apple_play"
          className="w-[80px] h-[22px] sm:w-[128px] sm:h-[42px] object-contain mr-8 sm:mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[80px] h-[22px] sm:w-[128px] sm:h-[42px]  object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
