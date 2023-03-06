import React from 'react';
import '../../styles/navcss.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <a className='navbar-brand' href='/'>
          TiM's Blog
        </a>
        <div className='navbar-links'>
          <Link to='/' className='nav-link'>
            {' '}
            Home
          </Link>
          <Link to='/new' className='nav-link'>
            {' '}
            New Blog
          </Link>
          <Link to='/about' className='nav-link'>
            {' '}
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
