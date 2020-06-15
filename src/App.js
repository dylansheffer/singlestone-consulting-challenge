import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main id="main">
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
}

export default App;
