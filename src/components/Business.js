import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-1 sm:p-3 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-l sm:text-xl leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-sm sm:text-l leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} mb-10`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the cultivation,
          <br className="sm:block hidden" /> we'll handle the solutions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5`}>
          With the right decision, you can improve your financial life by
          farming , earning valid income and saving food insecurity.
        </p>
        <Button styles={`mt-5 sm:mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
