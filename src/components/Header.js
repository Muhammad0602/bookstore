import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>

        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </header>

  );
}

export default Header;
