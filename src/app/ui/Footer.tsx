import React from 'react';
import FooterElement from './components/footer-element';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-5">
      <div className="flex flex-wrap gap-x-5 px-5">
        <FooterElement title="About Us">
          <p>Connecting you with skilled artisans for all your handyman needs.</p>
        </FooterElement>
        <FooterElement title="Quick Links">
          <ul>
            <li><a className='text-[#ffd700] hover:underline hover:underline-offset-4' href="#services">Services</a></li>
            <li><a className='text-[#ffd700] hover:underline hover:underline-offset-4' href="#about">About Us</a></li>
            <li><a className='text-[#ffd700] hover:underline hover:underline-offset-4' href="#contact">Contact</a></li>
            <li><a className='text-[#ffd700] hover:underline hover:underline-offset-4' href="#faq">FAQ</a></li>
          </ul>
        </FooterElement>
        <FooterElement title='Contact Us'>
          <h3>Contact Us</h3>
          <p>Email: support@handymanapp.com</p>
          <p>Phone: +1-234-567-890</p>
        </FooterElement>
        <FooterElement title='Follow Us'>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </FooterElement>
      </div>
      <div className='text-center mt-5 text-neutral-400'>
        <p>&copy; 2024 Handyman App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
