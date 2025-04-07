import React from 'react';
import { createRoot } from 'react-dom/client'; // gunakan createRoot, bukan ReactDOM.render
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Tetap bisa pakai reportWebVitals
reportWebVitals();
