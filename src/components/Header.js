import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { ImUser } from 'react-icons/im';

function Header() {
  return (
    <header className="header">
      <h1>Bookstore CMS</h1>
      <ul className="links">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>

        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <button type="button" className="icon-button">
        <ImUser className="user" />
      </button>
    </header>

  );
}

export default Header;
