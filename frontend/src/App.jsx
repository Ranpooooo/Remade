import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Choose from "./Pages/Choose"; // Adjust path based on file structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose />} />
      </Routes>
    </Router>
  );
}

export default App;
