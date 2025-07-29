import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import Keyboard from './Keyboard';
import Settings from './Settings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Keyboard" element={<Keyboard />} />
    <Route path="/gullah" element={<App />} />
    <Route path="/Settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);
