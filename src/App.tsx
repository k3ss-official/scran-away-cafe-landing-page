import React from 'react';
import './App.css';
import Hero from './components/Hero';
import InteractiveMenu from './components/InteractiveMenu';
import Reviews from './components/Reviews';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <InteractiveMenu />
      <Reviews />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Scran Away Cafe</h3>
            <p>Chorley's little secret for good scran</p>
            <p>73 Bolton Street, PR7 3AG</p>
            <p>01257 824763</p>
            <p>Mon-Sat: 7am-3pm, Sun: 8am-2pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Scran Away Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;