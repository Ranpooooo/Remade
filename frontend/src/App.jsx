import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Choose from "./Pages/Choose"; // Adjust path based on file structure
import HomePage1 from "./Pages/homePage1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/home1" element={<HomePage1/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
