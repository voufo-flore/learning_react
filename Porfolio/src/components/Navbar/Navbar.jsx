import React,  { useState } from "react";
import './navbar.css'; 
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };
 
  return (
    <header>
    {/* <MobileNav is openMenu={openMenu} toggleMenu={toggleMenu} /> */}
    <nav className="nav-wrapper">
      <div className="nav-content">
        <p className="logo">Time to program</p>

        <ul className="desktop-nav">
          <li>
            <a className="menu-item">Home</a>
          </li>
          <li>
            <a className="menu-item">Skills</a>
          </li>
          <li>
            <a className="menu-item">Work Experience</a>
          </li>
          <li>
            <a className="menu-item">Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
        
           Hire me
          </button>
        </ul>


        <div className="menu-btn" onClick={toggleMenu}>
          {Array.from({length: 3}).map((_, index) => (
            <span className={`span-${index}`} />
          )) }
        </div>

      </div>
    </nav>
        <div className={openMenu ? "mobile-nav active": "mobile-nav"}></div>
    </header>
  );
};

export default Navbar;
