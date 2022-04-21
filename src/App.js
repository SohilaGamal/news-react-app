import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Details from "./Components/Details/details";
import Settings from "./Components/Settings/settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index exact element={<Home />} />
          <Route
            path="details"
            element={<Details props={{ userName: "News web" }} />}
          />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
