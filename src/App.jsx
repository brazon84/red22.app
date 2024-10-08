import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Planes from "./components/planes/Planes";
import WhatApp from "./components/whatsapp/WhatApp";
import Promos from "./components/promociones/Promos";
import Ubicacion from "./components/ubicacion/Map"

function App() {
  return (
    <div className="bg-[#930f5f] overflow-hidden sm:h-[1500px] md:h-[750px]">
      <HashRouter>
        <Nav />
        <WhatApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="planes" element={<Planes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="promo" element={<Promos />} />
          <Route path="map" element={<Ubicacion />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
