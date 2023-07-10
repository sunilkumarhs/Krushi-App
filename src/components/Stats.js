import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row mt-5`}
      >
        <h4 className="font-poppins font-semibold sm:text-[40px] text-[20px] sm:leading-[53px] loading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal sm:text-[20px] text-[10px] sm:leading-[26px] loading-[15px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
    <div></div>
  </section>
);

export default Stats;
