import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import './Avatar.scss';

const Header = () => (
  <div className="Header">
    <NavLink exact to="/"><div className="Avatar"></div></NavLink>
    <div className="Header-title">PIE OF THE DAY</div>
  </div>
);

export default Header;
