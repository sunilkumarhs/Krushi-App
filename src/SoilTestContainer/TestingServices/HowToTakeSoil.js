import React from 'react'
import styles, { layout } from "../../style";
import Header from "../Header";
import SoilTestNavbar from "../SoilTestNavbar";
import { Footer } from "../../components";
import { soilInfo, soilSample } from "../../assets";

function HowToTakeSoil() {
  return (
    <div className="w-full ">
      <SoilTestNavbar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Header />
          <section className={layout.section}>
            <div className={`${layout.sectionInfo} px-3`}>
              <h2 className={styles.heading2}>
                How to take Sample - Lawn & Garden
              </h2>
              <p className="sm:pb-3 pt-2 sm:pt-5 sm:pb-5 text-sm sm:text-xl  text-secondary">
                Soil tests can be no better than the sample. Therefore, proper
                collection of the soil sample is extremely important. To obtain
                a good soil sample, follow the directions below.
              </p>
            </div>
            <div className={`${layout.sectionImg} px-2 sm:px-0`}>
              <div className=" p-2 sm:p-5">
                <div className="pb-3 sm:pb-6">
                  <h2 className="text-l sm:text-5xl text-white">
                    <b>Lawn & Garden Test</b>
                  </h2>
                </div>
                <img
                  alt="soiltestSample"
                  className="w=[100%] h-[100%] relative z-[5]"
                  src={soilSample}
                />
              </div>
            </div>
          </section>
          <div className="text-sm sm:text-xl px-2">
            <div className="pb-5">
              <div className="pb-1 sm:pb-3 text-l sm:text-2xl text-red-500">
                <h2>When</h2>
              </div>
              <p className="text-secondary">
                Soil samples may be taken at any time during the year when soil
                conditions permit.
              </p>
            </div>
            <div className="pt-1 sm:pt-5">
              <div className="pb-1 sm:pb-3 text-l sm:text-2xl text-red-500">
                <h2>Where</h2>
              </div>
              <p className="text-secondary">
                If the area is fairly level and the soil appears to be uniform,
                collect a composite (mixed) sample.
              </p>
              <p className="text-secondary">
                If your lawn or garden has large areas which differ in
                fertility, take one sample from each area. For example, you may
                want to sample the front lawn and the back lawn separately (see
                diagram below).
              </p>
            </div>
            <div className="pt-1 sm:pt-5 pb-5">
              <img
                className="w=[100%] h-[100%] relative z-[5] sm:pt-5 pt-3 pb-2 sm:pb-5"
                src={soilInfo}
                alt="soilInfo"
              />
              <p className="text-secondary">
                Do not include soil from the lawn area and a garden in the same
                composite sample. Sample separately or avoid trouble spots or
                small areas such as borders, low spots, near trees or buildings,
                etc.
              </p>
            </div>
            <div className="pt-1 sm:pt-5">
              <div className="pb-1 sm:pb-3 text-l sm:text-2xl text-red-500">
                <h2>How</h2>
              </div>
              <p className="text-secondary pb-3">
                Use a garden trowel, spade, sampling tube, or soil auger. Scrape
                away or discard any surface mat of grass or litter. Sample the
                lawn or garden area to the sampling depth indicated below.
              </p>
              <ul className="text-secondary pb-3 list-disc px-5">
                <li className="p-1">existing grass – sample 0-3″</li>
                <li className="p-1">new grass – sample 0-6″</li>
                <li className="p-1">gardens – sample 0-6″</li>
                <li className="p-1">trees/shrubs – sample 0-12″</li>
                <li className="p-1">lead test – sample only surface 3/4″</li>
              </ul>
              <p className="text-secondary pb-5">
                Place the soil sample in a clean bucket or pan. Repeat sampling
                in five (5) scattered spots within the chosen area. Mix soil
                well to make a composite sample and send in about a pint of the
                sample to the Laboratory. Any clean and spill-proof container
                may be used.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {/* <div className="container-fluid bg-white py-5">
            <div className='container'>
            <div className="row gx-5">
                <div className="col-lg-7 pb-0 mb-lg-0">
                    <div className='pb-4'>
                        <div className='pb-2'>
                            <h1>How to Sample - Lawn & Garden</h1>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        Soil tests can be no better than the sample. Therefore, proper collection of the soil
                        sample is extremely important. To obtain a good soil sample, follow the directions below.
                        </p>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>When</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        Soil samples may be taken at any time during the year when soil conditions permit.
                        </p>
                    </div>
                    <div>
                        <div className='pb-3'>
                            <h2>Where</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        If the area is fairly level and the soil appears to be uniform, collect a composite (mixed) sample.
                        </p>
                        <p style={{fontSize:'1.5rem'}}>
                        If your lawn or garden has large areas which differ in fertility,
                         take one sample from each area. For example,
                          you may want to sample the front lawn and the back lawn separately (see diagram below).
                        </p>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <img 
                            style={{padding:'4rem'}}
                            className="d-block w-100"
                            src={LawnSamp} alt=''/>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        Do not include soil from the lawn area and a garden in the same composite sample.
                         Sample separately or avoid trouble spots or small areas such as borders, low spots,
                          near trees or buildings, etc.
                        </p>
                    </div>
                    <div>
                        <div className='pb-3'>
                            <h2>How</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        Use a garden trowel, spade, sampling tube, or soil auger.
                         Scrape away or discard any surface mat of grass or litter.
                          Sample the lawn or garden area to the sampling depth indicated below.
                        </p>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}>existing grass – sample 0-3″</li>
                            <li style={{padding:'0.5rem'}}>new grass – sample 0-6″</li>
                            <li style={{padding:'0.5rem'}}>gardens – sample 0-6″</li>
                            <li style={{padding:'0.5rem'}}>trees/shrubs – sample 0-12″</li>
                            <li style={{padding:'0.5rem'}}>lead test – sample only surface 3/4″</li>
                        </ul>
                        <p style={{fontSize:'1.5rem'}}>
                        Place the soil sample in a clean bucket or pan.
                         Repeat sampling in five (5) scattered spots within the chosen area.
                          Mix soil well to make a composite sample and send in about a pint of the sample
                           to the Laboratory. Any clean and spill-proof container may be used.
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 pb-5">
                    <div className='pb-3'>
                        <h1>Lawn and Garden Tests</h1>
                    </div>
                    <div className='pb-3'>
                        <a href='/LawnGarden'>
                        <img 
                        className="d-block w-100"
                        src={Sample} alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div> */}
    </div>
  );
}

export default HowToTakeSoil
