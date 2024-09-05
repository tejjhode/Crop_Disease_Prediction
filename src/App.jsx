// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import PlantDetails from "./components/PlantDetails";
import i18n from './i18n'; // Import i18n
import { useTranslation } from "react-i18next"; // For language switching
import News from './components/News';
import Policies from './components/Policies';
import './App.css'; 

function App() {
  const [plantData, setPlantData] = useState(null);
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
       <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/utils/images.jpg)' }}>
        <nav className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-2xl font-bold">{t("Crop Disease Detector")}</Link>
            <Link to="/news" className="ml-4">News</Link>
            <Link to="/policies" className="ml-4">Policies</Link>
            <div>
              <button onClick={() => changeLanguage('en')} className="mr-4">English</button>
              <button onClick={() => changeLanguage('hi')}>Hindi</button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home setPlantData={setPlantData} />} />
            <Route path="/plant-details" element={<PlantDetails plantData={plantData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
