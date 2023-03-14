import React, { FC } from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    
  <a className="navbar-brand" href="#"><img src='/assets/images/transparentLogo.png' alt='Conner Caprio Site Logo' style={{width: 55}}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
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
