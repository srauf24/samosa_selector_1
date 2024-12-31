import './App.css';
import React, { useState } from 'react';
import samosaImage from './samosa.webp';

function App() {
    const [count, setCount] = useState(0);
    const handleSingleClick = () => {
        setCount(count + 1);
    };
    const buyDoubleStuffed = () => {
        if (count >= 10)
        {
            setCount((prevCount) => (prevCount * 2) - 10);

        }
    };
    const buyPartyPack = () => {
        if (count >= 100)
        {
                    setCount((prevCount) => (prevCount * 100) - 100);

        }
    };
    const buyFullFeastPack = () => {
        if (count >= 1000)
        {
                    setCount((prevCount) => (prevCount * 1000) - 1000);

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


            <div className="Container">
                <div className="Upgrade">
                    <h3> Double Stuffed</h3>
                    <p> Double stuffed ground beef</p>
                    <button className="Button" onClick={buyDoubleStuffed}>
                        10 Samosas
                    </button>
                </div>
                <div className="Upgrade">
                    <h3> Party Pack</h3>
                    <p> Grab some samosas for your family</p>
                    <button className="Button" onClick={buyPartyPack}>
                        100 Samosas
                    </button>
                </div>
                <div className="Upgrade">
                    <h3> Full Feast</h3>
                    <p> Grab some samosas for an event/party</p>
                    <button className="Button" onClick={buyFullFeastPack}>
                        1000 Samosas
                    </button>
                </div>


            </div>
        </header>
    </div>
  );
}

export default App;
