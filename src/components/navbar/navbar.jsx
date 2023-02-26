import React from 'react';
import '../../styles/navcss.css';

const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <a className='navbar-brand' href='tim'>
          TiM's Blog
        </a>
        <div className='navbar-links'>
          <a className='nav-link' href='Home'>
            Home
          </a>
          <a className='nav-link' href='New'>
            New Blog
          </a>
          <a className='nav-link' href='about'>
            About
          </a>
          <a className='nav-link' href='projects'>
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
