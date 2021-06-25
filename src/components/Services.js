import React from 'react';
import "../css/services.scss";
import laptop from "../img/illustration-laptop-mobile.svg";

const Services = () => 
{
    return (
        <section className="services">
            <div className="container">
                <div className="grid_services">
                    <img src={laptop} alt="laptop_" />
                    <div className="services1">
                        <div className="services1_top">
                            <h2>Free, open, simple</h2>
                            <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                        </div>
                        <div className="services1_bottom">
                            <h2>Powerful tooling</h2>
                            <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment 
                            a breeze, but capable of producing even the most complicated sites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
