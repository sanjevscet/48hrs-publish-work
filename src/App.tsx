import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListingPage from "./Pages/ListingPage";
import CreatePage from "./Pages/CreatePage";
import NavbarComponent from "./Navbar";
import AboutPage from "./Pages/AboutPage";
import "./App.css";
import FooterComponent from "./Footer";
import Chart from "./Pages/Chart";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <NavbarComponent />
        </div>

        <div className="containers mt-3 p-4">
          <Routes>
            <Route path="/skill" element={<Chart />} />
            <Route path="/" element={<Chart />} />
            <Route path="/list" element={<ListingPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
};

export default App;
