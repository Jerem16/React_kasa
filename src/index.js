import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/header";
import Error from "./components/Error/Error";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/a_propos" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
