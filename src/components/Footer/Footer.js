import React from 'react';
import './Footer.css'
const Footer = () => {

    const currentYear=new Date().getFullYear()

    return (
        <footer>
            <ul className="footer-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
            </ul>
            <p className="copyright">copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;
