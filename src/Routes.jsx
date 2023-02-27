import ContactScreen from "./Routes/ContactScreen";
import HomeScreen from "./Routes/HomeScreen";
import NotFound from "./Routes/NotFound";
import ProductScreen from "./Routes/ProductScreen";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contato" element={<ContactScreen />} />
        <Route path="/produto/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;