import React from 'react';
import { Router } from "@reach/router"
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main id="main">
        <Router>
          <Home path="/" />
          <GetStarted path="/get-started" />
        </Router>
      </main>
    </div>
  );
}

export default App;
