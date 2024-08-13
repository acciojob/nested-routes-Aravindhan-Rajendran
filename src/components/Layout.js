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
<<<<<<< HEAD
    <main>
=======
    <div className="main">
      <div>
        
      </div>
>>>>>>> c702a7f98267c08935cc35be6c79d8145424706a
      <Outlet /> {/* Render nested routes here */}
    </main>
  </div>
);

export default Layout;
