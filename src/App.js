import './App.css';
import React, { useState } from 'react';
import samosaImage from './samosa.webp';

function App() {
    const [count, setCount] = useState(0);
    const handleSingleClick = () => {
        setCount(count + 1);
    };
    const handleDoubleClick = () => {
        if (count >= 10)
        {
            setCount(count + 10);
        }
    };

  return (
    <div className="App">
        <header className="header">
            <h1> Samosa Selector</h1>
            <img src={samosaImage}
                 className="samosa"
                 style={{width: '200px', marginBottom: '20px'}}
                 onClick={handleSingleClick}
            />
            <h1> Count: {count}</h1>


        <div className= "Container">
            <div className="Upgrade">
                <h3> Double Stuffed</h3>
                <p> Double stuffed ground beef</p>
                <button className = "Button" onClick={handleDoubleClick}>
                    10 Samosas
                </button>
            </div>


        </div>
        </header>
    </div>
  );
}

export default App;
