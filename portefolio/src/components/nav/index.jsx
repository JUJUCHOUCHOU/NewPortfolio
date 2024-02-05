import React, { useState } from 'react';


function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo">Julie Cohen</div>
      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li><a href="#a-propos">À propos</a></li>
        <li><a href="#mes-services">Mes services</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#travaux">Travaux</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Nav;
