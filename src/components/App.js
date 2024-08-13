import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Women from './Women';
import Item from './Item';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Add a Home component if needed */}
        <Route path="women" element={<Women />}>
          <Route path=":item" element={<Item />} />
        </Route>
        {/* Add other routes here */}
      </Route>
    </Routes>
  </Router>
);

export default App;