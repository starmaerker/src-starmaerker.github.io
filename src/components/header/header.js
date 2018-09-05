import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Andreas Gropp.</h1>
                        <h3>I'm a Berlin based <span>React Web Developer</span>, <span>Azure Cloud Advocate</span> and <span>React Native Mobile App Developer</span> creating awesome and
                    beautiful things for the world. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">                            
                            <li><a href="https://twitter.com/Starmaerker" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://github.com/starmaerker" target="_blank"><i className="fa fa-github-square" /></a></li>
                            <li><a href="https://www.linkedin.com/in/andreas-gropp-a786a219/" target="_blank"><i className="fa fa-linkedin" /></a></li>                            
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        );    
    }
}