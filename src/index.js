// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './global.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
