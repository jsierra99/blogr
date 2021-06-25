import React from 'react';
import "../css/state.scss";
import circle from "../img/bg-pattern-circles - Copy.svg";
import circle2 from "../img/bg-pattern-circles.svg";
import phones from "../img/illustration-phones.svg";

const State = () => 
{
    return (
        <section className="state">
            <div className="container">
                <div className="circles_cut">
                    <img className="circles" src={circle} alt="background" />
                    <img className="circle2" src={circle2} alt="background" />
                </div>
                <div className="grid_state">
                    <img className="phones" src={phones} alt="phone_bg" />
                    <div className="state1">
                        <h1>State of the Art Infrastructure</h1>
                        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default State
