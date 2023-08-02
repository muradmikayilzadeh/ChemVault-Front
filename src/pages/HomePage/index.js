// Splash page for the application like in kaggle.com

import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import "./style.modules.css";


const HomePage = () => {
    return (
        <>

            <Navbar />

            <div class="container">

                <section id="welcome">
                    <div class="welcome-subpart">
                        <h2>Empower Chemistry with ChemVault: Unleash Boundless Collaborations!</h2>
                        <p>Embrace the Chemistry Revolution with ChemVault - Your Open-Source Hub for Effortless Collaboration, Comprehensive Data Management, and In-Depth Molecular Insights; Join our community of passionate chemists and unlock the potential of open collaboration in the pursuit of scientific excellence!
                        </p>
                    </div>

                    <div class="welcome-subpart text-center">
                        <img src={require("../../assets/imgs/splash_page_greeting.png")} alt="Splash Page Greeting" class="img img-responsive" />
                    </div>
                </section>

                <section id="user-types">
                    <h3>Who's on <b>ChemVault?</b></h3>
                    <div class="user-types-wrapper">
                        <div class="user-type">
                            <img src={require("../../assets/imgs/learner.png")} alt="Splash Page Greeting" class="img img-responsive" />
                            <h4>Learners</h4>
                            <p class="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget
                            </p>

                        </div>
                        <div class="user-type">
                            <img src={require("../../assets/imgs/researcher.png")} alt="Splash Page Greeting" class="img img-responsive" />
                            <h4>Researchers</h4>
                            <p class="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget
                            </p>
                        </div>
                        <div class="user-type">
                            <img src={require("../../assets/imgs/professor.png")} alt="Splash Page Greeting" class="img img-responsive" />
                            <h4>Professors</h4>
                            <p class="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget
                            </p>
                        </div>
                    </div>
                </section>

                <section id="features">
                    <h2 class="text-center">Some Features and Screenshots will be here</h2>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default HomePage;

