import React from 'react';
import bgFooter from '../../../assets/images/footer.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${bgFooter})` }} className="max-w-[1440px] mx-auto p-10 bg-cover bg-center text-accent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className='flex flex-col gap-2'>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Emergency Checkup</Link>
                <Link to="/" className="link link-hover">Monthly Checkup</Link>
                <Link to="/" className="link link-hover">Weekly Checkup</Link>
                <Link to="/" className="link link-hover">Deep Checkup</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <span className="footer-title">ORAL HEALTH</span>
                <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                <Link to="/" className="link link-hover">Cavity Filling</Link>
                <Link to="/" className="link link-hover">Teeth Whitening</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <span className="footer-title">OUR ADDRESS</span>
                <Link to="/" className="link link-hover">New York - 101010 Hudson</Link>
            </div>
        </footer>
    );
};

export default Footer;