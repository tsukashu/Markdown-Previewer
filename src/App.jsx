import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App App-header'>
      <h2>Hello Vite + React!</h2>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
    </div>
  );
}

export default App;
