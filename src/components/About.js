import React from 'react';
import "../css/about.scss";
import camera from "../img/illustration-editor-desktop.svg";

const About = () => 
{
    return (
        <section className="about">
            <div className="container">
                <h1>Designed for the future</h1>
                <div className="grid_about">
                    <div className="about1">
                        <div className="about1_top">
                            <h3>Introducing an extensible editor</h3>
                            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change 
                            the looks of a blog.</p>
                        </div>
                        <div className="about1_bottom">
                            <h3>Robust content management</h3>
                            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                        </div>
                    </div>
                    <img src={camera} alt="camera" />
                </div>
            </div>
        </section>
    )
}

export default About
