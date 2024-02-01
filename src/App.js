import React from 'react';
import './App.css';
import { Cube } from './components/ui/ThreeCube';
import { Carousel } from './components/ui/Carousel';

function App() {
  return (
    <div className="App">
      <div className="content-container">
      <Carousel />
      </div>
    </div>
  );
}

export default App;
