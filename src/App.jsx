import "./style.css";
import React from "react";
import RoutesApp from "./Routes";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
        <RoutesApp />
    </HelmetProvider>
  );
};

export default App;