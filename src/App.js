import './App.css';
import samosaImage from './samosa.webp';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1> Samosa Selector</h1>
            <img src={samosaImage} alt="Samosa" style={{width: '200px', marginBottom: '20px'}}/>

        </header>
    </div>
  );
}

export default App;
