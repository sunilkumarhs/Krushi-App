import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./LoginSection/Login";
import FarmRegister from "./LoginSection/FarmRegister";
import BuyRegister from "./LoginSection/BuyRegister";
import UpdateFarm from "./LoginSection/UpdateFarm";
import UpdateBuy from "./LoginSection/UpdateBuy";
import FarmerSection from "./BussinessSection/FarmerSection";
import BuyerSection from "./BussinessSection/BuyerSection";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import SoilTestMainPage from "./SoilTestContainer/SoilTestMainPage";
import AboutUs from "./SoilTestContainer/AboutUs";
import LawnGarden from "./SoilTestContainer/TestingServices/LawnGarden";
import HowToTakeSoil from "./SoilTestContainer/TestingServices/HowToTakeSoil";
import SoilTestReportDisplay from "./SoilTestContainer/SoilTestReportDisplay";
import ContactUs from "./SoilTestContainer/ContactUs";
import AgriProductsList from "./AgricultureProductsList/AgriProductsList";
import FertilizersDisplay from "./Fertilizers/FertilizersDisplay";

const App = () => {
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route path="/FarmRegister" Component={FarmRegister} />
            <Route path="/BuyRegister" Component={BuyRegister} />
            <Route path="/UpdateFarm" Component={UpdateFarm} />
            <Route path="/UpdateBuy" Component={UpdateBuy} />
            <Route path="/FarmerSection" Component={FarmerSection} />
            <Route path="/BuyerSection" Component={BuyerSection} />
            <Route path="/AgriProductList" Component={AgriProductsList} />
            <Route path="/FertilizersDisplay" Component={FertilizersDisplay} />
          </Routes>
        ) : null}
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/Login" Component={Login} />
          <Route path="/SoilTestMainPage" Component={SoilTestMainPage} />
          <Route path="/AboutUs" Component={AboutUs} />
          <Route path="/LawnGarden" Component={LawnGarden} />
          <Route path="/TakeSoilSample" Component={HowToTakeSoil} />
          <Route path="/ReportDisplay" Component={SoilTestReportDisplay} />
          <Route path="/SoilContactUs" Component={ContactUs} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
