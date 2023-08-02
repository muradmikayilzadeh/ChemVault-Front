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

                {/* Login Form with inputs of email and password */}
                <section id='register-form'>
                    <h1 class="text-center"><b>Register</b></h1>
                    <form class="form">
                        <div class="wrapper">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" class="form-input" />

                            <label for="user-type">User type</label>
                            <select id="user-type" name="user-type" class="form-input">
                                <option value="select">Select</option>
                                <option value="learner">Learner</option>
                                <option value="researcher">Researcher</option>
                                <option value="professor">Professor</option>
                            </select>

                            <label for="institution">Institution</label>
                            <input type="text" id="institution" name="institution" class="form-input" />

                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-input" />

                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-input" />

                            <label for="password-confirm">Password Confirmation</label>
                            <input type="password" id="password-confirm" name="password" class="form-input" />

                            <button type="submit" class="submitBtn">Register</button>
                        </div>
                    </form>
                </section>



            </div>

            <Footer />
        </>
    );
};

export default HomePage;

