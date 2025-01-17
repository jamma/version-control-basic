import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import P5Sketch from './P5Sketch';
import { sketch } from './sketch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Content on top */}
      <div className="content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Code Collective Version Control Basic Proficiency</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      {/* p5.js sketch */}
      <P5Sketch sketch={sketch} />
    </div>
  );
}

export default App;