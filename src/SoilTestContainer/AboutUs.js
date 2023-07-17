import React from "react";
import SoilTestNavbar from "./SoilTestNavbar";
import Header from "./Header";
import styles, { layout } from "../style";
import { Footer } from "../components";
import { soilProcedure } from "../assets";
import { addressInfo } from "../constants";

const AddressCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-1 sm:p-3 rounded-[20px] ${
      index !== addressInfo.length - 1 ? "mb-1 sm:mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[30px] h-[30px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-white`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-red-600 text-l sm:text-2xl leading-0 sm:leading-8">
        {title}
      </h4>
      {index === 2 ? (
        <a
          href="mailto:soiltest@ind.in?subject='Hello from Abstract!'&body='Just popped in to say hello'"
          className="text-green-500 font-bold sm:text-xl text-l"
        >
          {content}
        </a>
      ) : (
        <p className="font-poppins font-normal text-secondary text-sm  sm:text-l sm:text-[16px] leading-2 sm:leading-8 mb-1 ">
          {content}
        </p>
      )}
    </div>
  </div>
);

function AboutUs() {
  return (
    <div className="w-full">
      <SoilTestNavbar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
          <section className={layout.section}>
            <div className={`${layout.sectionInfo} px-3 `}>
              <h2 className={styles.heading2}>About Us</h2>
              <p
                className={`${styles.paragraph} sm:max-w-[800px] max-w-[400px] mt-1 sm:mt-5 py-3 px-3 sm:px-0 `}
              >
                The Soil Testing Laboratory is an analytical service laboratory
                providing Universities, state and federal agencies, private
                companies, and the general public with quality analyses. With
                over 100 tests available, our goals are to provide a high level
                of analytical precision, quality, and accuracy, with timely
                results, to every client, for every sample tested.
              </p>
              <p
                className={`${styles.paragraph} sm:max-w-[800px] max-w-[400px] mt-1 sm:mt-5 py-3 px-3 sm:px-0`}
              >
                Soil testing takes the guesswork out of fertilizer
                recommendations, ensures fertile soil without pollution of the
                environment, and makes good economic sense. Our recommendations
                are based on laboratory results, soil characteristics, crop
                history, and crop nutrient requirements and are specific to
                Krushi Mithra locations and conditions.
              </p>
              <p
                className={`${styles.paragraph} sm:max-w-[800px] max-w-[400px] mt-1 sm:mt-5 py-3 px-3 sm:px-0`}
              >
                The Soil Testing Laboratory is part of the Digital Farming. We
                provide high quality testing services to the public,
                universities, private companies, as well as state and federal
                agencies.
              </p>
            </div>
            <div className={`${layout.sectionImg} px-5`}>
              <div className="bg-gray-500 p-3 sm:p-5 rounded-2xl">
                <div className="mb-3 p-0 sm:p-3">
                  <h2 className="text-xl sm:text-3xl text-yellow-500 text-center">
                    <b>Contact Information</b>
                  </h2>
                </div>
                {addressInfo.map((feature, index) => (
                  <AddressCard key={feature.id} {...feature} index={index} />
                ))}
              </div>
            </div>
          </section>
          <section
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
          >
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
            <div className="w-full flex justify-between items-center md:flex-col flex-col sm:mb-16 mb-6 relative z-[1]">
              <h1 className={styles.heading2}>
                Our Methods & <br /> Our Soil Testing Methods
              </h1>
              <div className="w-full md:mt-4 mt-2 sm:mt-6">
                <p className={`${styles.paragraph} text-left text-red-500`}>
                  We use a variety of instruments to analyze soil samples
                  including:
                </p>
                <ul className="text-secondary text-sm sm:text-xl list-disc">
                  <li className="p-2">Atomic absorption spectrophotometers,</li>
                  <li className="p-2">
                    Inductively Coupled Plasma Spectrometers (ICPs),
                  </li>
                  <li className="p-2">Lachat Flow Injection Analyzer,</li>
                  <li className="p-2">colorimeters,</li>
                  <li className="p-2">general laboratory equipment.</li>
                </ul>
              </div>
              <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                <div className="flex justify-between flex-col px-3 py-3 sm:px-10 sm:py-5 rounded-[20px] sm:max-w-[600px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-1 sm:my-5 feedback-card">
                  <p className={`${styles.paragraph} text-left text-red-500`}>
                    Sample Preparation
                  </p>
                  <ul className="text-secondary text-sm sm:text-xl list-disc">
                    <li className="p-2">
                      At the laboratory, each sample is assigned an
                      identification number, transferred to a paper bag, and
                      then placed in a metal tray.
                    </li>
                    <li className="p-2">
                      Every 12th sample is a quality control sample, either a
                      check sample of known chemical properties to ensure
                      accuracy or a duplicate sample to evaluate laboratory
                      precision.
                    </li>
                    <li className="p-2">
                      Samples are dried rapidly under forced air, the
                      temperature not exceeding 95oF.
                    </li>
                    <li className="p-2">
                      Dried samples are crushed with a mechanical grinder and
                      passed through a stainless steel 10-mesh 2.0 millimeter
                      sieve to remove stones and unwanted debris.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between flex-col px-3 py-3 sm:px-10 sm:py-5 rounded-[20px]   sm:max-w-[600px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-1 sm:my-5 feedback-card">
                  <p className={`${styles.paragraph} text-left text-red-500`}>
                    Routine Soil Tests (regular tests) & Florist/Greenhouse
                    Tests
                  </p>
                  <ul className="text-secondary text-sm sm:text-xl list-disc">
                    <li className="p-2">Estimated texture category</li>
                    <li className="p-2">Soil pH (1:1 suspension)</li>
                    <li className="p-2">
                      Lime requirement (Sikora buffer index)
                    </li>
                    <li className="p-2">
                      Extractable phosphorus (Bray-1 extractant, Olsen-sodium
                      bicarbonate extractant)
                    </li>
                    <li className="p-2">
                      Available potassium (ammonium acetate extractant)
                    </li>
                    <li className="p-2">
                      Organic matter (%) (loss on ignition)
                    </li>
                    <li className="p-2">Spurway</li>
                    <li className="p-2">Saturated Media Extract (SME)</li>
                  </ul>
                </div>
                <div className="flex justify-between flex-col px-3 py-3 sm:px-10 sm:py-5 rounded-[20px]   sm:max-w-[600px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-1 sm:my-5 feedback-card">
                  <p className={`${styles.paragraph} text-left text-red-500`}>
                    Soil Tests Made Upon Request
                  </p>
                  <ul className="text-secondary text-sm sm:text-xl list-disc">
                    <li className="p-2">
                      Soluble salts (electrical conductance, 1:1 soil
                      suspension, saturation extract)
                    </li>
                    <li className="p-2">
                      Extractable sulfur (calcium phosphate extractant)
                    </li>
                    <li className="p-2">Extractable zinc (DTPA extractant)</li>
                    <li className="p-2">
                      Extractable zinc, copper, iron, and manganese (DTPA
                      extractant)
                    </li>
                    <li className="p-2">
                      Nitrate-nitrogen (0.01 M CaSO4 extractant)
                    </li>
                    <li className="p-2">
                      Exchangeable magnesium and calcium (ammonium acetate
                      extractant)
                    </li>
                    <li className="p-2">
                      Hot water extractable boron (0.1 % CaCl2.H2O)
                    </li>
                    <li className="p-2">
                      Environmental Lead (1 N HNO3 extractant)
                    </li>
                    <li className="p-2">
                      Nutrient Management Phosphorus (Olsen method)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:mt-4 mt-2 sm:mt-6 mb-3 sm:mb-10">
                <p className={`${styles.paragraph} text-left text-red-500`}>
                  Reference
                </p>
                <p className="text-secondary text-sm sm:text-xl">
                  Recommended Chemical Soil Test Procedures for the North
                  Central Region. 1988 (revised 2015). North Central Regional
                  Research Publication No. 221 (Missouri Agricultural Experiment
                  Station SB 1001).
                </p>
              </div>
              <h1
                className={`font-poppins font-normal leading-2 sm:leading-8 text-left text-red-500 pb-3 text-l sm:text-2xl`}
              >
                Soil Testing Procedures
              </h1>
              <div>
                <img
                  src={soilProcedure}
                  alt="billing"
                  className="w=[100%] h-[100%] relative z-[5]"
                />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
