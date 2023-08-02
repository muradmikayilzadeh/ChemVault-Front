// Splash page for the application like in kaggle.com

import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import "./style.modules.css";


const AboutUs = () => {
    return (
        <>

            <Navbar />

            <div class="container">

                {/* Login Form with inputs of email and password */}
                <section id='about-us'>
                    <h1 class="text-center"><b>About Us</b></h1>
                    <img src={require("../../assets/imgs/about_us.png")} alt="Splash Page Greeting" class="img img-responsive" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam

                    </p>
                </section>



            </div>

            <Footer />
        </>
    );
};

export default AboutUs;

