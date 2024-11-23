import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Choose from "./Pages/Choose"; 
import DonationL from "./Pages/DonationLandingPage"
import BarteringL from "./Pages/BarteringPage"
import MarketingL from "./Pages/MarketingPage"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DonationItemList from "./Pages/DonationItemList";
import DonationItemListing from "./Pages/DonateItemListing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/Donation" element={<DonationL />} />
        <Route path="/Bartering" element={<BarteringL />} />
        <Route path="/Marketing" element={<MarketingL />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/DonationList" element={<DonationItemList />} />
        <Route path="/DonationListing" element={<DonationItemListing />} />
      </Routes>
    </Router>
  );
}

export default App;
