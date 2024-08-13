import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
    <div className="main">
      <div>
        
      </div>
      <Outlet /> {/* Render nested routes here */}
    </div>
  </div>
);

export default Layout;
