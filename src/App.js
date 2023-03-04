import logo from './assets/img/logo.svg';
import './assets/css/app.css';

function App() {
    return (

        <div className="app">

            <header className="app__header">

                <div className="app__main flex_col">

                    <img src={logo} className="app__logo" alt="logo" />

                    <p>
                        React app.jsx website is running
                    </p>

                </div>

            </header>

            <Footer />

        </div>

    );
}

function Footer() {
    return (

        <div className="Footer__menu container">

            <div className="Footer__card">



            </div>

            <div className="Footer__card">

                

            </div>

            <div className="Footer__card">

                

            </div>

            <div className="Footer__card">

                

            </div>

            <div className="Footer__FAQ">



            </div>

            <div className="Footer__copy">



            </div>

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
