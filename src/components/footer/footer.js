import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://github.com/starmaerker" target="_blank"><i className="fab fa-github-square" /></a></li>
                            <li><a href="https://www.linkedin.com/in/andreas-gropp-a786a219/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                            <li><a href="https://www.hackerrank.com/starmaerker?hr_r=1" target="_blank"><i className="fab fa-hackerrank" /></a></li>
                            <li><a href="https://twitter.com/Starmaerker" target="_blank"><i className="fab fa-twitter" /></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2014 CeeVee</li>
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}