import React from 'react';
import "../css/footer.scss";
import logo from "../img/logo.svg"

const Footer = () => 
{
    return (
        <footer>
            <div className="container">
                <div className="grid_footer">
                    <img src={logo} alt="logo" />
                    <div className="footer1">
                        <h4>Product</h4>
                        <ul className="ul_footer">
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>
                    <div className="footer1">
                        <h4>Company</h4>
                        <ul className="ul_footer">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer1">
                        <h4>Connect</h4>
                        <ul className="ul_footer">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
