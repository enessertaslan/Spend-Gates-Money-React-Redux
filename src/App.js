
import './App.css';
import Landing from './components/Landing/main.js';
import Items from './components/Items';
import Receipt from './components/Receipt'

function App() {
  return (
    <div className="App">
       <Landing></Landing>
      <Items></Items>
      <Receipt></Receipt>
    </div>
  );
}

export default App;
