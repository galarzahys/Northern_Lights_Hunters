import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ExperienciasPage from "./pages/ExperienciasPage";
import VCNPage from "./pages/VCNPage";
import ContactoPage from "./pages/ContactoPage";

import "./App.css";
import "./styles/Nav.css";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiencias" element={<ExperienciasPage />} />
          <Route path="/viajaconnosotros" element={<VCNPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
