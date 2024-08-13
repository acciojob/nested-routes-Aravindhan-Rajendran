import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Women = () => {
  const items = ['Grooming', 'Shirt', 'Trouser', 'Jewellery']; // Example items for demonstration

  return (
    <div>
      <p>Women Items:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/women/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Placeholder for nested routes */}
      <Outlet />
    </div>
  );
};

export default Women;
