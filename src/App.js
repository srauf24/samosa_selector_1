import './App.css';
import React, { useState } from 'react';
import samosaImage from './samosa.webp';

function App() {
    const [count, setCount] = useState(0);
    const handleSingleClick = () => {
        setCount(count + 1);
    };

  return (
    <div className="App">
        <header className="App-header">
            <h1> Samosa Selector</h1>
            <img src={samosaImage}
                 alt="Samosa"
                 style={{width: '200px', marginBottom: '20px'}}
                 onClick={handleSingleClick}

            />
            <p>Count: {count}</p>

        </header>
    </div>
  );
}

export default App;
