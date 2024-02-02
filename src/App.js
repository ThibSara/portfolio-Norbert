import React from 'react';
import './App.css';
import { Carousel } from './components/ui/Carousel';
import { Navbar } from './components/ui/Navbar';
import { ThreeModel } from './components/ui/ThreeModel';

function App() {
  return (
    <div>
      <div className="app-container">
      <div className="center-container">
        <Carousel/>
      </div>
    </div>
    </div>
  );
}

export default App;
