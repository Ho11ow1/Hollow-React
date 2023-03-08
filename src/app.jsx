import logo from './assets/img/logo.svg';
import './assets/css/app.css';

function App() {
    return (

        <div className="app">

            <header className="app__header">

                <div className="app__main">

                    <img src={logo} className="app__logo" alt="logo" />

                    <p>
                        React app.jsx website is running
                    </p>

                </div>

            </header>

            <Footer/>

            <Copyright/>

        </div>

    );
}

    // function Navbar() {
    //     return (

    //         <div className="nav container">

    //             <a href="#" class="nav__logo">
    //                 <i class="ri-leaf-line nav__logo-icon"> </i> 
    //                     Hollow1
    //             </a>

    //             <div className="nav__menu">

    //                 <ul className="nav__list">

    //                     <li className="nav__item">

    //                         <a href="#" className="nav__link">
    //                             Home
    //                         </a>

    //                     </li>

    //                     <li className="nav__item">

    //                         <a href="#" className="nav__link">
    //                             About
    //                         </a>

    //                     </li>

    //                     <li className="nav__item">

    //                         <a href="#" className="nav__link">
    //                             Shop
    //                         </a>

    //                     </li>

    //                     <li className="nav__item">

    //                         <a href="#" className="nav__link">
    //                             FaQs
    //                         </a>

    //                     </li>

    //                     <li className="nav__item">

    //                         <a href="#" className="nav__link">
    //                             Contact
    //                         </a>

    //                     </li>

    //                 </ul>

    //             </div>

    //         </div>

    //     );
    // }

//Input
//<img src={img} alt="img" />
//<img src={img} alt="img" />
//<img src={img} alt="img" />
function Footer() {
    return (

        <div className="footer__menu grid">

            <div className="footer__card">

                <h3 className="footer__title">
                    Hollow1
                </h3>

                <p className="footer__text">
                    Developer
                </p>

                <p className="footer__text">
                    Status : Available
                </p>

                <p className="footer__text">
                    Availability :
                </p>

                <p className="footer__text">
                    10:00 - 22:00
                </p>

            </div>

            <div className="footer__card">

                <h3 className="footer__title">
                    Services
                </h3>

                <p className="footer__text">
                    Web Applications
                </p>

                <p className="footer__text">
                    BackEnd development
                </p>

                <p className="footer__text">
                    React Applications
                </p>

                <p className="footer__text">
                    Vue Applications
                </p>

            </div>

            <div className="footer__card">

                <h3 className="footer__title">
                    Legal
                </h3>

                <p className="footer__text">
                    Contact Us
                </p>

                <p className="footer__text">
                    Privacy Policy 
                </p>

                <p className="footer__text">
                    Terms of Service
                </p>

                <p className="footer__text">
                    FAQs
                </p>

            </div>

            <div className="footer__card">

                <h3 className="footer__title">
                    Socials
                </h3>

                <p className="footer__text">
                    Facebook :
                </p>

                <p className="footer__text">
                    Instagram : 
                </p>

                <p className="footer__text">
                    Twitter : 
                </p>

                <p className="footer__text">
                    Discord :
                </p>

            </div>

        </div>

    );
}

function Copyright() {
    return (

        <div className="footer__copy">

            <h4>
                © Hollow1, All rigths reserved
            </h4>

        </div>

    );
}

export default App;
// Created by Hollow1#0842
//                                         $$$$$$   $$$$$$
//                                        $$$$$$$$ $$$$$$$$
//                                        $$$$$$$$$$$$$$$$$
//                                         $$$$$$$$$$$$$$$
//                                           $$$$$$$$$$$
//                                             $$$$$$$
//                                               $$$
//                                                $
//
