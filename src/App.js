import "./css/main.css";
import Header from "./header";
import LeftNavigation from "./LeftNavigation";
import RegistrationForm from "./contentForm";
import Home from "./Components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="Main">
        {/* <div className="Home">
          <HomeComponent /> */}

        <div className="LeftNavigation">
          <LeftNavigation />
        </div>
        <div className="RegistrationForm">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
