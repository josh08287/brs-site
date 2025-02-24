import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab js-logo fa-react fa-2x" aria-hidden="true" />
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <span className="brand-first">Blaines</span>
      <span className="brand-second">Repair</span>
      <span className="brand-third">Service</span>
    </NavLink>
  </div>
);

export default HeaderBarBrand;
