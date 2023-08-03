import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Repository from '../../components/repository';
import "./style.modules.css";


const RepostoriesPage = () => {
    return (
        <>

            <Navbar />

            <div class="container">

                <section id="repositories">
                    <h1 class="text-center"><b>Repositories</b></h1>

                    <div class="repo-wrapper">
                        <Repository cover={"https://firebasestorage.googleapis.com/v0/b/qroovy-a9b3a.appspot.com/o/chemVault-placeholders%2Fph1.png?alt=media&token=659cb3ac-1d91-45db-9dfc-1913e4941d84"} lastUpdate={"Updated 2 days ago"} size={"10GB"} name={"Repo1"} author={"Murad M"} description={"                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam"} />
                        <Repository cover={"https://firebasestorage.googleapis.com/v0/b/qroovy-a9b3a.appspot.com/o/chemVault-placeholders%2Fph2.png?alt=media&token=99e89dbf-ded8-4ae3-97fa-1cb9771ef8b5"} lastUpdate={"Updated 2 days ago"} size={"5GB"} name={"Repo2"} author={"Murad M"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam"} />
                        <Repository cover={"https://firebasestorage.googleapis.com/v0/b/qroovy-a9b3a.appspot.com/o/chemVault-placeholders%2Fph3.png?alt=media&token=17a5d709-70cf-43fb-b07a-8afe563b4461"} lastUpdate={"Updated 2 days ago"} size={"1GB"} name={"Repo3"} author={"Murad M"} description={"                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam"} />
                        <Repository cover={"https://firebasestorage.googleapis.com/v0/b/qroovy-a9b3a.appspot.com/o/chemVault-placeholders%2Fph4.png?alt=media&token=a7bf5740-04f1-4e3a-8255-a0eac866438c"} lastUpdate={"Updated 2 days ago"} size={"10KB"} name={"Repo4"} author={"Murad M"} description={"                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam"} />
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default RepostoriesPage;

