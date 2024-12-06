// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Global styles for your app
import App from './App'; // Import the App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
