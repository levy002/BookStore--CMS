import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <header className="px-12">
    <nav className="flex justify-between items-center bg-white py-6 w-11/12 mx-auto">
      <div className="flex jutify-between items-center gap-6">
        <h1 className="text-azure text-3xl font-bold font-montserrat w-60">
          Bookstore CMS
        </h1>
        <Link
          to="/"
          className="leading-normal text-black-two font-montserrat font-sm font-normal"
        >
          BOOKS
        </Link>
        <Link
          to="/categories"
          className="leading-normal text-black-two font-montserrat font-sm font-normal"
        >
          CATEGORIES
        </Link>
      </div>
      <div className="text-blue-500 rounded-full border border-zic-50 p-3">
        <ImUser className="text-blue-500" />
      </div>
    </nav>
  </header>
);

export default Navbar;
