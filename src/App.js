import React from 'react';
import { Router } from "@reach/router"
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main id="main">
        <Router>
          <Home path="/" />
        </Router>
      </main>
    </div>
  );
}

export default App;
