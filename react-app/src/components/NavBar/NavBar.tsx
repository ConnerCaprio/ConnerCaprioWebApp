import React, { FC } from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="nav-link" to="/"><img src='/assets/images/transparentLogo.png' alt='Conner Caprio Site Logo' style={{width: 55}}></img></NavLink>
  <div className="navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/wines">Wine App</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/componentsDemo">Component Demos</NavLink>
      </li>
    </ul>
  </div>
</nav>
);

export default NavBar;
