import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
// import SoilAboutUs from "./SoilTestContainer/AboutUs";
// import SoilMethods from "./SoilTestContainer/OurMethods";
// import LawnGarden from "./SoilTestContainer/TestingServices/LawnGarden";
// import SoilSample from "./SoilTestContainer/TestingServices/HowToTakeSoil";
// import SoilReport from "./SoilTestContainer/PdfDisplayPage";
// import SoilTesting from "./SoilTestContainer/SoilTestMainPage";
// import styles from "./style";
import Login from "./LoginSection/Login";
import FarmRegister from "./LoginSection/FarmRegister";
import BuyRegister from "./LoginSection/BuyRegister";
import UpdateFarm from "./LoginSection/UpdateFarm";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/Login" Component={Login} />
          <Route path="/FarmRegister" Component={FarmRegister} />
          <Route path="/BuyRegister" Component={BuyRegister} />
          <Route path="/UpdateFarm" Component={UpdateFarm} />
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
