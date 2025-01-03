import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css';

import Home from './Components/Home.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
            <Route path='/Home' element={<Home />} />
          </Routes>
      </Router>
  </React.StrictMode>
);

