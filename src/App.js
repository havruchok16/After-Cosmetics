import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Catalog from "./components/Catalog/Catalog";
import Error from "./components/Error/Error";
import Assistant from "./components/Assistant/Assistant";
import Footer from "./components/Footer/Footer";
import "./styles/style.css";

export default function App() {
    return (
        <div className="container">
            <Header />

            <div className="wrap-container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/catalog" element={<Catalog />} />
                    {/*
                        /*  tell us that it used for all routes which started
                            from /assistant like
                            /assistant/contact
                            /assistant/test
                            and so on
                    */}
                    <Route path="/assistant/*" element={<Assistant />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}
