import React, { useState } from 'react';


function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo">
        <h1 className='df'>Julie Cohen</h1>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li><a className='mtt' href="#a-propos">À propos</a></li>
        <li><a className='mtt' href="#mes-services">Mes services</a></li>
        <li><a className='mtt' href="#competences">Compétences</a></li>
        <li><a className='mtt' href="#travaux">Travaux</a></li>
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
