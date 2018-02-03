import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <p>Header</p>
    <nav className="Nav">
      <ul className="Nav-primary">
        <li><NavLink exact to="/">Finder</NavLink></li>
        <li><NavLink exact to="/stores">Stores</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
