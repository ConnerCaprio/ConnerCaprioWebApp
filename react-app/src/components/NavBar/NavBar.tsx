import React, { FC } from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    
  <a className="navbar-brand" href="#"><img src='/assets/images/transparentLogo.png' alt='Conner Caprio Site Logo' style={{width: 55}}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Wine App</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Component Demos</a>
      </li>
    </ul>
  </div>
</nav>
);

export default NavBar;
