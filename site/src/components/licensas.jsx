import React from "react";
import "../styles/licensas.css";
import Header from "../components/header";
import Footer from "../components/footer";

function licensas() {
    return(
        <div className="container">
            <Header title="Licenses" />
            <h1>Licensas</h1>
            <p>Texto pra encher espaço</p>
            <Footer />
        </div>
    );
};

export default licensas;