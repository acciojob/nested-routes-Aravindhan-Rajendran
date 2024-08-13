import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Women from './Women';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/women/*" element={<Women />} />
      </Route>
    </Routes>
  </Router>
);

export default App;