import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import { MdOutlineClose } from 'react-icons/md';

import { VscThreeBars } from 'react-icons/vsc';

import './navbar.css';
//import Logo from '../images/3.png';
const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img alt="_EKIP LOGO"></img>
        </Link>

        {/*   <ul className`="nav__Links"> */}
        <ul className="nav__Links">
          {links.map(({ path, name }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
