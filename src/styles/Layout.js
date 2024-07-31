import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/men">Men</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
    <div className="main-container">
      {/* Nested routes will be rendered here */}
    </div>
  </div>
);

export default Layout;
