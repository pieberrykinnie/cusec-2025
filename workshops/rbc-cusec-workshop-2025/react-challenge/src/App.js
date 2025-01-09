import './App.css';
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Watch list
        </p>
      </header>
      <div className="Gallery-container">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
