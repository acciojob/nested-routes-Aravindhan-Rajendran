import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Item from './Item';

const Category = ({ category }) => {
  const items = ['Item 1', 'Item 2', 'Item 3']; // Example items for demonstration

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/${category}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      
      {/* Nested Route for Items */}
      <Routes>
        <Route path=":item" element={<Item />} />
      </Routes>
    </div>
  );
};

export default Category;
