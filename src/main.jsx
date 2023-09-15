import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion'; // Impor AnimatePresence
import App from './App.jsx';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <App />
    </AnimatePresence>
  </React.StrictMode>
);
