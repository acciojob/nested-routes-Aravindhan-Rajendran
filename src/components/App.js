
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Category from './Category';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="category/:category" element={<Category />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
