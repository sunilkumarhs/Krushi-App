import React from 'react'
import SoilTestNavbar from "./SoilTestNavbar";
import Header from "./Header";
import styles, { layout } from "../style";
import { apple, discount, google, soilPlant } from "../assets";
import { Footer } from "../components";

function SoilTestMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <SoilTestNavbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`${styles.flexStart} soilContainer`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`flex md:flex-row flex-col ${styles.paddingY} pb-10`}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col py-3 xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img
                  src={discount}
                  alt="discount"
                  className="w-[32px] h-[32px]"
                />
                <p className={`${styles.paragraph} ml-2 text-sm sm:text-xl`}>
                  <span className="text-white">Farmer </span>is main piller{" "}
                  <span className="text-white">of the </span> Nation
                </p>
              </div>
              <div className="flex flex-row justify-between items-center w-full ">
                <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[32px] text-secondary sm:leading-[100px] leading-[35px] ">
                  The Next <br className="sm:block hidden" />{" "}
                  <span className="text-gradient">Generation</span>
                </h1>
                <div className="sm:flex hidden md:mr-4 mr-0"></div>
              </div>
              <h1 className="font-poppins font-semibold sm:text-[68px] text-[32px] text-secondary sm:leading-[100px] leading-[35px] w-full ">
                Agriculture App.
              </h1>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-xl`}
              >
                This innovative application harnesses the power of digital
                solutions and data analytics to enhance productivity,
                efficiency, and sustainability in the agricultural sector.
              </p>
            </div>
          </section>
          <div className={`sm:hidden ${styles.flexCenter}`}></div>
        </div>
      </div>
      {/* soil */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
              <img
                src={soilPlant}
                alt="billing"
                className="w=[100%] h-[100%] relative z-[5]"
              />
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
            </div>

            <div className={`${layout.sectionInfo} px-3 sm:px-0`}>
              <h2 className={styles.heading2}>
                Turnaround for soil testing <br className="sm:block hidden" />
                is about two to three weeks.
              </h2>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5 text-secondary`}
              >
                The Soil Testing Laboratory is part of the Digital Farming. We
                provide high quality testing services to the public,
                universities, private companies, as well as state and federal
                agencies.
              </p>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5 text-red-500`}
              >
                The Soil Testing Lab is open for business from 8:00am to 4:30pm
                Monday through Friday!
              </p>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5 text-secondary`}
              >
                UMN Soil Testing Laboratory 135 Crops Research Building 1902
                Dudley Avenue St. Paul, MN 55108
              </p>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5 text-red-500`}
              >
                Email us at{" "}
                <a
                  href="mailto:soiltest@ind.in?subject='Hello from Abstract!'&body='Just popped in to say hello'"
                  className="text-blue-500 font-bold"
                >
                  soiltest@ind.in
                </a>{" "}
                or call <b>612-625-3101</b> for more information. Email messages
                often result in the fastest response. Results will be sent to
                you via email (if your email is on the form), but may fall into
                your spam folder. Keep a look out for email from soiltest@ind.in
              </p>

              <div className="flex flex-row flex-wrap sm:mt-10 mt-2">
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SoilTestMainPage
