import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListingPage from "./Pages/ListingPage";
import CreatePage from "./Pages/CreatePage";
import NavbarComponent from "./Navbar";
import AboutPage from "./Pages/AboutPage";
import "./App.css";
import FooterComponent from "./Footer";
import Home from "./Pages/Home";
import LoginForm from "./Login";

const App: React.FC = () => {
  // alert(role);

  return (
    <div>
      <Router>
        <div>
          <NavbarComponent />
        </div>

        <div className="containers mt-3 p-4">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/skill" element={<Home />} />
            <Route path="/" element={<Home />} />
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
