import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Women from './Women';
import Item from './Item'; // Import the Item component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/women" element={<Women />}>
          <Route path=":item" element={<Item />} /> {/* Nested route for items */}
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;