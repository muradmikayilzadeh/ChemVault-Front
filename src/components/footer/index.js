// Bootstrap navbar component
// --------------------------------------------------------

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.modules.css";

const Footer = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <BrowserRouter to="/" >
                        <h1 className="navbar-brand">ChemVault</h1>
                    </BrowserRouter>

                    {/* Links to Repositories, About */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <BrowserRouter to="/repositories" >
                                    <p className="nav-link">MIT License</p>
                                </BrowserRouter>
                            </li>
                            <li className="nav-item">
                                <BrowserRouter to="/about">
                                    <p className="nav-link">Research</p>
                                </BrowserRouter>
                            </li>
                            <li className="nav-item">
                                <BrowserRouter to="/about">
                                    <p className="nav-link">Open Chemistry</p>
                                </BrowserRouter>
                            </li>
                        </ul>
                    </div>

                    <div className="login-register collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <a href="github.com">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample07"
                        aria-controls="navbarsExample07"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav >
        </>
    );
}

export default Footer;
