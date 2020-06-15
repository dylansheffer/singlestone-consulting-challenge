import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Normalize CSS is used to establish a baseline of styles between browsers
import './normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
