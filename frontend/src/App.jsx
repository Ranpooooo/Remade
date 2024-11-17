import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Choose from "./Pages/Choose"; 
import DonationL from "./Pages/DonationLandingPage"
import BarteringL from "./Pages/BarteringPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/Donation" element={<DonationL />} />
        <Route path="/Bartering" element={<BarteringL />} />
      </Routes>
    </Router>
  );
}

export default App;
