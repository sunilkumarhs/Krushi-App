import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import MainPage from "./MainPage";
// import SoilAboutUs from "./SoilTestContainer/AboutUs";
// import SoilMethods from "./SoilTestContainer/OurMethods";
// import LawnGarden from "./SoilTestContainer/TestingServices/LawnGarden";
// import SoilSample from "./SoilTestContainer/TestingServices/HowToTakeSoil";
// import SoilReport from "./SoilTestContainer/PdfDisplayPage";
// import SoilTesting from "./SoilTestContainer/SoilTestMainPage";
// import styles from "./style";
import Login from "./LoginSection/Login";
const App = () => {
  return (
    <>
      <Router>
        {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div> */}
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/Login" Component={Login} />
          {/* <Route path="/SoilTesting" Component={SoilTesting} />
          <Route path="/SoilAboutUS" Component={SoilAboutUs} />
          <Route path="/SoilMathods" Component={SoilMethods}/>
          <Route path="/LawnGarden" Component={LawnGarden}/>
          <Route path="/SoilSample" Component={SoilSample}/>
          <Route path="/SoilReport" Component={SoilReport} /> */}
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
