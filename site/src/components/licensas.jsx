import React from "react";
import "../styles/licensas.css";
import Header from "../components/header";
import Footer from "../components/footer";

function licensas() {
    return(
        <div className="container">
            <Header title="Licenses" />
            <h1>Licenses Page</h1>
            <p>Here is some information about the licenses for this project.</p>
            <Footer />
        </div>
    );
};

export default licensas;