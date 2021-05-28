import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Movies/>
      <h1>All movies</h1>
       
    </div>
  );
}

export default App;
