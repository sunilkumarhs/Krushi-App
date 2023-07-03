import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import MainPage from "./MainPage";
import styles from "./style";

const App = () => {
  return (
    <>
      <Router>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" exact Component={MainPage} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
