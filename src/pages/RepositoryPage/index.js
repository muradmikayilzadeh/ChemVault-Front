import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import "./style.modules.css";


const RepositoryPage = () => {
    return (
        <>

            <Navbar />

            <div class="container">

                <section id="repo-single">

                    <div class="repo-essential-data">
                        <div class="title">
                            <h1 class="text-left"><b>Organic Data Repository</b></h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam
                            </p>

                            <ul class="collaborators list list-inline">
                                <li>
                                    <img src={require("../../assets/imgs/placeholders/usr1.png")}></img>
                                </li>
                                <li>
                                    <img src={require("../../assets/imgs/placeholders/usr2.png")}></img>
                                </li>
                                <li>
                                    <img src={require("../../assets/imgs/placeholders/usr3.png")}></img>
                                </li>
                                <li>
                                    <img src={require("../../assets/imgs/placeholders/usr4.png")}></img>
                                </li>
                            </ul>

                        </div>
                        <div class="repo-cover-img">
                            <img src={"https://firebasestorage.googleapis.com/v0/b/qroovy-a9b3a.appspot.com/o/chemVault-placeholders%2Fph4.png?alt=media&token=a7bf5740-04f1-4e3a-8255-a0eac866438c"}></img>
                        </div>
                    </div>

                </section>

                <section id="data-management">
                    <h2 class="text-center">Data Management Area (Files, folders and etc.)</h2>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default RepositoryPage;

