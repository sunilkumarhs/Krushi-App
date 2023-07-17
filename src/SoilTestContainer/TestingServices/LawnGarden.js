import React from "react";
import { Footer } from "../../components";
import SoilTestNavbar from "../SoilTestNavbar";
import Header from "../Header";
import styles, { layout } from "../../style";
import { soilTestSample } from "../../assets";
import { Link } from "react-router-dom";

function LawnGarden() {
  return (
    <div className="w-full ">
      <SoilTestNavbar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`${styles.flexStart} soilTestContainer`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`flex md:flex-row flex-col ${styles.paddingY} pb-10`}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col py-3 xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row justify-between items-center w-full ">
                <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[32px] text-secondary sm:leading-[100px] leading-[35px] ">
                  Lwan & <br className="sm:block hidden" />{" "}
                  <span className="text-gradient">Garden</span>
                </h1>
                <div className="sm:flex hidden md:mr-4 mr-0"></div>
              </div>
              <h1 className="font-poppins font-semibold sm:text-[68px] text-[32px] text-secondary sm:leading-[100px] leading-[35px] w-full ">
                Testing Service.
              </h1>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-xl text-yellow-400 font-bold`}
              >
                The tests provided here are for evaluating soil fertility, pH
                level, and/or problems due to excessive salts or fertilizer
                materials. Based on the test results and type of plants to be
                grown, you will be sent the appropriate fertilizer
                recommendation for good plant growth without adverse effects on
                the environment. Watch the video below to learn how to collect
                soil samples from your lawn or garden.
              </p>
            </div>
          </section>
          <div className={`sm:hidden ${styles.flexCenter}`}></div>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${layout.section} sm:pb-0`}>
            <div className={`${layout.sectionInfo} px-3`}>
              <h2 className={styles.heading2}>
                How to Submit Samples for Analysis
              </h2>
              <ol className="text-white sm:pt-5 pb-3 sm:pb-8 text-sm sm:text-xl list-decimal">
                <li className=" pb-3 sm:pb-5 max-w-[800px] text-secondary">
                  Download, print and fill out the Lawn & Garden Soil Analysis
                  Request Sheet. Use one sheet per sample. Include your email
                  address and we will email you the results.{" "}
                </li>
                <li className="pb-3 sm:pb-5 max-w-[800px] text-red-500">
                  Follow the instructions for collecting samples on the
                  second/back page of the PDF and watch the
                  <p className=" text-blue-500 font-semibold">
                    <a
                      href="https://www.youtube.com/watch?v=BeK4Eg9Dzr8&t=1s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How to Take a Soil Sample video.
                    </a>
                  </p>
                </li>
                <li className="pb-3 sm:pb-5 max-w-[800px] text-secondary">
                  The sample size should be about 2-3 cups.
                </li>
                <li className="pb-3 sm:pb-5 max-w-[800px] text-red-500">
                  Place sample in a tightly sealed container or bag (clean).
                  Label the container or bag with a sample name/number that
                  matches what you put on the request sheet.{" "}
                </li>
                <li className="pb-3 sm:pb-5 max-w-[800px] text-secondary">
                  Enclose a check payable to the University of Krushi Mithra for
                  all services requested. Do NOT send cash - we cannot be
                  responsible for cash sent through the mail. You may also pay
                  with a credit card. Scroll down for prices.
                </li>
                <li className="pb-3 sm:pb-5 max-w-[800px] text-red-500">
                  Send the soil sample(s), payment, and request sheet(s) to:
                  <p className="">
                    <b>Soil Testing Laboratory,University of Krushi Mithra</b>
                  </p>
                  <p className="">135 Crops Research Building</p>
                  <p className="">1029 whitefield.</p>
                  <p> pin - 551908</p>
                </li>
              </ol>
            </div>
            <div className={`${layout.sectionImg} px-2 sm:px-0 pb-3`}>
              <div className="bg-gray-300 p-2 sm:p-5">
                <div className="mb-3 p-0 sm:p-3">
                  <h2 className="text-xl sm:text-2xl text-primary">
                    <b>Samples</b>
                  </h2>
                </div>
                <img
                  alt="soiltestSample"
                  className="w=[100%] h-[100%] relative z-[5]"
                  src={soilTestSample}
                />
                <p className="text-sm sm:text-2xl text-blue-500 pt-2 pb-2">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/digitalfarmingapp.appspot.com/o/soilSample%2Flawnpdf.pdf?alt=media&token=74c5deb4-b63e-46cc-812b-7cf61dd06986"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lawn & Garden Soil Analysis Request Sheet
                  </a>
                  (PDF)
                </p>
                <Link to="/TakeSoilSample">
                  <p className="text-sm sm:text-2xl text-red-500 pb-2">
                    How to take a Soil Sample
                  </p>
                </Link>
              </div>
            </div>
          </section>
          <p className="pb-3 sm:pb-5 text-sm sm:text-xl  text-secondary">
            You may drop off the samples in person. See Contact Us for
            directions. Free parking to drop-off samples is available along the
            curb on Dudley Ave. Call us from your car if you would like us to
            walk outside the office to pick up your samples from you.
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LawnGarden;
