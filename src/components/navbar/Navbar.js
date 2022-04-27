import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <div>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </div>
    <ImUser />
  </nav>
);

export default Navbar;
