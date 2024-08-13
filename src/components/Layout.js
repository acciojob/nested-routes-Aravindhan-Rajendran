import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
    <main>
      <div className="main">
        <h1>Index</h1>
        <Outlet /> {/* Render nested routes here */}
      </div>
    </main>
  </div>
);

export default Layout;