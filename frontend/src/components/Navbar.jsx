import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          CLEAN.
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="var(--color-primary-dark)"/> : <Menu size={28} color="var(--color-primary-dark)"/>}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-links" onClick={() => setIsOpen(false)}>How It Works</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-links" onClick={() => setIsOpen(false)}>Reviews</a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-links" onClick={() => setIsOpen(false)}>FAQ</a>
          </li>
          <li className="nav-item nav-item-cart">
            <Link to="/cart" className="nav-links cart-link" onClick={() => setIsOpen(false)}>
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
              Buy Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
