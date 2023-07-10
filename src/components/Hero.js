import React from "react";
import styles from "../style";
import { discount } from "../assets";
// import bVedio from "../videos/video-2.mp4";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2 text-sm sm:text-xl`}>
          <span className="text-white">Farmer </span>is main piller{" "}
          <span className="text-white">of the </span> Nation
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[32px] text-white sm:leading-[100px] leading-[35px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="sm:flex hidden md:mr-4 mr-0"></div>
      </div>
      <h1 className="font-poppins font-semibold sm:text-[68px] text-[32px] text-white sm:leading-[100px] leading-[35px] w-full">
        Agriculture App.
      </h1>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-xl`}
      >
        This innovative application harnesses the power of digital solutions and
        data analytics to enhance productivity, efficiency, and sustainability
        in the agricultural sector.
      </p>
    </div>
    <div className={`sm:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default Hero;
