import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/main.scss";

import Header from "./components/Header/header";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Error404 from "./pages/Error404/Error404";

import Footer from "./components/Footer/Footer";

const root = document.getElementById("root");

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a_propos" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(root).render(<App />);
