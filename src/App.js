import logo from './logo.svg';
import './App.css';
import WelcomeFC from './components/WelcomeFC';
import Welcome from './components/Welcome';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
        {/* <WelcomeFC name="Nahla" age={25} address="123 Main St" /> */}
        <Welcome name="Basma" age={25} address="123 Main St" />
        <Product name="Laptop" price={999.99} />
    </div>
  );
}

export default App;
