import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import "./App.css";
import FooterComponent from "./components/FooterComponent";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
