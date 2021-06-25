import React, { useState } from 'react';
import "../css/home.scss";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";
import close from "../img/icon-close.svg";

const Home = () => 
{
    const [show, setShow] = useState(false);

    return (
        <section className="home">
            <header className={show ? "show" : ""}>
                <img className="logo" src={logo} alt="logo" />
                <img onClick={() => setShow(!show)} className="hamburger" src={hamburger} alt="hamburger" />
                <img onClick={() => setShow(!show)} className="close" src={close} alt="close" />
                <div className="left_">
                    <img src={logo} alt="logo" />
                    <nav>
                        <ul className="first_nav">
                            <li className="product"><a href="#product">Product</a></li>
                            <li><a href="#company">Company</a></li>
                            <li onClick={() => setShow(!show)} className="connect"><a href="#connect">Connect
                                <ul className="second_nav">
                                    <li className="nested"><a href="#contact">Contact</a></li>
                                    <li className="nested"><a href="#newsletter">Newsletter</a></li>
                                    <li className="nested"><a href="#linkedin">LinkedIn</a></li>
                                </ul>
                            </a></li>
                        </ul>
                    </nav>
                </div>
                <div className="right_">
                    <li><a href="#login">Login</a></li>
                    <button className="btn white_bg">Sign Up</button>
                </div>
            </header>

            <div className="wrapper">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div className="buttons">
                    <button className="btn white_bg">Start for Free</button>
                    <button className="btn transparent_bg">Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Home
