import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const captains = console;

function NavBar(props) {

  return (
    <div className="column is-2">
      <nav className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active-link' : '')
            }
          >
            Home
          </NavLink>
          
        </ul>
        {props.children}
      </nav>
    </div>
  );
}
export default NavBar;
