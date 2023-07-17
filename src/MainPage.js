import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
import bVedio from "./videos/video-2.mp4";
import { auth } from "./firebase";
const MainPage = () => (
  <div className="w-full">
    <Navbar />
    <div className={`${styles.flexStart} mainContainer`}>
      <video src={bVedio} autoPlay loop muted />
      {/* <video
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
          transform: "translate(-50%, -42%)",
          zIndex: "-1",
        }}
      >
        <source src={bVedio} type="video/mp4" />
      </video> */}
      <div className={` ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
        <Clients />
        {auth.currentUser ? <p></p> : <CTA />} <Footer />
      </div>
    </div>
  </div>
);

export default MainPage;
